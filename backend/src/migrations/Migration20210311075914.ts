import { Migration } from '@mikro-orm/migrations';

export class Migration20210311075914 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "guide" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "title" text not null, "author" text not null, "body" jsonb not null);');
    this.addSql('alter table "guide" add constraint "guide_title_unique" unique ("title");');
  }

}
