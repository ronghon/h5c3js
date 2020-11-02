const fs = require('fs');
fs.writeFile('./demo.txt', '即將要寫入的內容', err => {
    if (err != null){
    console.log(err);
    return;
}
   console.log('文件內容寫入成功')
});