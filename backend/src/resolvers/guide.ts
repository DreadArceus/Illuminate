import { contents, MyContext } from "../types";
import {
  Arg,
  Ctx,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { Guide } from "../entities/Guide";
import { randomInt } from "crypto";

@InputType()
class GuideInput {
  @Field()
  title: string;
  @Field()
  author: string;
  @Field(() => [contents])
  body: contents[];
}

@Resolver()
export class GuideResolver {
  @Query(() => Guide, { nullable: true })
  async me(@Ctx() { em, req }: MyContext): Promise<Guide | null> {
    if (!req.session.guideID) {
      return null;
    }
    const guide = await em.findOne(Guide, { id: req.session.guideID });
    return guide;
  }

  @Mutation(() => Guide, { nullable: true })
  async createGuide(
    @Arg("GuideOptions") GuideOptions: GuideInput,
    @Ctx() { em, req }: MyContext
  ): Promise<Guide | null> {
    const guide = em.create(Guide, {
      id: randomInt(1000000),
      title: GuideOptions.title,
      author: GuideOptions.author,
      body: GuideOptions.body,
    });
    try {
      em.persistAndFlush(guide);
    } catch {
      return null;
    }
    req.session.guideID = guide.id;
    return guide;
  }

  @Mutation(() => Guide, { nullable: true })
  async getGuide(
    @Arg("title") title: string,
    @Ctx() { em, req }: MyContext
  ): Promise<Guide | null> {
    const guide = await em.findOne(Guide, { title: title });
    if (!guide) {
      return null;
    }
    req.session.guideID = guide.id;
    return guide;
  }

  @Mutation(() => Boolean)
  async dropGuide(
    @Arg("title") title: string,
    @Ctx() { em }: MyContext
  ): Promise<boolean> {
    try {
      await em.nativeDelete(Guide, { title: title });
      await em.flush();
    } catch {
      return false;
    }
    return true;
  }

  @Query(() => [String])
  async getAll(@Ctx() { em }: MyContext): Promise<string[]> {
    const guides = await em.find(Guide, {});
    const names = guides.map((item) => item.title);
    return names;
  }
}
