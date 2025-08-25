import { DataSource } from 'typeorm';
import { PascalNamingStrategy } from './naming.strategy';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/**/*.entity{.ts,.js}', 'dist/**/*.orm.entity{.ts,.js}'],
  migrations: ['dist/database/migrations/*{.ts,.js}'],
  synchronize: false,
  migrationsRun: true,
  namingStrategy: new PascalNamingStrategy(),
  entitySkipConstructor: true
} as DataSource['options'] & {
  seeds?: any[];
});

