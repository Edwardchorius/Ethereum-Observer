import { LocalDevConfigSource } from './source';

/** A mechanism for retrieving the right {@link ConfigSource} to use based on the current runtime environment. */
export class ConfigSourceFactory {
  static getConfigSourceForEnvironment() {
    // if (process.env.NODE_ENV === 'development') {
    return new LocalDevConfigSource();
    // }
  }
}
