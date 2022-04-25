import { NestFactory } from '@nestjs/core';
import { EthereumObserverTransactionFollowerModule } from './ethereum-observer-transaction-follower.module';

async function bootstrap() {
  const app = await NestFactory.create(
    EthereumObserverTransactionFollowerModule,
  );
  await app.listen(3000);
}
bootstrap();
