import crypto from 'crypto';
import { EncryptOptions } from './options/EncryptOptions';

const defaultOptions: Required<Omit<EncryptOptions, 'key'>> = {
  algorithm: 'aes-256-cbc',
  ivLength: 16
};

export class Encryptor {
  private readonly options: EncryptOptions;
  constructor(options: EncryptOptions) {
    this.options = options;
  }

  public encrypt(source: string): string {
    const iv = crypto.randomBytes(this.options.ivLength || defaultOptions.ivLength);
    const cipher = crypto.createCipheriv(this.options.algorithm || defaultOptions.algorithm, Buffer.from(this.options.key), iv);
    let encrypted = cipher.update(source);
    encrypted = Buffer.concat([encrypted, cipher.final()]);

    return iv.toString('hex') + ':' + encrypted.toString('hex');
  }

  public decrypt(source: string): string {
    const textParts = source.split(':');
    const iv = Buffer.from(textParts[0], 'hex');
    const encryptedText = Buffer.from(textParts[1], 'hex');
    const decipher = crypto.createDecipheriv(this.options.algorithm || defaultOptions.algorithm, Buffer.from(this.options.key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString();
  }
}
