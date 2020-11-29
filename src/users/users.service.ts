import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ResponseNull, User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    { id: 1, email: 'johndoo@gmail.com', idade: 21, name: 'John Doo' },
    { id: 2, email: 'johndoo2@gmail.com', idade: 21, name: 'John Doo' },
    { id: 3, email: 'johndoo3@gmail.com', idade: 21, name: 'John Doo' },
  ];

  findAll(): User[] {
    return this.users;
  }

  findUser(id: number): User | ResponseNull {
    const res = this.users.find((item) => item.id == id);

    if (!res) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return res || { message: 'User not found' };
  }

  createUser(user: User): User {
    this.users.push(user);
    return user;
  }
}
