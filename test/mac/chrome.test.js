const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const fs = require('fs');

let driver;

beforeAll(() => {
  const options = new chrome.Options();
  options.addArguments("--headless");

  driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .setChromeService(new chrome.ServiceBuilder('./drivers/mac/chromedriver'))
    .setChromeOptions(options)
    .build();
  driver.manage().window().setRect({ width: 1200, height: 1200 });
});

test('www.zutto-oreno-turn.com', async () => {
  await driver.get('https://www.zutto-oreno-turn.com/');
  const base64 = await driver.takeScreenshot();
  const buffer = Buffer.from(base64, 'base64');
  fs.writeFileSync('./output/mac_chrome_www.zutto-oreno-turn.com.jpg', buffer);
  expect(1).toBe(1);
});

afterAll(() => {
  driver.quit();
});
