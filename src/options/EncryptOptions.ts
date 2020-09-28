export interface EncryptOptions {
  key: string;
  algorithm?: 'aes-256-cbc' | 'aes-192-cbc' | 'aes-128-cbc';
  ivLength?: number;
}
