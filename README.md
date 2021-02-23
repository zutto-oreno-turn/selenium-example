# Selenium Example

- Seleniumと、Powershellを使ったブラウザの自動テストのサンプルです。
- テストしたいページを各種ブラウザで開き、画面キャプチャを取得するサンプルになります。
- テストしたいブラウザのバージョンを確認して、ウエブドライバーをダウンロード&セットアップしてください。

#### 対応ブラウザ

| OS | Browser | Notes |
| :---- | :---- | :---- |
| Mac | Chrome | |
| Mac | Firefox | |
| Mac | Chromium Edge | |
| Mac | Safari | |
| Windows | Chrome | |
| Windows | Firefox | |
| Windows | Chromium Edge | |
| Windows | Internet Explorer 11 | Powershellを使って自動テストします |
| Android | Chrome | 実機、レミュレータ共に動作します |
| iPhone | Safari | 実機、シュミレータ共に動作します。但し、iOS13未満は未対応です |

### セットアップ

```
$ git clone https://github.com/zutto-oreno-turn/selenium-example.git
$ cd selenium-example
$ npm install
```

### ウエブドライバーセットアップ

Chrome
 - https://sites.google.com/a/chromium.org/chromedriver/downloads
 - ブラウザのバージョンを確認し、バージョンにあったものをダウンロードして、drivers配下に上書きして置いて下さい。

FireFox
 - https://github.com/mozilla/geckodriver/releases
 - ブラウザのバージョンを確認し、バージョンにあったものをダウンロードして、drivers配下に上書きして置いて下さい。

Microsoft Edge (Chromium Edge)
 - https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/#downloads
 - ブラウザのバージョンを確認し、バージョンにあったものをダウンロードして、drivers配下に上書きして置いて下さい。

Safari
 - 開発者オプションを表示して以下設定をして下さい。
 - Menu bar -> Develop -> Allow Remote Automation

iOS Safari
 - Settings -> Advanced -> Remote Automation ON, Web Inspector ON
 - udidはiphoneをmacに接続し、Xcodeで確認できます。
   - https://qiita.com/takashings/items/f4f96d8f948e14cd98d9
   - 取得したudidをテストコードに設定してください。
   - https://github.com/zutto-oreno-turn/selenium-example/blob/master/test/ios/safari.test.js#L10

### テスト実行手順の例
```
$ cd selenium-example
$ npm test test/mac/chrome.test.js
$ npm test test/windows/ie.test.js
```
