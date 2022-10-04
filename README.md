# my portfolio template

![image](https://user-images.githubusercontent.com/24590342/193946604-96e04a45-de70-44f0-b92e-f8b9ef85d2a4.png)

https://digibeg.digick.jp/portfolio/minify.html

上記ポートフォリオサイトを作った際の雛形です。

## Dependency
* webpack: 5.74.0
* node: v16.0.0
* npm: 7.10.0
* sass
* ejs

## Setup
ローカルに落としてきたフォルダで、node_modulesを再現
```
npm i
```

## Usage
developmentにまとめる
```
npm run start
```
productionにまとめる
```
npm run build
```
更新の自動監視
```
npm run watch
```
確認ようローカルサーバの立ち上げ
```
npm run server
```

## References
* [webpack 日本語](https://runebook.dev/ja/docs/webpack/-index-)
* [webpack](https://webpack.js.org/configuration/externals/)
* [キャッシュクリア](https://kds-info.jp/blog/%E3%80%8C%E3%81%82%E3%80%81%E3%81%9D%E3%82%8C%E3%82%AD%E3%83%A3%E3%83%83%E3%82%B7%E3%83%A5%E3%81%A7%E3%81%99%E3%81%AD%E3%80%82%E3%80%8D%E3%81%A8%E3%81%AF%E3%82%82%E3%81%86%E3%82%AA%E3%82%B5%E3%83%A9/)
* [ログインシステムをPHPで作る](https://www.web-officer.com/php/make-login-system-with-php.php)
* [モックアップジェネレータ](https://mockuper.net/generator/mockup/5Ws8_ADHD/pixelbook-pixel-4)
* [Webpack5でCSSとJavaScriptで読み込んだ画像のパスが一致しない場合](https://zenn.dev/hisasann/articles/webpack-do-not-match-css-and-js-image-paths)
