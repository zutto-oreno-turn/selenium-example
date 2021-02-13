const edge = require("@microsoft/edge-selenium-tools");
const image = require('../../src/image.js');

let driver;

beforeAll(() => {
  const options = new edge.Options();
  options.setEdgeChromium(true);
  options.headless();
  options.windowSize({ width: 1200, height: 1200 });

  const service = new edge.ServiceBuilder('./drivers/mac/msedgedriver').build();
  driver = edge.Driver.createSession(options, service);
});

test('www.www.zutto-oreno-turn.com', async () => {
  await driver.get('https://www.zutto-oreno-turn.com/');
  await image.takeScreenshot(driver, 'www.www.zutto-oreno-turn.com', __filename);
  expect(1).toBe(1);
});

afterAll(() => {
  driver.quit();
});
