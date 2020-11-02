//1.通過模塊的名字fs對模塊進行導入引用
const fs = require('fs');
//2.通過模塊內部的readFile讀取文件內容
fs.readFile('./01.helloNode.js','utf-8',(err,doc) => {
    // console.log(err);
    if (err== null) {
        console.log(doc);
    }
})