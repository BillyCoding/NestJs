import { Injectable } from '@nestjs/common';
import { ResponseDTO } from './DTO/response.dto';

@Injectable()
export class AppService {
  getHello(): ResponseDTO {
    return { ok: true };
  }
}
