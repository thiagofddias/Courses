import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { CreateCoursesTable1724791536562 } from 'src/migrations/1724791536562-CreateCoursesTable';
import { CreateTagsTable1724848088963 } from 'src/migrations/1724848088963-CreateTagsTable';
import { CreateCoursesTagsTable1724851107724 } from 'src/migrations/1724851107724-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1724851555276 } from 'src/migrations/1724851555276-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1724852351494 } from 'src/migrations/1724852351494-AddTagsIdToCoursesTagsTable';
import { Tag } from 'src/courses/entities/tags.entity';
import { Course } from 'src/courses/entities/courses.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Course, Tag],
  synchronize: false,
};

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
