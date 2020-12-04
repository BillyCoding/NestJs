import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const user = {
      name: 'gus',
      roles: ['standard-user'],
    };

    const roles = this.reflector.get<string>('roles', context.getHandler());

    if (!roles) {
      return true;
    }

    const requiredRoles = 'admin';

    if (!user.roles.includes(requiredRoles)) {
      return false;
    }

    return true;
  }
}
