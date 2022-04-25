import { EntityRepository, Repository } from 'typeorm';
import { ConfigurationValueEntity } from '../entities';

@EntityRepository(ConfigurationValueEntity)
export class TransactionConfigurationRepository extends Repository<ConfigurationValueEntity> {
  async createTransactionConfiguration(
    transactionConfiguration: ConfigurationValueEntity,
  ): Promise<any> {
    return await this.manager.save(transactionConfiguration);
  }

  async getTransactionConfiguration(
    name: string,
  ): Promise<ConfigurationValueEntity> {
    const configuration = await this.findOne({
      where: {
        name,
      },
    });

    return configuration;
  }
}
