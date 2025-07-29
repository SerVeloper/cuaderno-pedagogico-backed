import { Injectable, NotFoundException} from '@nestjs/common'
import { EmailService } from '../services/emails.service' 
import { Emails} from '../../domain/entities/emails.entity'
import { UpdateEmailDto } from '../dtos/update-emails.dto'


@Injectable()
export class UpdateEmailUseCase {
  constructor(
    private readonly emailService: EmailService
  ){}

  async update(id:number,updateEmailDto:UpdateEmailDto): Promise<Emails> {
    const emailResult= await this.emailService.findOne(id)
    if (!emailResult){
      throw new NotFoundException(`Email with ID ${id} not found`)
    }
    const updateEmail = { ...emailResult, ...updateEmailDto}
    return this.emailService.update(id,updateEmail)

  }
}