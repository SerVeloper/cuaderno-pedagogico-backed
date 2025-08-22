import{Injectable, NotFoundException}   from '@nestjs/common'
import {EmailService } from '../services/emails.service'
import    {Emails } from '../../domain/entities/emails.entity'

@Injectable()
export class DeleteEmailUseCase { 
  constructor(
     private readonly emailService:EmailService
  ){}

  async execute(id:number): Promise<void> {
    const emailResult=  await this.emailService.findOne(id)
    if(!emailResult) {
      throw new NotFoundException(`Email with ID ${id} not found`)
    }
    await this.emailService.delete(id)
  }
}
