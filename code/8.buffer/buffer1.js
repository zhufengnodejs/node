/**
 * Created by lihongji on 2015/6/28.
 */
var buff1=new Buffer(8);
buff1.fill(0);
console.log(buff1);


var buff2=new Buffer([1,2,3]);
console.log(buff2);

var buff3=new Buffer("珠峰培训");
console.log(buff3.length);
buff3.fill(0,3,6);

//截取出的buffer与原来对象互相影响

