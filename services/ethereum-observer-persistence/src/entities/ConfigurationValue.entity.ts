import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export const CONFIGURATION_VALUE_TABLE = 'configuration_value';

export type ConfigurationValueMetadata = {
  enabled: boolean;
  specification: string;
};

@Entity(CONFIGURATION_VALUE_TABLE)
export class ConfigurationValue {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'name', type: 'varchar', unique: true })
  name: string;

  @Column({ type: 'json' })
  value: ConfigurationValueMetadata;
}
