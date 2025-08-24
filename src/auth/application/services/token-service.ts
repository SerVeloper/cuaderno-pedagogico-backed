export interface ITokenService {
  sign(payload: Record<string, any>): Promise<string>;
}
