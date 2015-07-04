/**
 * Created by lihongji on 2015/6/29.
 */
var http=require("http");
var fs=require("fs");
var loadfile=require("./loadfile");

var server=http.createServer(function(req,rsp){
    var url=req.url;
    var path="./";
    var index="index.html";

    var urlArray=url.split("?");
    var pathname=urlArray[0];
    var paramsObj={};
    if(url.indexOf("?")>-1){
        var params= urlArray[1];
        params=params.split("&");
        for(var i in params){
            var param=params[i];
            param=param.split("=");
            paramsObj[param[0]]= param[1];
        }
    }

    if(url.indexOf(index)>-1){
        rsp.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
        fs.readFile(path+index,function(err, data){
            rsp.end(data);
        });
    }else if(url.indexOf("getFiles")>-1){
        var realPath=path+(paramsObj.path?paramsObj.path:"");
        loadfile.Event.readFileHandler(realPath,req,rsp);
    }else if(url.indexOf("favicon")>-1){
        rsp.end();
    } else{
        var data=fs.readFileSync("."+url);
        rsp.end(data);
    }
});
server.listen(8080);