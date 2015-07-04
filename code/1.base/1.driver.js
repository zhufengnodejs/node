/**
 * Created by lihongji on 2015/6/27.
 */


var http=require("http");
var path=require("path");


var server=http.createServer(function(req,rsp){
    var filePath = path.resolve();

    //icon请求忽略
    if (req.url == '/favicon.ico') {
        rsp.end();
        return;
    }

    //系统份文件分隔符
    //var sep=path.sep;

    //访问请求的文件地址标准化
    var reqPath = path.normalize(req.url);

    // var reqPath =req.url;

    //获取当文件的路径
    var pathname = path.join(filePath, reqPath);

    rsp.write("hello");
    rsp.end(" world");
});

server.listen(8080);
//请求
//Accept :可以接受的类型，q=0.9，返回优先级。
//Accept-Encoding:gzip,deflate,sdch可以接受压缩类型
//Connection:keep-alive，保持连接，tcp-ip连接
//Pragma:老IE浏览器
//UA:用户代理

//响应
//Transfer-Encoding:chunked 分块
