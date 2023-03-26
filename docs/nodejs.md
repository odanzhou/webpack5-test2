# nodejs

### 坑
#### 如何引用带注释的json文件
想将tsconfig.json 中的path和webpack的统一起来，发现tsconfig.json是带注释的，直接引用会报错
[Node.js 项目的配置文件](https://cnodejs.org/topic/55fac7eced1da72438e33a7d)
> [js-conf](https://www.npmjs.com/package/js-conf)
```typescript
  var jc = require('js-conf');
  var conf = jc.readFileSync(confFilePath, {encoding: 'utf8', append: function(str){
    return str+'d';
  }});
```
想了想，要想解析带注释的文件，其核心思路应该是读取文件文本，然后再将其转化为 js 文件
[typescript JSONC](https://github1s.com/microsoft/TypeScript/blob/HEAD/scripts/build/utils.mjs#L6)
[jsonc-parser](https://www.npmjs.com/package/jsonc-parser)


