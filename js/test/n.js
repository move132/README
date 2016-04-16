var fs=require('fs');
var http=require("http");
var util=require("util");
var request=require('request');

var cheerio=require("cheerio");
	
request('http://cnodejs.org/',function(err,res,rep){
	if (err) {
      console.error('[ERROR]Collection' + err);		
      return;			
    }
    getParseHtml(rep);
   
});
var getParseHtml=function(res){
	 
	 $=cheerio.load( res,{decodeEntities: false} );
    //console.log(res);
	 // console.log($("#topic_list").html());

    $("#topic_list .cell").each(function(index,ele){
       var title= $(ele).find(".topic_title").text();
        console.log(title);
    });
}
//request('http://react-china.org/').pipe(fs.createWriteStream('abc.txt'));

/*
http.createServer(function(req,res){
	console.log("服务已经启动。。。");

	//res.writeHead({'Content-Type':'text/html;charset:utf-8'});
	  res.write('<head><meta charset="utf-8"/></head>');  
	fs.createReadStream('http://react-china.org/').pipe(res);
}).listen(8090);*/
