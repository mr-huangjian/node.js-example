
> [在 NPM.JS 官网搜索公开库](https://www.npmjs.com/)

# 发布到 NPM 官方仓库
1. 在工作目录，完成代码开发和 `package.json` 相关配置
1. 在[官网](https://www.npmjs.com/)注册账号
2. 本机确保为官方镜像源 `npm get registry` = `https://registry.npmjs.org/`
3. 本机登录你的官方账号 `npm login`
4. 本机命令切换到工作目录，执行发布命令 `npm publish`，它将压缩当前目录推送到官方仓库
5. 在官网个人中心可以看到你分布的包
6. 如果需要删除仓库某版本，执行删除命令 `npm unpublish {my-module}@{version} --force`

# 搭建私有仓库

- verdaccio
- nexus

# 发布到私有仓库

