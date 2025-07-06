import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "6188",
      database: "school_db",
      entities: ["dist/**/*.entity{.ts,.js}"],
      migrations: ["dist/database/migrations/*{.ts,.js}"],
      synchronize: false,
      migrationsRun: true,
    }),
  ],
})
export class DatabaseModule {}