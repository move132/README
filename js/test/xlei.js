var cheerio=require("cheerio");
var request=require('request');
var iconv=require("iconv-lite");
var fs=require("fs");
//fs.writeFileSync('css.scss',"");
fs.unlinkSync('css.scss');
console.log(fs);

request('http://521xunlei.com/portal.php',function(err,res,rep){
    if (err) {
        console.error('[ERROR]Collection' + err);
        return;
    }
    getParseHtml(rep);

});
var getParseHtml=function(res){

    $=cheerio.load( res,{decodeEntities: false} );
    //console.log(res);
   // console.log($(".dxb_bc ul li").eq(0).find("a").eq(1).attr("href"));
    var newURL=$(".dxb_bc ul li").eq(0).find("a").eq(1).attr("href");
    var newXleiUrl='http://521xunlei.com/'+newURL;

    request(newXleiUrl,function(err1,res1,rep1){
        if (err1) {
            console.error('[ERROR]Collection' + err);
            return;
        }
        //console.log(iconv);
         var html = iconv.decode(rep1, 'gbk'); //console.log(html);
        $=cheerio.load( html  );

        console.log($(".t_fsz .t_f").text());
    });
}