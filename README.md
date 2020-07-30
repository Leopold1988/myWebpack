# webpack 自己的配置

# webpack

### webpack安装
```shell
mkdir webpack-demo && cd webpack-demo
npm init -y
npm install webpack webpack-cli -D
```

### 其他依赖

**起一个http服务**

```shell
npm install webpack-dev-server -D
npx webpack-dev-server
```

**html处理插件**

```shell
npm install html-webpack-plugin -D
```

**css处理**

```shell
npm install css-loader style-loader -D
npm install less less-loader -D
npm install mini-css-extract-plugin -D # 压缩CSS
npm install postcss-loader autoprefixer -D # css3加前缀
```

webpack的**postcss-loader**，需要一个配置文件**postcss.config.js**，
```js
module.exports = {
    // plugins加载需要的插件
    plugins: [
      require('autoprefixer')
    ]
}
```

---

autoprefixer即添加css前缀，需要在**package.json**添加 `browserslist` 字段：
```js
"browserslist": [
    "defaults",
    "not ie < 11",
    "last 2 versions",
    "> 1%",
    "iOS 7",
    "last 3 iOS versions"
],
```

或者建立一个配置文件**.browserslistrc**
```shell
# Browsers that we support

defaults
not ie < 11
last 2 versions
> 1%
iOS 7
last 3 iOS versions
```

---

**css&js压缩**

```shell
npm i terser-webpack-plugin optimize-css-assets-webpack-plugin -D
```

配置：
```js
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
},
```

---

**es6转es5**

```shell
npm i babel-loader @babel/core @babel/preset-env -D
npm i @babel/plugin-syntax-class-properties -D #class的高级语法

# async await promise 异步运行时
npm i @babel/plugin-transform-runtime -D #开发依赖
npm i @babel/runtime #生成依赖

# "a".includes("a") 实现实例方法
npm i @babel/polyfill #生成依赖
```

---

**eslint**

```shell
npm i eslint eslint-loader -D
```

---

**图片**

```shell
npm i url-loader -D # 生成base64
npm i file-loader -D # 处理js/css创建的图片
npm i html-loader -D # 处理html文件img标签引用的图片
```

---

**sourceMap**：

+ source-map                       会生成一个map文件 标识当前报错的 列 和 行
+ eval-source-map                  不会生成map文件集成到bundle.js里 标识报错的列和行
+ cheap-module-source-map          会生成一个map文件 标识当前报错的 行
+ cheap-module-eval-source-map     不会生成map文件集成到bundle.js里 标识当前报错的 行

---

**常用的小插件**

```shell
npm i clean-webpack-plugin -D # 删除生成目录
npm i copy-webpack-plugin -D # 拷贝指定文件夹
npm i webpack-merge -D # 合并插件
```


### webpack可以进来0配置
```js
npx wenbpack
```

### 手动配置webpack
默认配置文件的名字 **webpack.config.js** 或 **webpackFile.js**，如果想改名则需要在 `--config` 指定。
```shell
# 默认文件名
npx webpack

# 修改配置文件指定名字
npx webpack --config webpack.js
```
