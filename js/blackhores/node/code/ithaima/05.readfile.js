const fs = require('fs');
fs.readFile('./01.helloNode.js','utf-8',(err,doc) => {
    if (err==null) {
        console.log(doc);
    }
})