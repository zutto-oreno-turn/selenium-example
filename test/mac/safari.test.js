const webdriver = require('selenium-webdriver');
const image = require('../../src/image.js');

let driver;

beforeAll(() => {
  driver = new webdriver.Builder()
  .withCapabilities(webdriver.Capabilities.safari())
  .build();
  driver.manage().window().setRect({ width: 1200, height: 1200 });
});

test('www.www.zutto-oreno-turn.com', async () => {
  await driver.get('https://www.zutto-oreno-turn.com/');
  await image.takeScreenshot(driver, 'www.www.zutto-oreno-turn.com', __filename);
  expect(1).toBe(1);
});

afterAll(() => {
  driver.quit();
});
