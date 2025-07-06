import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from "@nestjs/common";
import { RoleService } from "../../application/services/role.service";
import { CreateRoleDto } from "../../application/dtos/role.dto";
import { JwtAuthGuard } from "../../../common/guards/jwt-auth.guard";
import { Roles } from "../../../common/decorators/roles.decorator";

@Controller("roles")
// @UseGuards(JwtAuthGuard)
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  // @Roles("ADMIN")
  create(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.create(createRoleDto);
  }

  @Get()
  // @Roles("ADMIN")
  findAll() {
    return this.roleService.findAll();
  }

  @Get(":id")
  @Roles("ADMIN")
  findOne(@Param("id") id: string) {
    return this.roleService.findOne(+id);
  }

  @Put(":id")
  @Roles("ADMIN")
  update(@Param("id") id: string, @Body() updateRoleDto: CreateRoleDto) {
    return this.roleService.update(+id, updateRoleDto);
  }

  @Delete(":id")
  @Roles("ADMIN")
  delete(@Param("id") id: string) {
    return this.roleService.delete(+id);
  }
}