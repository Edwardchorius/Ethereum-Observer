import { Injectable } from '@nestjs/common';
import {
  ConfigurationValueEntity,
  TransactionConfigurationRepository,
} from '../../../ethereum-observer-persistence';
import {
  AddConfigurationRequestDTO,
  ConfigurationRetrievedResponseDTO,
} from './DTOs';

@Injectable()
export class TransactionConfigurationHandler {
  constructor(
    private readonly transactionConfigurationRepository: TransactionConfigurationRepository,
  ) {}

  async getConfiguration(
    name: string,
  ): Promise<ConfigurationRetrievedResponseDTO> {
    try {
      //TODO Add logging here
      const configuration =
        await this.transactionConfigurationRepository.getTransactionConfiguration(
          name,
        );

      const configurationOutputModel = {
        name: configuration.name,
        specification: configuration.value.specification,
      } as ConfigurationRetrievedResponseDTO;

      return configurationOutputModel;
    } catch (e) {
      //TODO Add logging here
      console.log(JSON.stringify(e));
      throw e;
    }
  }

  async addConfiguration(
    configurationInputDTO: AddConfigurationRequestDTO,
  ): Promise<void> {
    try {
      //TODO Add logging here
      const newConfigurationEntity: ConfigurationValueEntity = {
        name: configurationInputDTO.name,
        value: {
          enabled: false,
          specification: configurationInputDTO.specification,
        },
      };
      await this.transactionConfigurationRepository.createTransactionConfiguration(
        newConfigurationEntity,
      );
    } catch (e) {
      //TODO Add logging here
      console.log(JSON.stringify(e));
      throw e;
    }
  }
}
