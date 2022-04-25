import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {
  ConfigurationValueEntity,
  EthereumTransactionEntity,
} from '../entities';
import { ConfigSourceFactory } from './config/ConfigSourceFactory';

export class TypeOrmModuleFactory {
  static create(): TypeOrmModuleOptions {
    const config =
      ConfigSourceFactory.getConfigSourceForEnvironment().getDbConfig();

    const {
      host,
      port,
      username,
      password,
      database,
      keepConnectionAlive,
      customMigrationsLocation,
    } = config;

    return {
      type: 'postgres',
      host,
      port,
      username,
      password,
      database,
      logging: false,
      entities: [ConfigurationValueEntity, EthereumTransactionEntity],
      migrations: [customMigrationsLocation],
      synchronize: false,
      migrationsRun: false,
      keepConnectionAlive,
      cli: {
        migrationsDir: 'src/db-migrations/templates',
      },
      schema: 'public',
    };
  }
}
