const fs = require('fs');

encodedPath = (path) => {
  if (process.platform === 'win32') {
    return path.replace(/\\/g, '_').replace(/C:/g, '').replace(/D:/g, '').replace(/E:/g, '');
  } else if (process.platform === 'darwin') {
    return path.replace(/\//g, '_');
  } else {
    return 'others';
  }
};

exports.getEncodedPath = (path) => {
  return encodedPath(path);
};

exports.takeScreenshot = async (driver, id, path) => {
  const base64 = await driver.takeScreenshot();
  const buffer = Buffer.from(base64, 'base64');
  const output = `./output/${encodedPath(path)}-${id}.jpg`;
  fs.writeFileSync(output, buffer);
};
