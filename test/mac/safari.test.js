const webdriver = require('selenium-webdriver');
const image = require('../../src/image.js');

let driver;

beforeAll(() => {
  driver = new webdriver.Builder()
  .withCapabilities(webdriver.Capabilities.safari())
  .build();
  driver.manage().window().setRect({ width: 768, height: 3500 });
});

test('www.yahoo.co.jp', async () => {
  await driver.get('https://www.yahoo.co.jp/');
  await image.takeScreenshot(driver, 'www.yahoo.co.jp', __filename);
  expect(1).toBe(1);
});

afterAll(() => {
  driver.quit();
});
