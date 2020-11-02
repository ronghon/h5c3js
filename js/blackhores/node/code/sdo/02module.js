/*
* 模塊化
*  - 在node中,一個JS文件就是一個模塊
*  -
* */
console.log("我是02.module.js");
//向外部暴露,使用exports
exports.x="abc123";
exports.y="bcd456";
exports.fn=function(){}