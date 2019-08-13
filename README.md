CSS Modules 用法教程

#### 介绍
本教程主要参考阮一峰的博客教程，随着依赖库的更新，其中有部分配置有些变化，因此依照阮一峰大神的教程把部分的的配置做了少量的更新. 附上阮一峰大神的css module用法教程的博客地址（http://www.ruanyifeng.com/blog/2016/06/css_modules.html）

学过网页开发就会知道，CSS 不能算编程语言，只是网页样式的一种描述方法。

为了让 CSS 也能适用软件工程方法，程序员想了各种办法，让它变得像一门编程语言。从最早的Less、SASS，到后来的 PostCSS，再到最近的 CSS in JS，都是为了解决这个问题。

![](https://images.gitee.com/uploads/images/2019/0813/150704_2e9a1924_1707251.png "在这里输入图片标题")

本文介绍的 CSS Modules 有所不同。它不是将 CSS 改造成编程语言，而是功能很单纯，只加入了局部作用域和模块依赖，这恰恰是网页组件最急需的功能。

因此，CSS Modules 很容易学，因为它的规则少，同时又非常有用，可以保证某个组件的样式，不会影响到其他组件。

![](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016061002.png "在这里输入图片标题")