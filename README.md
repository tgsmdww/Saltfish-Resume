# Saltfish-Resume


## 脚手架

项目使用 @vue/cli 3.0 创建

脚手架配置详细信息参见 https://cli.vuejs.org


### npm/yarn script

```
// Project setup
yarn install

// Compiles and hot-reloads for development
yarn run serve

// Compiles and minifies for production
yarn run build

// Lints and fixes files
yarn run lint
```

### WARN

**架手架变动需告知组内所有开发人员！**



## VUE

项目主要框架使用 VUE，不使用 React 的的原因是部分成员对 React 不熟悉

### 文档

VUE 文档：https://cn.vuejs.org/v2/guide/


## TS

项目使用 Typescript，效果未知，可能回滚回 ES6+


### 文档和参考资料

Typescript 官网：https://www.typescriptlang.org/index.html

Typescript Handbook：https://zhongsp.gitbooks.io/typescript-handbook/content/



### vue-property-decorator

VUE 和 TS 结合使用 依赖 `vue-property-decorator`，这个库官方维护

Github README 例子给的不错：https://github.com/kaorun343/vue-property-decorator

另外可能需要自己找些文章看看学习


## pug

选择 pug (原jade) 作为 html 模板引擎。

原因：
1. 规范 html 缩进（因为你缩进不对就炸了）
2. 提高 template 可读性


这里只看中 pug 的基础写法的简洁，不需要使用模板引擎的全部功能，学习成本很低。

**慎重使用高级特性！**


### 文档

PUG 文档：https://pugjs.org/api/getting-started.html



## stylus

选择 stylus 作为 css 预处理器。

原因是样子和 pug 比较配（？），额，其实是我不喜欢 Sass

### 文档

stylus 文档：http://stylus-lang.com/

强约束只有一个：

**使用好 stylus 的变量**


### css 命名规范

我不喜欢 BEM 那一套，太冗长了，我们这里使用 rscss

教程和文档：http://futurecareers.cn/rscss-zh-cn/index.html


请尽量遵守


## Lint


### editorconfig

1. 不要全局格式化代码，这将导致代码无法 code review
2. 我们使用 `1 tab = 2 space`


### 代码风格

遵循默认的 ESlint 配置，代码风格的问题，让工具自动修复

**提交前请自行运行 `yarn run lint --fix` 修复代码风格问题**


## Git


### branch 规范

每个人拉一根开发分支命名为  `dev-${github-name}`，例如 `dev-saltfish`

需要提交主分支的时候提交 PR


### commit 规范

不要使用 `update` 之类无意义的 commit message

如果本地小修改多次，可以使用 `git rebase` 来合并提交记录

> TIPS：欢迎使用 emoji


### 文档

参考：https://git-scm.com/docs

