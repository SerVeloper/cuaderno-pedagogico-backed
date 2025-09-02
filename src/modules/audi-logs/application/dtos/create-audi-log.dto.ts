import { IsNotEmpty, IsString, IsOptional, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAudiLogDto {
  @ApiProperty({ example: 1, description: 'The ID of the user performing the action' })
  @IsNotEmpty()
  @IsInt()
  UserID: number;

  @ApiProperty({ example: 'LOGIN', description: 'The action performed by the user' })
  @IsNotEmpty()
  @IsString()
  Action: string;

  @ApiProperty({ example: 'User logged in successfully', description: 'Additional details about the action', required: false })
  @IsOptional()
  @IsString()
  Details: string;

  @ApiProperty({ example: '192.168.1.1', description: 'The IP address of the user', required: false })
  @IsOptional()
  @IsString()
  IPAddress: string;
}
