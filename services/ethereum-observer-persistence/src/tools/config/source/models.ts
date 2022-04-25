export interface DbConfig {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  schema?: string;
  /** Used for defining a different path for integration tests. */
  customEntitiesLocation?: string[] | null;
  /** Used for defining a different path for integration tests. */
  customMigrationsLocation?: string | null;
  /** Sets the suffix to use when searching for entities. */
  customEntitiesSuffix?: '.js' | '.ts';
  /** Speeds up development/testing. */
  keepConnectionAlive?: boolean;
}
