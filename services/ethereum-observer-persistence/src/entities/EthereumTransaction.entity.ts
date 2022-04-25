import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export const ETHEREUM_TRANSACTION_TABLE = 'ethereum_transaction';

@Entity(ETHEREUM_TRANSACTION_TABLE)
export class EthereumTransactionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'tied_to_config', type: 'varchar', length: 255 })
  tiedToConfig: string;

  @Column({ name: 'hash', type: 'varchar', length: 75 })
  hash: string;

  @Column({ name: 'nonce', type: 'numeric', length: 13 })
  nonce: number;

  @Column({ name: 'blockHash', type: 'varchar', length: 75 })
  blockHash: string;

  @Column({ name: 'blockNumber', type: 'numeric' })
  blockNumber: number;

  @Column({ name: 'transactionIndex', type: 'numeric' })
  transactionIndex: number;

  @Column({ name: 'from', type: 'varchar', length: 75 })
  from: string;

  @Column({ name: 'to', type: 'varchar', length: 75 })
  to: string;

  @Column({ name: 'value', type: 'varchar', length: 255 })
  value: string;

  @Column({ name: 'gasPrice', type: 'varchar', length: 30 })
  gasPrice: string;

  @Column({ name: 'gas', type: 'numeric' })
  gas: number;

  @Column({ name: 'input', type: 'varchar', length: 255 })
  input: string;
}
