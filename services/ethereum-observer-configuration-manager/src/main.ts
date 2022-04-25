import { NestFactory } from '@nestjs/core';
import { EthereumObserverConfigurationManagerModule } from './ethereum-observer-configuration-manager.module';

async function bootstrap() {
  const app = await NestFactory.create(
    EthereumObserverConfigurationManagerModule,
  );
  await app.listen(3000);
}
bootstrap();
