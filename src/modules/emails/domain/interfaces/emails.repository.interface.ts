import { Emails } from '../entities/emails.entity'
export interface EmailsRepositoryInterface {
  create(emails:Emails): Promise<Emails>
  findAll(): Promise<Emails[]>
  findOne(id: number): Promise<Emails | null> 
  update(id:number, emails:Emails): Promise<Emails>
  delete(id:number): Promise<void>
}