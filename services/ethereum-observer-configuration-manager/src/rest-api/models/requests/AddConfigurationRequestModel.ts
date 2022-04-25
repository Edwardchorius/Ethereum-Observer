import { IsString } from 'class-validator';

export class AddConfigurationRequest {
  constructor(name: string, specification: string) {
    this.name = name;
    this.specification = specification;
  }

  @IsString()
  name: string;

  @IsString()
  specification: string;
}
