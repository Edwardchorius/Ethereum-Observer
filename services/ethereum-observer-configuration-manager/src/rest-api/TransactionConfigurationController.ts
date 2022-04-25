import {
  Controller,
  Get,
  Post,
  Delete,
  Req,
  Body,
  Query,
} from '@nestjs/common';
import { TransactionConfigurationHandler } from '../core';
import {
  AddConfigurationRequest,
  RetrievedConfigurationResponse,
} from './models';

@Controller('api/v1/configuration')
export class TransactionConfigurationController {
  constructor(
    private readonly transactionConfigurationHandler: TransactionConfigurationHandler,
  ) {}
  @Post('add')
  async addConfiguration(
    @Req() request: any,
    @Body() payload: AddConfigurationRequest,
  ): Promise<void> {
    await this.transactionConfigurationHandler.addConfiguration(payload);
  }

  @Get()
  async retrieveConfiguration(
    @Req() request: any,
    @Query() name: string,
  ): Promise<RetrievedConfigurationResponse> {
    return await this.transactionConfigurationHandler.getConfiguration(name);
  }

  @Delete()
  async disableConfiguration(
    @Req() request: any,
    @Query() name: string,
  ): Promise<void> {
    throw new Error();
  }
}
