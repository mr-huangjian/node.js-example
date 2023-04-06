
[阮一峰 package.json 文件](https://javascript.ruanyifeng.com/nodejs/packagejson.html)

## dependencies 与 devDependencies 的区别

```
npm i jquery
npm i jquery -S
npm i jquery --save
```

以上命令安装的包存放在 `dependencies`，`dependencies` 的包，是在开发环境和生产（线上）环境都需要的依赖，比如 JS 框架，在最终代码中包含这些包。此外，任何包没有被引用，也就是未使用，也不会打入最终代码。

---

```
npm i webpack -D
npm i webpack --save--dev
```

以上命令安装的包存放在 `devDependencies`，`devDependencies` 的包，是在开发环境才需要的依赖，比如 eslint、jest、babel、loader、webpack plugin 等前端工程化的构建工具，在最终代码中**不包含**这些包。

---

区分指定的必要性：

在下载依赖库的依赖时，只会下载 `dependencies` 中的东西，不会下载 `devDependencies` 中的东西，如果不区分则会下载并占用磁盘资源空间，而且用户根本用不上。



## dependencies 版本区间

版本号格式: `{major}.{minor}.{patch}-{pre-release}`，即 `{主版本号}.{次版本号}.{修补版本号}-{非正式版版本号}`，[官方版本语义检测工具](https://semver.npmjs.com/)

```js
{
    "q": "1.2.3",               // 指定版本
    "q": "~1.2.3",              // ["1.2.3", "1.2.~"] 接近版本
    "q": "^1.2.3",              // ["1.2.3", "1.~.~"] 提升兼容版本
    "q": ">=1.2.3",             // ["1.2.3", "~"] 大于等于版本
    "q": "latest",              // 最新版本
    "q": "*",                   // 任意版本
    "q": "1.2.3 - 1.5.0",       // ["1.2.3", "1.5.0"]
    "q": "<=1.2.3 || >=1.5.0",  // ["~", "1.2.3"] 或 ["1.5.0", "~"]
    "q": "1.x",                 // ["1.0.0", "1.~.~"]
    "q": "1.2.x",               // ["1.2.0", "1.2.~"]
}
```

