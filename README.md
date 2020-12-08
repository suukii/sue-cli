# sue-cli

一个简易脚手架，需要指定模板项目 GitHub 仓库。

## What does it do

1. 下载模板项目
2. 修改 `package.json` 中的 `name` 字段
3. 将当前目录初始化为 Git 仓库
4. 创建 GitHub 远程仓库
5. 设置上游分支，推送本地仓库至远程仓库

## Install

```shell
npm install --global @suukii/sue-cli
```

## Usage

```shell
sue create app-name --template=username/repo

# or

sue create --template=username/repo
```

-   不设置 `--template` 的话会下载一个 demo 项目

## TODO

-   [ ] 提供一个 VUE 模板项目
