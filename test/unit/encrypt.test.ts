import { expect } from 'chai';
import { CryptoBox } from '../../src/CryptoBox';

const sourceText = 'warawangwarawangwarawangwarawangwarawangwarawangwarawangwarawang';
let encryptedText: string;
const cryptoBox = new CryptoBox({
  algorithm: 'aes-256-cbc',
  key: '12345678901234567890123456789012',
  ivLength: 16
});

describe('crypto-utils', async () => {
  it('암호화', async () => {
    encryptedText = cryptoBox.encrypt(sourceText);
  });

  it('복호화', async () => {
    const decryptedText = cryptoBox.decrypt(encryptedText);
    expect(decryptedText).to.be.eq(sourceText);
  });
});
