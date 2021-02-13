const webdriver = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const fs = require('fs');

let driver;

beforeAll(() => {
  const options = new firefox.Options();
  options.addArguments("--headless");

  driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.firefox())
    .setFirefoxService(new firefox.ServiceBuilder('./drivers/mac/geckodriver'))
    .setFirefoxOptions(options)
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
