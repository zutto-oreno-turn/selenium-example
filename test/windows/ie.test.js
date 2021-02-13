const { execSync } = require('child_process');

test('www.zutto-oreno-turn.com', async () => {
  const output = './output/ie11_www.zutto-oreno-turn.com.jpg';
  execSync(`powershell.exe D:\\GitHub.com\\zutto-oreno-turn\\selenium-example\\scripts\\ie_open_capture_save.ps1 ${output}`);
  await expect(1).toBe(1);
});

afterAll(() => {
  execSync('powershell.exe Stop-Process -Name iexplore');
});
