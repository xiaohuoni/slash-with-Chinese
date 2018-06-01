# slash-with-Chinese
when the Naming with Chinese ，use slash has a bug

# code
```js
import { writeFileSync } from 'fs';
import { join } from 'path';
import slash from 'slash';
const dvaContainerPath = join(process.cwd(), 'path.js');
const content = slash(process.cwd());
writeFileSync(dvaContainerPath, JSON.stringify(content), 'utf-8');
```
you can see the product:[中文字符](https://github.com/xiaohuoni/slash-with-Chinese/blob/master/lib/%E4%B8%AD%E6%96%87%E5%AD%97%E7%AC%A6/node/path.js) and [EnglishCharacters](https://github.com/xiaohuoni/slash-with-Chinese/blob/master/lib/englishCharacters/node/path.js)
# Chinese Characters
```js
"e:\\0601\\slash-with-Chinese\\lib\\中文字符\\node"
```

# EnglishCharacters
```js
"e:/0601/slash-with-Chinese/lib/englishCharacters/node"
```

you can run `node \slash-with-Chinese\lib\englishCharacters\node\index.js` and `node \slash-with-Chinese\lib\中文字符\node\index.js`
