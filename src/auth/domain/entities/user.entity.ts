
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

<<<<<<< HEAD
  setPasswordHash(hash: string) {
    if (!hash || hash.length < 20) throw new Error('Password hash cannot be empty');
    this.PasswordHash = hash;
  }
  
}
=======
  @Column({ unique: true, length: 100 })
  Email: string;

  @Column({ length: 255 })
  PasswordHash: string;

  @Column({ length: 50 })
  FullName: string;

  @Column({ length: 15, nullable: true })
  Phone: string;

  @Column()
  RoleID: number;

  @CreateDateColumn()
  CreatedAt: Date;

  @UpdateDateColumn()
  UpdatedAt: Date;

  @Column({ default: true })
  IsActive: boolean;
}
>>>>>>> 3146ca0e7a1bf241591d934f3a69181e430f0572
