import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEmailDto {
  @ApiProperty({ example: 'Meeting Reminder' })
  @IsNotEmpty()
  Subject: string;

  @ApiProperty({ example: 'This is a reminder for our meeting scheduled at 3 PM.' })
  @IsNotEmpty()
  Body: string;
}
