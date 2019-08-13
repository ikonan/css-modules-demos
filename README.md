CSS Modules 用法教程

#### 介绍
本教程主要参考阮一峰的博客教程，随着依赖库的更新，其中有部分配置有些变化，因此依照阮一峰大神的教程把部分的的配置做了少量的更新. 附上阮一峰大神的css module用法教程的博客地址（http://www.ruanyifeng.com/blog/2016/06/css_modules.html）

学过网页开发就会知道，CSS 不能算编程语言，只是网页样式的一种描述方法。

为了让 CSS 也能适用软件工程方法，程序员想了各种办法，让它变得像一门编程语言。从最早的Less、SASS，到后来的 PostCSS，再到最近的 CSS in JS，都是为了解决这个问题。

![](https://images.gitee.com/uploads/images/2019/0813/150704_2e9a1924_1707251.png "在这里输入图片标题")

本文介绍的 CSS Modules 有所不同。它不是将 CSS 改造成编程语言，而是功能很单纯，只加入了局部作用域和模块依赖，这恰恰是网页组件最急需的功能。

因此，CSS Modules 很容易学，因为它的规则少，同时又非常有用，可以保证某个组件的样式，不会影响到其他组件。

![](https://images.gitee.com/uploads/images/2019/0813/160900_42a8979d_1707251.png "在这里输入图片标题")

###使用
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

###一. 局部作用域

CSS的规则都是全局的，任何一个组件的样式规则，都对整个页面有效。

产生局部作用域的唯一方法，就是使用一个独一无二的class的名字，不会与其他选择器重名。这就是 CSS Modules 的做法。

下面是React 的一个组件
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
