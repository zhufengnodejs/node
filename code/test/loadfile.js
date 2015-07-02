/**
 * Created by lihongji on 2015/6/29.
 */
var fs=require("fs");
var Event={
    readFileHandler:function(path,req,rsp){
        fs.readdir(path,function(err,files){
            if(err){
                console.log("读取错误"+err);
                rsp.end("读取错误"+err);
            }else{
                var lis=new Array();
                files.forEach(function(file){
                    var stat=fs.statSync(path+'/'+file);
                    if(stat.isDirectory()){
                        lis.push({type:"目录",filename:file,link:(file)});
                    }else if(stat.isFile()){
                        lis.push({type:"文件",filename:file,link:(path+"\\"+file)});
                    }
                });
                rsp.end(JSON.stringify(lis));
            }
        });
    }
};

exports.Event=Event;


