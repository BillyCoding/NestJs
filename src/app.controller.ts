import { Controller, Get, Session } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseDTO } from './DTO/response.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): ResponseDTO {
    return this.appService.getHello();
  }

  @Get('session')
  findAll(@Session() session: Record<string, any>) {
    session.visits = session.visits ? session.visits + 1 : 1;
  }
}
