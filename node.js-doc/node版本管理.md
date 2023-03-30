## 前情提要

1. 以下为 macOS 系统下的安装
2. node 包含 npm，只需安装 node
3. 选择 node 的 stable 稳定版安装
4. 推荐多版本管理安装

## 单一版本安装

- 安装 node `brew install node`
- 更新 node `brew upgrade node`
- 卸载 node `brew uninstall node`

## 多版本管理安装

各种 node 版本管理工具：
- n `npm i -g n` 安装最简单，推荐
- nvm `brew install nvm` 安装后需要根据安装日志中的提示，手动进行配置，稍微麻烦点

## 查看当前环境的 node 版本和 npm 版本

- 查看当前环境的 node 版本 `node -v`
- 查看当前环境的 npm 版本 `npm -v`
