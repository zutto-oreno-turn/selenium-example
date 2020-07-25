const { execSync } = require('child_process');
const image = require('../../src/image.js');

test('www.yahoo.co.jp', async () => {
  const id = 'www.yahoo.co.jp';
  const path = image.getEncodedPath(__filename);
  execSync(`powershell.exe E:\\GitHub\\zutto-oreno-turn\\selenium-example\\scripts\\ie.ps1 ${id} ${path}`);
  await expect(1).toBe(1);
});
