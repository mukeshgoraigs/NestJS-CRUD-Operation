import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [ItemsModule, MongooseModule.forRoot('mongodb://localhost:127.0.0.1:27017/jobs',{useNewUrlParser: true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
