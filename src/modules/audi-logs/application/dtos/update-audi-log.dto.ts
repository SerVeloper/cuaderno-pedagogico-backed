import { IsString, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAudiLogDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty({ example: 123, description: 'ID of the user' })
  UserID: number;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'CREATE', description: 'Action performed by the user' })
  Action: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Created a new record', description: 'Details of the action' })
  Details: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: '192.168.1.1', description: 'IP address of the user' })
  IPAddress: string;
}
