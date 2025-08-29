import { IsString,IsNumber, IsOptional, MaxLength, IsEnum } from 'class-validator';
import { Gender } from '../../domain/entities/gender';
import { ApiProperty } from '@nestjs/swagger';



export class UpdateStudentDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  @ApiProperty({
    example: 'John',
    description: 'First name of the student',
    maxLength: 100,
    required: false,
  })
  FirstName?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  @ApiProperty({
    example: 'Doe',
    description: 'Last name of the student',
    maxLength: 100,
    required: false,
  })
  LastName?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  @ApiProperty({
    example: '1234567890',
    description: 'Identity number of the student',
    maxLength: 20,
    required: false,
  })
  IdentityNumber?: string;

  @IsOptional()
  @IsEnum(Gender)
  @ApiProperty({
    example: 'Male',
    description: 'Gender of the student',
    required: false,
  })
  Gender?: Gender;

  @IsOptional()
  @ApiProperty({
    example: '2005-05-15',
    description: 'Birth date of the student',
    required: false,
  })
  BirthDate?: Date;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  @ApiProperty({
    example: '123 Main St, City, Country',
    description: 'Address of the student',
    maxLength: 255,
    required: false,
  })
  Address?: string;

  @IsOptional()
  @IsString()
  @MaxLength(15)
  @ApiProperty({
    example: '+91 65892154',
    description: 'Phone number of the student',
    maxLength: 15,
    required: false,
  })
  Phone?: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  @ApiProperty({
    example: 'Jane Doe',
    description: 'Name of the guardian',
    maxLength: 100,
    required: false,
  })
  GuardianName?: string;

  @IsOptional()
  @IsString()
  @MaxLength(15)
  @ApiProperty({
    example: '+91 67689916',
    description: 'Phone number of the guardian',
    maxLength: 15,
    required: false,
  })
  GuardianPhone?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    example: 1,
    description: 'Level ID of the student',
    required: false,
  })
  Level?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    example: 1,
    description: 'Course ID of the student',
    required: false,
  })
  Course?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    example: 1,
    description: 'Section ID of the student',
    required: false,
  })
  Section?: number;
}
