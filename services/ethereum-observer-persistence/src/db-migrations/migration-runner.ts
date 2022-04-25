import { ConnectionOptions, createConnection } from 'typeorm';
import { TypeOrmModuleFactory } from '../tools/TypeOrmModuleFactory';

export async function runExchangeMigrations(): Promise<void> {
  const options = TypeOrmModuleFactory.create();
  const connection = await createConnection(options as ConnectionOptions);
  await connection.query(`SET search_path TO 'public'`);

  await connection.runMigrations({
    transaction: 'all',
  });
  await connection.close();
}
