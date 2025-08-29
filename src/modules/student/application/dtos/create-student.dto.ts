import { IsNotEmpty, IsString, MaxLength, IsBoolean, IsNumber, IsEnum } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Gender } from '../../domain/entities/gender';
export class CreateStudentDto {
  @ApiProperty({
    description: 'First name of the student',
    example: 'John',
    maxLength: 100,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  FirstName: string;

  @ApiProperty({
    description: 'Last name of the student',
    example: 'Doe',
    maxLength: 100,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  LastName: string;

  @ApiProperty({
    description: 'Identity number of the student',
    example: '1234567890',
    maxLength: 20,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  IdentityNumber: string;

  @ApiProperty({
    description: 'Gender of the student',
    example: 'Male',
  })
  @IsNotEmpty()
  @IsEnum(Gender)
  Gender: Gender;

  @ApiProperty({
    description: 'Birth date of the student',
    example: '2005-05-15',
  })
  @IsNotEmpty()
  BirthDate: Date;

  @ApiProperty({
    description: 'Address of the student',
    example: '123 Main St, City, Country',
    maxLength: 255,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  Address: string;

  @ApiProperty({
    description: 'Phone number of the student',
    example: '+91 65892154',
    maxLength: 15,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(15)
  Phone: string;

  @ApiProperty({
    description: 'Name of the guardian',
    example: 'Jane Doe',
    maxLength: 100,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  GuardianName: string;

  @ApiProperty({
    description: 'Phone number of the guardian',
    example: '+91 67689916',
    maxLength: 15,
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(15)
  GuardianPhone: string;
  @ApiProperty({
    description: 'Level ID of the student',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  Level: number;

  @ApiProperty({
    description: 'Course ID of the student',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  Course: number;

  @ApiProperty({
    description: 'Section ID of the student',
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  Section: number;
}
