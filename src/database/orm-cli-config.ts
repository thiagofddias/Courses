import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1724791536562 } from 'src/migrations/1724791536562-CreateCoursesTable';
import { CreateTagsTable1724848088963 } from 'src/migrations/1724848088963-CreateTagsTable';
import { CreateCoursesTagsTable1724851107724 } from 'src/migrations/1724851107724-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1724851555276 } from 'src/migrations/1724851555276-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1724852351494 } from 'src/migrations/1724852351494-AddTagsIdToCoursesTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1724791536562,
    CreateTagsTable1724848088963,
    CreateCoursesTagsTable1724851107724,
    AddCoursesIdToCoursesTagsTable1724851555276,
    AddTagsIdToCoursesTagsTable1724852351494,
  ],
});
