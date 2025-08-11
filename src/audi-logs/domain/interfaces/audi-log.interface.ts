import { AudiLog } from "../entities/audi-log.entity";

export interface IAudiLogRepositoryInterface {
  create(audiLog: AudiLog): Promise<AudiLog>;
  findById(id: number): Promise<AudiLog | null>;
  findAll(): Promise<AudiLog[]>;
  update(id: number, audiLog: AudiLog): Promise<AudiLog | null>;
  delete(id: number): Promise<boolean>;
}
