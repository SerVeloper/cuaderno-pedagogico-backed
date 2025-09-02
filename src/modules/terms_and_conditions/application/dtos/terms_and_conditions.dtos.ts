import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTermsAndConditionsDto {
  @ApiProperty({ example: 1, description: 'The ID of the user' })
  @IsNotEmpty()
  UserID: number;

  @ApiProperty({ example: '1.0.0', description: 'The version of the terms and conditions' })
  @IsNotEmpty()
  @IsString()
  Version: string;
}
