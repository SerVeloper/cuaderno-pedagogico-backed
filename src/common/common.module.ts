
import { Module } from "@nestjs/common";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { RolesGuard } from "./guards/roles.guard";  


@Module({
  providers: [JwtStrategy, RolesGuard], 
  exports: [JwtStrategy, RolesGuard], 
})
export class CommonModule {}