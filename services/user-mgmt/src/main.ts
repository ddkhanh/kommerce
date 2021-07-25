import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { apiOptions } from './config';

const logger = new Logger("Main");

async function bootstrap() {

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: apiOptions.package,
      protoPath: apiOptions.schemaPath,
      url: apiOptions.hostname + ":" + apiOptions.port
    }
  });
  app.listen();
  logger.log("Application started!");
  logger.log("API Option ", apiOptions);
}
bootstrap();
