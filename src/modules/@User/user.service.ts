// import { Injectable } from '@nestjs/common';
// import { CreateUserDto, User } from './user.schema';

// @Injectable()
// export class UserService {
//   async findAll(): Promise<User[]> {
//     return this.users;
//   }

//   async findOne(id: number): Promise<User> {
//     return this.users.find((user) => user.id === id);
//   }

//   async create(newUserInfo: CreateUserDto): Promise<User> {
//     const newUser = {
//       id: this.users.length + 1,
//       ...newUserInfo,
//     };
//     this.users.push(newUser);
//     return newUser;
//   }

//   async update(id: number, user: User): Promise<User> {
//     const index = this.users.findIndex((user) => user.id === id);
//     this.users[index] = user;
//     return user;
//   }

//   async delete(id: number): Promise<void> {
//     const index = this.users.findIndex((user) => user.id === id);
//     this.users.splice(index, 1);
//   }
// }
