import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { apiOptions } from './config';
import { KommerceExeptionFilter } from './filter/exception.filter';

const logger = new Logger("Main");

async function bootstrap() {

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, apiOptions);
  app.useGlobalFilters(new KommerceExeptionFilter());
  app.listen();
  logger.log("Application started!");
  logger.log("API Option ", apiOptions);
}
bootstrap();
