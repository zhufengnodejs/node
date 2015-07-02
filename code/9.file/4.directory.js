

var fs = require('fs');
//
fs.mkdir('./test/test/test',function(err){
    if(err){
        //console.log(err);
    }else{
        console.log('创建成功');
    }
});




fs.exists('./test',function(exists){
    console.log(exists);
});
//获取一个文件的绝对路径
fs.realpath('./test',function(err,path){
    console.log(path);
});

//修改目录信息
//atime 修改后的访问时间 mtime 修改后修改时间
fs.utimes('./1.md',new Date(),new Date(),function(err){
    console.log();
});


