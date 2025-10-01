import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  // add 30 seconds timeout
  const server = app.getHttpServer();
  server.setTimeout(30000);
  server.headersTimeout = 31000;
  server.keepAliveTimeout = 30000;

  await app.listen(3000);
}
bootstrap();
