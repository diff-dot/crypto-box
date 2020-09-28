import crypto from 'crypto';
import { Pbkdf2Options } from './options/Pbkdf2Options';

const defaultOptions: Required<Omit<Pbkdf2Options, 'salt'>> = {
  iterations: 4096,
  keylen: 32,
  digest: 'sha512'
};

export function pbkdf2(source: string, options: Pbkdf2Options): Promise<string> {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(
      source,
      options.salt,
      options.iterations || defaultOptions.iterations,
      options.keylen || defaultOptions.keylen,
      options.digest || defaultOptions.digest,
      (err, hash) => {
        if (err) {
          return reject(err);
        }
        resolve(hash.toString('base64'));
      }
    );
  });
}
