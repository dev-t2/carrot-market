import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';

import { AppModule } from './app.module';
import { UndefinedToNullInterceptor } from './common/interceptor';
import { HttpExceptionFilter } from './common/filter';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  const config = new DocumentBuilder()
    .setTitle('Slack API')
    .setDescription('API documentation for Slack development')
    .setVersion('1.0')
    .addCookieAuth('connect.sid')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  app.useLogger(app.get(Logger));
  app.flushLogs();

  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalInterceptors(new UndefinedToNullInterceptor());

  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(process.env.PORT);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
