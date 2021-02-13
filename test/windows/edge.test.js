const edge = require("@microsoft/edge-selenium-tools");
const fs = require('fs');

let driver;

beforeAll(() => {
  const options = new edge.Options();
  options.setEdgeChromium(true);
  options.headless();
  options.windowSize({ width: 1200, height: 1200 });

  const service = new edge.ServiceBuilder('./drivers/windows/msedgedriver.exe').build();
  driver = edge.Driver.createSession(options, service);
});

test('www.zutto-oreno-turn.com', async () => {
  await driver.get('https://www.zutto-oreno-turn.com/');
  const base64 = await driver.takeScreenshot();
  const buffer = Buffer.from(base64, 'base64');
  fs.writeFileSync('./output/windows_edge_www.zutto-oreno-turn.com.jpg', buffer);
  expect(1).toBe(1);
});

afterAll(() => {
  driver.quit();
});
