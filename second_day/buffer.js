/**
 * Created by lihongji on 2015/6/27.
 */



console.log(Math.pow(2,8))

var sum=0;

for(var i=0;i<8;i++){
    sum+=Math.pow(2,i);
}

var buffer=new Buffer(1);


console.log(sum)