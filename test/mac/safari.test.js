const webdriver = require('selenium-webdriver');
const fs = require('fs');

let driver;

beforeAll(() => {
  driver = new webdriver.Builder()
  .withCapabilities(webdriver.Capabilities.safari())
  .build();
  driver.manage().window().setRect({ width: 1200, height: 1200 });
});

test('www.zutto-oreno-turn.com', async () => {
  await driver.get('https://www.zutto-oreno-turn.com/');
  const base64 = await driver.takeScreenshot();
  const buffer = Buffer.from(base64, 'base64');
  fs.writeFileSync('./output/windows_chrome_www.zutto-oreno-turn.com.jpg', buffer);
  expect(1).toBe(1);
});

afterAll(() => {
  driver.quit();
});
