import { Injectable } from '@nestjs/common'
import { EmailService } from '../services/emails.service'
import { Emails } from '../../domain/entities/emails.entity'
import { CreateEmailDto } from '../dtos/create-emails.dto'

@Injectable()
export class CreateEmailUseCase {
  constructor (
    private readonly emailService:EmailService
  ){}

  async execute(
    createEmailDto:CreateEmailDto): Promise<Emails> {
      const email= new Emails(
        0,
        createEmailDto.UserID,
        createEmailDto.Subject,
        createEmailDto.Body,
        new Date()
      )
      return this.emailService.create(email)
    }
  
}