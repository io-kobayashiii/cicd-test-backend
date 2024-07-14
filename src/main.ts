import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('process.env.LISTEN_PORT', process.env.LISTEN_PORT);
  await app.listen(process.env.LISTEN_PORT ?? 3000);
}
bootstrap();

// test
