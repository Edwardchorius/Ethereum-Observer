import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigurationValue } from '../entities';
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
      entities: [ConfigurationValue],
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
