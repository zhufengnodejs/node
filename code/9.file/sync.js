/**
 * Created by lihongji on 2015/6/28.
 */
 var fs=require("fs");
var content=fs.readFileSync("sync.js","utf-8");

console.log(content);

fs.readFile('./1.md',"utf8",function(err,data){
    console.log(data);
});
