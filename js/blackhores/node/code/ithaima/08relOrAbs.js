const fs =require('fs');
const path=require('path');
//獲取絕對路徑
console.log(__dirname);
//絕對路徑拼接
console.log(path.join(__dirname,'01.helloNode.js'));
fs.readFile('./01.helloNode.js','utf-8',(err,doc)=>{
    console.log(err);
    console.log(doc);
});