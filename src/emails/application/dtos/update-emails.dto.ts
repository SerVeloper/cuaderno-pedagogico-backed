import { IsNotEmpty, IsInt} from 'class-validator'

export class UpdateEmailDto {
 

  @IsNotEmpty()
  Subject: string

  @IsNotEmpty()
  Body: string
}