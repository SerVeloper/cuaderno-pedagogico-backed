import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from "@nestjs/common";
import { PermissionService } from "../../application/services/permission.service";
import { CreatePermissionDto } from "../../application/dtos/permission.dto";
import { JwtAuthGuard } from "../../../common/guards/jwt-auth.guard";
import { Roles } from "../../../common/decorators/roles.decorator";

@Controller("permissions")
// @UseGuards(JwtAuthGuard)
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Post()
  // @Roles("ADMIN")
  create(@Body() createPermissionDto: CreatePermissionDto) {
    return this.permissionService.create(createPermissionDto);
  }

  @Get()
  @Roles("ADMIN", "USER")
  findAll() {
    return this.permissionService.findAll();
  }

  @Get(":id")
  @Roles("ADMIN")
  findOne(@Param("id") id: string) {
    return this.permissionService.findOne(+id);
  }

  @Put(":id")
  @Roles("ADMIN")
  update(@Param("id") id: string, @Body() updatePermissionDto: CreatePermissionDto) {
    return this.permissionService.update(+id, updatePermissionDto);
  }

  @Delete(":id")
  @Roles("ADMIN")
  delete(@Param("id") id: string) {
    return this.permissionService.delete(+id);
  }
}