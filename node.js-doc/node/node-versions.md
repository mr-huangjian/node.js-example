## 前情提要

1. 以下为 macOS 系统下的安装
2. node 包含 npm，只需安装 node
3. 选择 node 的 stable 稳定版 **LTS** 安装
4. 推荐多版本管理安装

## 单一版本安装

需要先安装 [homebrew](https://brew.sh/index_zh-cn)
- 安装  `brew install node`
- 更新  `brew upgrade node`
- 卸载  `brew uninstall node`

## 多版本管理安装

各种 node 版本管理工具：
- [n](https://www.npmjs.com/package/n) 安装最简单，推荐！
- [nvm](https://github.com/nvm-sh/nvm) `brew install nvm` 安装后需要根据安装日志中的提示，手动进行配置，稍微麻烦点

安装 n
```
% npm -g i n
```

安装 node 版本
```shell
% n lts     # 安装 node 最新稳定版
% n latest  # 安装 node 最新发行版
```

切换 node 版本
```shell
%  sudo n           # ο表示当前版本，向上向下键切换版本，回车确认
   node/18.15.0
 ο node/19.8.1
```
