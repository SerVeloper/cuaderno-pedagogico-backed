import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  private readonly logger = new Logger(JwtAuthGuard.name);

  canActivate(context: ExecutionContext) {
   // this.logger.debug('JwtAuthGuard canActivate called');
    return super.canActivate(context);
  }

  handleRequest(err, user, info) {
    //this.logger.debug(`JwtAuthGuard handleRequest - User: ${JSON.stringify(user)}, Error: ${err}, Info: ${info}`);
    if (err || !user) {
    //  this.logger.warn(`Unauthorized access - Error: ${err}, Info: ${info}`);
      throw err || new UnauthorizedException();
    }
    return user;
  }
}