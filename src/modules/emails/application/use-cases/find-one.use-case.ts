import {Injectable, NotFoundException} from '@nestjs/common'
import { EmailService } from '../services/emails.service'
import {Emails} from '../../domain/entities/emails.entity'

@Injectable()
export class FindOneEmailUseCase {
  constructor(
    private readonly emailService:EmailService
  ){}

  async execute(id:number): Promise<Emails> {
    const email= await this.emailService.findOne(id)
    if (!email) {
      throw new NotFoundException(`Email with ID ${id} not found `)
    }
    return email
  }
}