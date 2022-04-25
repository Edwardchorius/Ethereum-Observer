import { runExchangeMigrations } from './migration-runner';

runExchangeMigrations().then(() => process.exit(0));
