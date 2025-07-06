import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

interface ExtendedDataSourceOptions {
  seeds?: string[];
}

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'serdev',
  password: 'nifer2030',
  database: 'cuaderno_pedagogico',
  entities: ['src/**/*.entity{.ts,.js}'],
  migrations: ['src/database/migrations/*{.ts,.js}'],
  seeds: ['src/database/seeds/*{.ts,.js}'],
  synchronize: false,
  migrationsRun: true,
  namingStrategy: new SnakeNamingStrategy(),
  logging: true,
} as ExtendedDataSourceOptions & DataSource['options']);
