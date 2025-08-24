import {Injectable} from '@nestjs/common'
import { EmailService } from '../services/emails.service' 
import {Emails}from '../../domain/entities/emails.entity'

@Injectable()
export class FindAllEmailUseCase { 
  constructor( 
    private readonly emailService:EmailService
  ){}

  async execute(): Promise<Emails[]> {
    return this.emailService.findAll()
  }
}