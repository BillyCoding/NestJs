import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ResponseDTO } from './dto/response.dto';
import { UserTypes } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('list')
  getListUsers(): Promise<ResponseDTO[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  getFindUser(@Param() params): Promise<ResponseDTO> {
    return this.usersService.findUser(params.id);
  }

  @Post()
  createUser(@Body() body: UserTypes): ResponseDTO {
    return this.usersService.createUser(body);
  }
}
