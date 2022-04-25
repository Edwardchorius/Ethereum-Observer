import { ETHEREUM_TRANSACTION_TABLE } from '../../entities/EthereumTransaction.entity';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateEthereumTransaction1611000000000
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: ETHEREUM_TRANSACTION_TABLE,
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
          },
          {
            name: 'tied_to_config',
            type: 'varchar(255)',
            isNullable: false,
          },
          {
            name: 'hash',
            type: 'varchar(75)',
          },
          {
            name: 'nonce',
            type: 'numeric',
          },
          {
            name: 'blockHash',
            type: 'varchar(75)',
            isNullable: true,
          },
          {
            name: 'blockNumber',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'transactionIndex',
            type: 'numeric',
            isNullable: true,
          },
          {
            name: 'from',
            type: 'varchar(75)',
          },
          {
            name: 'to',
            type: 'varchar(75)',
            isNullable: true,
          },
          {
            name: 'value',
            type: 'varchar(255)',
          },
          {
            name: 'gasPrice',
            type: 'varchar(30)',
          },
          {
            name: 'gas',
            type: 'numeric',
          },
          {
            name: 'input',
            type: 'varchar(255)',
          },
        ],
      }),
      false,
      true,
    );
  }

  input: string;

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(ETHEREUM_TRANSACTION_TABLE);
  }
}
