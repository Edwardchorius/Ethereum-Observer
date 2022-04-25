import { Module } from '@nestjs/common';
import { EthereumObserverPersistenceModule } from '../../ethereum-observer-persistence/src/ethereum-observer-persistence.module';
import { TransactionConfigurationHandler } from './core';

@Module({
  imports: [EthereumObserverPersistenceModule],
  controllers: [],
  providers: [TransactionConfigurationHandler],
})
export class EthereumObserverConfigurationManagerModule {}
