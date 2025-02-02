import { NestFactory } from '@nestjs/core';
import { AppModule } from './core/core.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log(`⚡️ Running on http://localhost:3000`);
  await app.listen(3000);
}
bootstrap();
