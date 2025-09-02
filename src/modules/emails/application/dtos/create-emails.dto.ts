import { IsNotEmpty, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmailDto {
  @ApiProperty({ example: 1, description: 'The ID of the user' })
  @IsNotEmpty()
  @IsInt()
  UserID: number;

  @ApiProperty({ example: 'Welcome Email', description: 'The subject of the email' })
  @IsNotEmpty()
  Subject: string;

  @ApiProperty({ example: 'Hello, welcome to our platform!', description: 'The body content of the email' })
  @IsNotEmpty()
  Body: string;
}
