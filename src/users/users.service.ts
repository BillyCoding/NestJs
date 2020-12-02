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

  getAge(d1) {
    const d2 = new Date();
    const diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  }

  async findUser(id: string): Promise<UserResponse> {
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

  createUser(user: UserTypes): Promise<any> {
    const createUser = this.usersRepository.create(user);
    const saveInDB = this.usersRepository
      .save(createUser)
      .then(() => user)
      .catch((err) => {
        throw new HttpException(err.message, HttpStatus.CONFLICT);
      });

    return saveInDB;
  }
}
