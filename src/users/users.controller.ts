import {
  Bind,
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
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

  @Get(':uuid')
  @Bind(Param('uuid', new ParseUUIDPipe()))
  async findOne(uuid): Promise<ResponseDTO> {
    return this.usersService.findUser(uuid);
  }

  @Post()
  async create(@Body() createCatDto) {
    return this.usersService.createUser(createCatDto);
  }
}
