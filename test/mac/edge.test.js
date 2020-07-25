const edge = require("@microsoft/edge-selenium-tools");
const image = require('../../src/image.js');

let driver;

beforeAll(() => {
  const options = new edge.Options();
  options.setEdgeChromium(true);
  options.headless();
  options.windowSize({ width: 768, height: 3500 });

  const service = new edge.ServiceBuilder('./drivers/mac/msedgedriver').build();
  driver = edge.Driver.createSession(options, service);
});

test('www.yahoo.co.jp', async () => {
  await driver.get('https://www.yahoo.co.jp/');
  await image.takeScreenshot(driver, 'www.yahoo.co.jp', __filename);
  expect(1).toBe(1);
});

afterAll(() => {
  driver.quit();
});
