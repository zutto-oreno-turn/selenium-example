const { execSync } = require('child_process');
const image = require('../../src/image.js');

test('www.zutto-oreno-turn.com', async () => {
  const id = 'www.zutto-oreno-turn.com';
  const path = image.getEncodedPath(__filename);
  execSync(`powershell.exe D:\\GitHub.com\\zutto-oreno-turn\\selenium-example\\scripts\\ie.ps1 ${id} ${path}`);
  await expect(1).toBe(1);
});
