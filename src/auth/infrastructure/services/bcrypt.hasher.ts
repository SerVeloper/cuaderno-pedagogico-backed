import * as bcrypt from 'bcrypt';
import { IPasswordHasher } from '../../application/services/password-hasher';

export class BcryptHasher implements IPasswordHasher {
  async hashPassword(plain: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(plain, salt);
  }
  async comparePasswords(plain: string, hash: string): Promise<boolean> {
    return bcrypt.compare(plain, hash);
  }
}
