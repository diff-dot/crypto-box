import { expect } from 'chai';
import { pbkdf2 } from '../../src/pbkdf2';

const sourceText = 'warawangwarawangwarawangwarawangwarawangwarawangwarawangwarawang';

describe('crypto-utils', async () => {
  it('pbkdf2 해싱', async () => {
    expect(await pbkdf2(sourceText, { salt: 'wwwwwwww' })).to.be.eq('x159akM6w/Fw4ZMTGT82p88eJB/ujFZ/kgJzH4SNq5k=');
  });
});
