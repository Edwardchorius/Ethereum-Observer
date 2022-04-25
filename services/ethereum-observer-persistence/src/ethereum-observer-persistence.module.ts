import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionConfigurationRepository } from './repositories';
import { TypeOrmModuleFactory } from './tools/TypeOrmModuleFactory';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: TypeOrmModuleFactory.create,
    }),
    TypeOrmModule.forFeature([TransactionConfigurationRepository]),
  ],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule, EthereumObserverPersistenceModule],
})
export class EthereumObserverPersistenceModule {}
