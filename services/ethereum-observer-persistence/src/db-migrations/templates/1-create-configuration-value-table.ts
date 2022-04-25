import { CONFIGURATION_VALUE_TABLE } from '../../entities/ConfigurationValue.entity';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateConfigurationValue1610000000000
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: CONFIGURATION_VALUE_TABLE,
        columns: [
          {
            name: 'id',
            type: 'int',
            isGenerated: true,
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'value',
            type: 'JSON',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(CONFIGURATION_VALUE_TABLE);
  }
}
