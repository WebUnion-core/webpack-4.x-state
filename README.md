
# 介绍 #

> 自2017年8月11日上传了 [webpack-3.x-state](https://github.com/WebUnion-core/webpack-3.x-state) 项目后已过去将近一年时间了，现在 webpack 也已经升级到4.x版本了，是时候学习一波新版 webpack 的配置了。

webpack4 与 webpack3 第一个不同之处：将 webpack 模块拆分为 webpack 和 webpack-cli 两个模块，所以首先要分别安装这两个模块: `npm install -D webpack webpack-cli`。

## state1 ##

接着正式开始阶段一，阶段一是配置一些基本的 Webpack 选项(入口、出口等等)，打包配置文件依然是 webpack.config.js 文件，其初始内容如下:

```js
const path = require('path');

// 路径常量
const SRC_PATH = path.resolve(__dirname, 'src');
const DIST_PATH = path.resolve(__dirname, 'dist');

module.exports = {
    entry: [
        path.resolve(SRC_PATH, 'entry.js')
    ],
    output: {
        path: DIST_PATH,
        filename: 'index.js',
        chunkFilename: 'index.js'
    }
}
```

webpack4 启动打包多了一个开发模式和生产模式的识别操作，如果是开发模式的打包操作，则不会对打包后的代码进行丑化(压缩)，生产模式(默认)则反之。

首先我们需要添加一个打包模式参数，否则直接用`webpack`命令打包会发出以下警告:

![image](./intro/intro1.png)

添加打包模式由两种方式:

1. 在命令后添加，即执行命令改为`webpack --mode development`;

2. 在 webpack.config.js 中添加:

    ```js
    ...
    module.exports = {
        mode: 'development', // "development"或者"production"
        entry: [
            path.resolve(SRC_PATH, 'entry.js')
        ],
        output: {
            path: DIST_PATH,
            filename: 'index.js',
            chunkFilename: 'index.js'
        }
    }
    ```

---

```
POST_DATE : 2018/07/14
```
