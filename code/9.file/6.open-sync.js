/**
 * Created by lihongji on 2015/7/4.
 */

var fs = require("fs");

fs.open("./msg.txt",'r',function(err,fd){
   var buff=new Buffer(12);



   //fd, buffer, offset, length, position
    var bytesRead=fs.readSync(fd,buff,0,6,0);
    console.log(bytesRead,buff.slice(0,bytesRead).toString());

    var bytesRead1=fs.readSync(fd,buff,6,6,6);
    console.log(bytesRead1,buff.toString());

//    (fd,buff,0,6,3,function(err,bytesRead){
//       console.log(bytesRead,buff.slice(0,bytesRead).toString());
//    });


//    fs.read(fd,buff,6,3,9,function(err,bytesRead){
//        console.log(bytesRead,buff.toString());
//    });
});