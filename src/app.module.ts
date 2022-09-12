import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import configuration from './config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot({ load: [configuration], isGlobal: true })],
  controllers: [AppController],
  providers: [ConfigService, AppService],
})
export class AppModule {}
