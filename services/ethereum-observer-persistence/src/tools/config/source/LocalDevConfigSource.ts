import { DbConfig } from './models';

export class LocalDevConfigSource {
  public getDbConfig(): DbConfig {
    const currentDirectoryPath = __dirname.split('/');
    const directoriesToDistFolder = currentDirectoryPath.slice(
      0,
      currentDirectoryPath.indexOf('dist') + 1,
    );
    const absolutePathToDistFolder = directoriesToDistFolder.join('/');

    return {
      host: 'localhost',
      port: 3331,
      username: 'postgres',
      password: 'postgres',
      database: 'ethereum-observer',
      customEntitiesLocation: [absolutePathToDistFolder + '/**/*.entity.js'],
      customMigrationsLocation:
        absolutePathToDistFolder + '/db-migrations/templates/*.js',
      keepConnectionAlive: true,
    };
  }
}
