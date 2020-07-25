const { execSync } = require('child_process');

test('www.yahoo.co.jp', async () => {
  execSync('powershell.exe C:\\Users\\koiyamam\\Documents\\GitHub\\regression\\scripts\\ie.ps1');
  await expect(1).toBe(1);
});
