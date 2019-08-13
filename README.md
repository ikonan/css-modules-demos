CSS Modules 用法教程

#### 介绍
本教程主要参考阮一峰的博客教程，随着依赖库的更新，其中有部分配置有些变化，因此依照阮一峰大神的教程把部分的的配置做了少量的更新. 附上阮一峰大神的css module用法教程的博客地址（http://www.ruanyifeng.com/blog/2016/06/css_modules.html）

学过网页开发就会知道，CSS 不能算编程语言，只是网页样式的一种描述方法。

为了让 CSS 也能适用软件工程方法，程序员想了各种办法，让它变得像一门编程语言。从最早的Less、SASS，到后来的 PostCSS，再到最近的 CSS in JS，都是为了解决这个问题。

![](https://images.gitee.com/uploads/images/2019/0813/150704_2e9a1924_1707251.png "在这里输入图片标题")

本文介绍的 CSS Modules 有所不同。它不是将 CSS 改造成编程语言，而是功能很单纯，只加入了局部作用域和模块依赖，这恰恰是网页组件最急需的功能。

因此，CSS Modules 很容易学，因为它的规则少，同时又非常有用，可以保证某个组件的样式，不会影响到其他组件。

![](https://images.gitee.com/uploads/images/2019/0813/160900_42a8979d_1707251.png "在这里输入图片标题")
### 使用

首先, 克隆示例库
```
$ git clone https://gitee.com/ikonan/css-modules-demos.git
```
然后安装依赖
```
$ cd css-modules-demos
$ npm install
```
接着，就可以运行第一个示例了。
```
$ npm run demo01
```
打开浏览器，访问 http://localhost:8080 这里输入代码，查看结果。其他示例的运行方法类似。

### 一. 局部作用域


CSS的规则都是全局的，任何一个组件的样式规则，都对整个页面有效。

产生局部作用域的唯一方法，就是使用一个独一无二的class的名字，不会与其他选择器重名。这就是 CSS Modules 的做法。

下面是React 的一个组件 App.js
```
import React from 'react';
import style from './App.css';

export default () => {
  return (
    <h1 className={style.title}>
      Hello World
    </h1>
  );
};
```

上面代码中，我们将样式文件App.css输入到style对象，然后引用style.title代表一个class。
```
.title {
  color: red;
}
```
构建工具会将类名style.title编译成一个哈希字符串。

```
<h1 class="_3zyde4l1yATCOkgn-DBWEL">
  Hello World
</h1>
```

App.css也会同时被编译。
```
._3zyde4l1yATCOkgn-DBWEL {
  color: red;
}
```
这样一来，这个类名就变成独一无二了，只对App组件有效。

CSS Modules 提供各种插件，支持不同的构建工具。本文使用的是 Webpack 的css-loader插件，因为它对 CSS Modules 的支持最好，而且很容易使用。顺便说一下，如果你想学 Webpack，可以阅读我的教程Webpack-Demos。

下面是这个示例的webpack.config.js。
```
module.exports = {
  entry: __dirname + "/index.js",
  output: {
    publicPath: "/",
    filename: "./bundle.js"
  },

  module: {
    rules: [
      { test: /\.js|jsx$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, use: ["style-loader", "css-loader?modules"] }
    ]
  }
};
```
下面是.babelrc代码(最新版的babel配置代码)
```
{
    "presets": ["@babel/preset-env", "@babel/preset-react", "mobx"],
    "plugins": [
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-transform-runtime"
    ]
}
```
上面代码中，关键的一行是style-loader!css-loader?modules，它在css-loader后面加了一个查询参数modules，表示打开 CSS Modules 功能。

现在，运行这个Demo。
```
npm run demo01
```
打开 http://localhost:8080 ，可以看到结果，h1标题显示为红色

### 二、全局作用域

CSS Modules 允许使用:global(.className)的语法，声明一个全局规则。凡是这样声明的class，都不会被编译成哈希字符串。

App.css加入一个全局class。

```
.title {
  color: red;
}

:global(.title) {
  color: green;
}
```

App.js使用普通的class的写法，就会引用全局class
```
import React from 'react';
import styles from './App.css';

export default () => {
  return (
    <h1 className="title">
      Hello World
    </h1>
  );
};
```
运行这个示例。

```
$ npm run demo02
```
打开 http://localhost:8080，应该会看到h1标题显示为绿色。

CSS Modules 还提供一种显式的局部作用域语法:local(.className)，等同于.className，所以上面的App.css也可以写成下面这样。


```

:local(.title) {
  color: red;
}

:global(.title) {
  color: green;
}
```

