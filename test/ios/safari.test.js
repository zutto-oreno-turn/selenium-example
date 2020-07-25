const webdriver = require('selenium-webdriver');
const image = require('../../src/image.js');

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

test('www.yahoo.co.jp', async () => {
  await driver.get('https://www.yahoo.co.jp/');
  await image.takeScreenshot(driver, 'www.yahoo.co.jp', __filename);
  expect(1).toBe(1);
});

afterAll(() => {
  driver.quit();
});
