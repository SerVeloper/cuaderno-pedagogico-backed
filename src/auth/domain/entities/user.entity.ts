
import { Role } from '../../../roles/domain/entities/role.entity';
export class User {
  constructor(
    public UserID: number,
    public UserName: string,
    public Email: string,
    public PasswordHash: string,
    public FullName: string,
    public Phone: string | null,
    public CreatedAt: Date,
    public UpdatedAt: Date,
    public IsActive: boolean,
    public roles: Role[] = [],
  ) {}

  changeEmail(newEmail: string) {
    if (!newEmail?.includes('@')) throw new Error('Invalid email format');
    this.Email = newEmail;
  }

  setPasswordHash(hash: string) {
    if (!hash || hash.length < 20) throw new Error('Password hash cannot be empty');
    this.PasswordHash = hash;
  }
  
}