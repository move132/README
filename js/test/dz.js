var cheerio=require("cheerio");
var request=require('request');
var iconv=require("iconv-lite");
var fs=require("fs");
 
var times=Math.floor(new Date().getTime()/1000);

function getMp4(){
    var interv=setInterval(function(){
        request('http://neihanshequ.com/video/?is_json=1&app_name=neihanshequ_web&max_time='+times+'',function(err,res,rep){
            if (err) {
                console.error('[ERROR]Collection' + err);
                return;
            }
            getParseHtml(rep,Math.floor(new Date().getTime()/1000)); 
        });
    },10000)
}
getMp4();
var getParseHtml=function(res,times){
    //console.log(JSON.parse(res).data.data);
    var mp4_url_list=[];
    var json=JSON.parse(res).data.data;
    
    for (var i = 0; i < json.length; i++) {
        mp4_url_list.push(json[i]["group"]["mp4_url"]);
       // console.log(mp4_url_list);
    };
    console.log(times);
    fs.writeFileSync('mp4_'+times+'.json',JSON.stringify(mp4_url_list));
}