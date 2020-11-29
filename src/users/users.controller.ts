import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ResponseDTO, ResponseNull } from './dto/response.dto';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('list')
  getListUsers(): ResponseDTO[] {
    return this.usersService.findAll();
  }

  @Get(':id')
  getFindUser(@Param() params): ResponseDTO | ResponseNull {
    return this.usersService.findUser(params.id);
  }

  @Post()
  createUser(@Body() body: User): ResponseDTO {
    return this.usersService.createUser(body);
  }
}
