import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, () => {
    const address = `http://localhost:3000/`;
    console.log(`Listening at ${address}`);
  });
}
bootstrap();
