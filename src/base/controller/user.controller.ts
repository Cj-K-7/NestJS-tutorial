import { Controller, Delete, Get, Post, Put, Req } from '@nestjs/common';
import { AppService } from '../provider/service/app.service';
import { Request } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser(@Req() request: Request): string {
    return `queried ${request.query['id']} user`;
  }

  @Post()
  postUser(@Req() request: Request): string {
    return `resigtered ${request.body['id']} user`;
  }

  @Put()
  putUser(@Req() request: Request): string {
    return `user ${request.body['id']} updated.`;
  }

  @Delete()
  deleteUser(@Req() request: Request): string {
    return `user ${request.query['id']} deleted.`;
  }
}
