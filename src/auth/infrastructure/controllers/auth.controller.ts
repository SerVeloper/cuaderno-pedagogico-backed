import { Controller, Post, Body, HttpCode } from "@nestjs/common";
import { AuthService } from "../../application/services/auth.service";
import { RegisterDto } from "../../application/dtos/register.dto";
import { LoginDto } from "../../application/dtos/login.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("register")
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post("login")
  @HttpCode(200)
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}