import { Module } from '@nestjs/common';
import { AppController } from './base/controller/app.controller';
import { AppService } from './base/provider/service/app.service';
import { UserController } from './base/controller/user.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
