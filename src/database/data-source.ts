import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

interface ExtendedDataSourceOptions {
  seeds?: string[];
}

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '6188',
  database: 'school_db',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/database/migrations/*{.ts,.js}'],
  seeds: ['dist/database/seeds/*{.ts,.js}'], 
  synchronize: false,
  migrationsRun: true,
  namingStrategy: new SnakeNamingStrategy(),
} as ExtendedDataSourceOptions & DataSource['options']);