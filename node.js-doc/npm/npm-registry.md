> NPM 默认镜像源地址在国外，访问下载会很慢，可以将其设置为国内的镜像源

# NPM 镜像源

获取
```
% npm get registry
https://registry.npmjs.org/
```

设置
```
% npm set registry https://registry.npmmirror.com/
```

地址
```
npm ------------ https://registry.npmjs.org/
yarn ----------- https://registry.yarnpkg.com/
tencent -------- https://mirrors.cloud.tencent.com/npm/
cnpm ----------- https://r.cnpmjs.org/
taobao --------- https://registry.npmmirror.com/
npmMirror ------ https://skimdb.npmjs.com/registry/
```

# NPM 镜像源管理

推荐使用 NPM 镜像源管理工具 nrm，操作也很简单

安装
```
% npm -g i nrm
```

指令
```
% nrm -h # 帮助
% nrm ls # 获取镜像源列表，带*号的是当前镜像源
% nrm current # 获取当前镜像源
% nrm use {name} # 切换到{name}镜像源，比如 nrm use taobao
% nrm add {name} {url} # 添加{name}镜像源，地址为{url}，比如 nrm add taobao http://registry.npm.taobao.org/
...
```

