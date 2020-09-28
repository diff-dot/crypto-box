export interface Pbkdf2Options {
  salt: string;
  iterations?: number;
  keylen?: number;
  digest?: 'sha512' | 'sha256';
}
