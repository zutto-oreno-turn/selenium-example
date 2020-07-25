# selenium-example

### 概要

- seleniumを使ったe2eテストのためのサンプルです。
- テストしたいページをブラウザで開き、画面キャプチャを取得するテストコードになります。

#### 対応ブラウザ

| OS | Browser | Notes |
| :---- | :---- | :---- |
| Mac | Chrome | |
| Mac | Firefox | |
| Mac | Chromium Edge | |
| Mac | Safari | ヘッドレスモードが利用できません |
| Windows | Chrome | |
| Windows | Firefox | |
| Windows | Chromium Edge | |
| Windows | Internet Explorer | 動作不安定ですので、PowerShell+COMを使ってe2eテストするのが良いです |
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
   - 取得したudidをテストコード内の以下に設定してください。

### テスト実行
```
1ケースのみテストしたい場合、テストファイル名までのパスを引数として指定して実行する
$ cd selenium-example
$ npm test test/mac/chrome.test.js

複数のテストを実行したい場合、ディレクトリを引数として指定して実行する
$ cd selenium-example
$ npm test test/mac
$ npm test test/mac
$ npm test test/mac
$ npm test test/mac
```

Thanks,
