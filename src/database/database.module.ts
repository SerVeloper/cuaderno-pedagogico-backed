import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'serdev',
      password: 'nifer2030',
      database: 'cuaderno_pedagogico',
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrations: ['dist/database/migrations/*{.ts,.js}'],
      synchronize: false,
      migrationsRun: true,
    }),
  ],
})
export class DatabaseModule {}
