import { Module } from '@nestjs/common';
import { AppController } from './base/controller/app.controller';
import { AppService } from './base/provider/service/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
