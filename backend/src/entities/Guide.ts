import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { contents } from "../types";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class Guide {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property()
  createdAt: Date = new Date();

  @Field(() => String)
  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Field()
  @Property({ type: "text", unique: true })
  title!: string;

  @Field()
  @Property({ type: "text" })
  author!: string;

  @Field(() => [contents])
  @Property({ type: "JsonType[]" })
  body: contents[];
}
