import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  
  @ApiProperty({ example: 'user@example.com' })
  @IsNotEmpty({ message: 'El nombre de usuario o correo electrónico no puede estar vacío.' })
  @IsString({ message: 'El nombre de usuario o correo electrónico debe ser una cadena de texto.' })
  userNameOrEmail: string;

  @ApiProperty({ example: 'password123' })
  @IsNotEmpty({ message: 'La contraseña no puede estar vacía.' })
  @IsString({ message: 'La contraseña debe ser una cadena de texto.' })
  @MinLength(8, { message: 'La contraseña debe tener al menos 6 caracteres.' })
  Password: string;
}
