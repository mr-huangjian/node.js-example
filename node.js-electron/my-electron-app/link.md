
> electron 版本 23.1.4
> electron-forge 版本 6.0.5

- [基础!](https://blog.csdn.net/qq_38779317/article/details/126691165)
- [remote被移除](https://www.electronjs.org/docs/latest/breaking-changes#planned-breaking-api-changes-140)
- [remote重启](https://juejin.cn/post/7018561946345537566)
- [技巧](https://blog.csdn.net/weixin_53312997/article/details/126974449)

- [webPreferences](https://www.electronjs.org/zh/docs/latest/api/browser-window)
    - nodeIntegration 默认false
    - contextIsolation 默认true
    - enableRemoteModule 已移除
    - webSecurity 默认true

- [官方推荐的打包方式](https://www.electronjs.org/docs/latest/tutorial/tutorial-packaging#creating-a-distributable)
```shell
yarn run make
```

- [electron打包](https://www.cnblogs.com/makalochen/p/17144488.html)