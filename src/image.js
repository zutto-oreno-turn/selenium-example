const fs = require('fs');

getEncodedPath = (path) => {
  if (process.platform === 'win32') {
    return path.replace(/\\/g, '_').replace(/C:/g, '');
  } else if (process.platform === 'darwin') {
    return path.replace(/\//g, '_');
  } else {
    return 'others';
  }
};

exports.takeScreenshot = async (driver, id, path) => {
  const base64 = await driver.takeScreenshot();
  const buffer = Buffer.from(base64, 'base64');
  const output = `./output/${getEncodedPath(path)}-${id}.jpg`;
  fs.writeFileSync(output, buffer);
};
