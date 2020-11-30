import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserTypes, UserResponse } from './interfaces/user.interface';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<UserTypes[]> {
    return this.usersRepository.find();
  }

  uuid(uuid: string): boolean {
    const reg = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if (reg.test(uuid) === true) {
      return true;
    }
    return false;
  }

  getAge(d1) {
    const d2 = new Date();
    const diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  }

  async findUser(id: string): Promise<UserResponse> {
    if (!this.uuid(id)) {
      throw new HttpException(
        'Please, insert a valid uuid',
        HttpStatus.CONFLICT,
      );
    }
    const res = await this.usersRepository.findOne({ where: { id } });

    if (!res) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const birtday = new Date(
      res.birtday.getUTCFullYear(),
      res.birtday.getUTCMonth(),
      res.birtday.getUTCDay(),
    );

    const age = this.getAge(birtday);
    return { ...res, age };
  }

  createUser(user: UserTypes): UserTypes {
    const createUser = this.usersRepository.create(user);
    this.usersRepository.save(createUser);
    return user;
  }
}
