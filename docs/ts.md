# typescript
### 一些通配符的含义
在 tsconfig.json 往往会设置 "include": [ "./src/**/*" ], 这中间的 ** 表示匹配0或或者更多的目录，* 表示匹配0或者更多的字符
[/**和/*区别](https://blog.csdn.net/bingguang1993/article/details/89182571)
> [/*和/**的区别](https://blog.csdn.net/HeZhiYing_/article/details/104394059)
>/*是指/目录下的所有资源，不包括其子目录下的资源。例如/a.html，/dir
>/**是指/目录下的所有资源，包括其子目录的下的资源。例如/a.html，/dir，/dir/b.html

> [tsconfig.json](https://www.tslang.cn/docs/handbook/tsconfig-json.html)
> * 匹配0或多个字符（不包括目录分隔符）
> ? 匹配一个任意字符（不包括目录分隔符）
> **/ 递归匹配任意子目录

### 文章
#### tsconfig.json
[tsconfig.json](https://www.tslang.cn/docs/handbook/tsconfig-json.html)
[What is a tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
[一些你需要掌握的 tsconfig.json 常用配置项](https://zhuanlan.zhihu.com/p/570939192)
[了不起的 tsconfig.json 指南](https://zhuanlan.zhihu.com/p/285270177)

##### 支持 jsx
设置 "jsx": "react"