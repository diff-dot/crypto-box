import { expect } from 'chai';
import { Encryptor } from '../../src/Encryptor';

const sourceText = 'warawangwarawangwarawangwarawangwarawangwarawangwarawangwarawang';
let encryptedText: string;
const encryptor = new Encryptor({
  algorithm: 'aes-256-cbc',
  key: '12345678901234567890123456789012'
});

describe('crypto-utils', async () => {
  it('암호화', async () => {
    encryptedText = encryptor.encrypt(sourceText);
  });

  it('복호화', async () => {
    const decryptedText = encryptor.decrypt(encryptedText);
    expect(decryptedText).to.be.eq(sourceText);
  });
});
