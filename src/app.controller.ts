import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseDTO } from './DTO/response.dto';
import { Roles } from './roles.decorator';
import { RolesGuard } from './roles.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(RolesGuard)
  @Roles('admin')
  getHello(): ResponseDTO {
    return this.appService.getHello();
  }
}
