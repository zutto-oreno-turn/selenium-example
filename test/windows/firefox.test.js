const webdriver = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const image = require('../../src/image.js');

let driver;

beforeAll(() => {
  const options = new firefox.Options();
  options.addArguments("--headless");

  driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.firefox())
    .setFirefoxService(new firefox.ServiceBuilder('./drivers/windows/geckodriver.exe'))
    .setFirefoxOptions(options)
    .build();
  driver.manage().window().setRect({ width: 1200, height: 1200 });
});

test('www.yahoo.co.jp', async () => {
  await driver.get('https://www.yahoo.co.jp/');
  await image.takeScreenshot(driver, 'www.yahoo.co.jp', __filename);
  expect(1).toBe(1);
});

afterAll(() => {
  driver.quit();
});
