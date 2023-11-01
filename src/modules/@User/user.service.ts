import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserService {
  private readonly users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'jd@gmail.com',
      password: '123456',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jd@gmail.com',
      password: '123456',
    },
  ];

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async findOne(id: number): Promise<User> {
    return this.users.find((user) => user.id === id);
  }

  async create(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async update(id: number, user: User): Promise<User> {
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index] = user;
    return user;
  }

  async delete(id: number): Promise<void> {
    const index = this.users.findIndex((user) => user.id === id);
    this.users.splice(index, 1);
  }
}
