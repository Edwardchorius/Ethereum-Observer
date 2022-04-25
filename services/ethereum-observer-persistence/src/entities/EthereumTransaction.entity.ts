import { Entity } from 'typeorm';

export const ETHEREUM_TRANSACTION_TABLE = 'ethereum_transaction';

@Entity(ETHEREUM_TRANSACTION_TABLE)
export class EthereumTransaction {}
