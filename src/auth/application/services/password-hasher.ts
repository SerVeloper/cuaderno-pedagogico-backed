export interface IPasswordHasher {
  hashPassword(plain: string): Promise<string>;
  comparePasswords(plain: string, hash: string): Promise<boolean>;
}