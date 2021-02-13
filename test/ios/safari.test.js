const webdriver = require('selenium-webdriver');
const fs = require('fs');

let driver;

beforeAll(() => {
  const capabilities = {
    platformName: 'ios',
    browserName: 'safari',
    udid: '****-****',
  };
  driver = new webdriver.Builder()
    .withCapabilities(capabilities)
    .build();
});

test('www.zutto-oreno-turn.com', async () => {
  await driver.get('https://www.zutto-oreno-turn.com/');
  const base64 = await driver.takeScreenshot();
  const buffer = Buffer.from(base64, 'base64');
  fs.writeFileSync('./output/iphone_safari_www.zutto-oreno-turn.com.jpg', buffer);
  expect(1).toBe(1);
});

afterAll(() => {
  driver.quit();
});
