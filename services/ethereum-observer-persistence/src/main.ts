import { NestFactory } from '@nestjs/core';
import { EthereumObserverPersistenceModule } from './ethereum-observer-persistence.module';

async function bootstrap() {
  const app = await NestFactory.create(EthereumObserverPersistenceModule);
  await app.listen(3000);
}
bootstrap();
