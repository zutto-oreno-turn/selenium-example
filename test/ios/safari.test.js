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

test('www.www.zutto-oreno-turn.com', async () => {
  await driver.get('https://www.zutto-oreno-turn.com/');
  await image.takeScreenshot(driver, 'www.www.zutto-oreno-turn.com', __filename);
  expect(1).toBe(1);
});

afterAll(() => {
  driver.quit();
});
