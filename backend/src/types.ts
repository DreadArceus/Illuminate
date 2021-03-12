import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
import { Request, Response } from "express";
import { Field, InputType, ObjectType } from "type-graphql";

export type MyContext = {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
  req: Request;
  res: Response;
};

@InputType("codeOptionsInput")
@ObjectType()
class codeOptions {
  @Field()
  enable: boolean;

  @Field({ nullable: true })
  noInline?: boolean;
}

@InputType("contentsInput")
@ObjectType()
export class contents {
  @Field()
  key: string;

  @Field()
  classes: string;

  @Field({ nullable: true })
  content?: string;

  @Field(() => [contents], { nullable: true })
  complexContent?: contents[];

  @Field(() => codeOptions, { nullable: true })
  codeOptions?: codeOptions;
}
