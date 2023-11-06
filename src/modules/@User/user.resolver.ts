import { Param } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { User } from './user.schema';
import { ApolloError } from 'apollo-server-express';

@Resolver()
export class UserResolver {
  private readonly users: User[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'jd@gmail.com',
      password: '123456',
      address: '123 Main St',
      mobileContact: '1234567890',
      photoURL: '',
      access_token: '',
    },
    {
      id: '2',
      name: 'Jane Doe',
      email: 'jd@gmail.com',
      password: '123456',
      address: '123 Main St',
      mobileContact: '1234567890',
      photoURL: '',
      access_token: '',
    },
  ];

  @Query(() => [User])
  async findAll() {
    try {
      return this.users;
    } catch (error) {
      throw new ApolloError(error);
    }
  }

  @Query(() => User)
  async findOne(@Param() id: string) {
    try {
      return this.users.find((user) => user.id === id);
    } catch (error) {
      throw new ApolloError(error);
    }
  }
}
