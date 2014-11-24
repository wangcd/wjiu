function getCookie(name) {
 var cookiefound=false
 var start=0
 var end=0
 var cookiestring=document.cookie;
 var i=0;
 while (i<=cookiestring.length)
 {
 start=i
 end=start+name.length 
if (cookiestring.substring(start,end)==name)
 {cookiefound=true;
 break;
 }  
 i++;
 }
 if (cookiefound==true)
 {
 start=end+1;
 end=cookiestring.indexOf(";",start);
 if (end<start)
 {
 end=cookiestring.length;}
 return cookiestring.substring(start,end);
 }
 return "";
 }
 
function newcookie(id,value,guoqi) 
{
 var expires=new Date()
 //expires.setTime(expires.getTime()+24*60*60*30*1000) //30为天数，可改为任意数字
 expires.setTime(expires.getTime()+60*1000) 
 var expiryDate=expires.toGMTString();
 document.cookie=id+"="+value+";expires="+expiryDate
 }
 
if (getCookie("123")=="") {
 
document.writeln("<div id=\"showtext\" style=\"position:absolute;left:300px; top:60px; width:559px; height:150px; z-index:9000; background-color:#999;opacity:0.9; padding:20px; font-size:14px; text-align:left;  line-height:30px;\">");

document.writeln(" ");
document.writeln(" ");
document.writeln("<div style=\" background-color:#000;z-index:8000;height:30px;color:#fff;\">&nbsp;&nbsp;您好！欢迎光临唯酒网！<a onclick=\"closes_showtext();\" style=\"color:#FF0000;font-size:25px; text-decoration:none; float:right; cursor:pointer;\">X<\/a><br \/><\/div>");
document.writeln(" <div style=\" background-color:#ffffff;opacity:0.9999;z-index:8000;height:120px;padding:10px 10px 0px 10px;\">");
document.writeln("");
document.writeln("官方网站地址：");
document.writeln("<a href=\"http:\/\/jiu.ecshop.hhlqzjy.com\" target=\"_blank\" style=\" font-size:14px; color:#FF0000;\">http://jiu.ecshop.hhlqzjy.com<\/a><br \/>");
document.writeln("购物区域选择：");
document.writeln("<a href=\"http:\/\/#\/\" target=\"_blank\" style=\" font-size:14px;margin-left:15px; color:#FF0000;\">许昌<\/a><a href=\"http:\/\/#\/\" target=\"_blank\" style=\" font-size:14px; margin-left:15px;color:#FF0000;\">长葛<\/a><a href=\"http:\/\/#\/\" target=\"_blank\" style=\" font-size:14px; margin-left:15px;color:#FF0000;\">禹州<\/a><a href=\"http:\/\/#\/\" target=\"_blank\" style=\" font-size:14px;margin-left:15px; color:#FF0000;\">襄县<\/a><br \/>	<center>唯酒网祝您购物愉快！谢谢！</center> ");
document.writeln("   ");
document.writeln("<\/div>");
document.writeln("<iframe src=\"javascript:false\" style=\"position:absolute; visibility:inherit; top:0px; left:0px; width:600px; height:340px; z-index:-1; filter=\'progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)\'; display:none;\"><\/iframe>");
document.writeln("<\/div>")

//
function closes_showtext()
{document.getElementById("showtext").style.display='none';}
lastScrollY_SH=0; 
function heartBeat_SH(){ 
var diffY_SH;
if (document.documentElement && document.documentElement.scrollTop)
    diffY_SH = document.documentElement.scrollTop;
else if (document.body)
    diffY_SH = document.body.scrollTop
else
    {}
percent_SH=.1*(diffY_SH-lastScrollY_SH); 
if(percent_SH>0)percent_SH=Math.ceil(percent_SH); 
else percent_SH=Math.floor(percent_SH); 
document.getElementById("showtext").style.top=parseInt(document.getElementById("showtext").style.top)+percent_SH+"px";
lastScrollY_SH=lastScrollY_SH+percent_SH; 
} 
//
window.setInterval("heartBeat_SH()",1);



 newcookie("123","yes")
 }
 else
 {} 

function foreach()
{
      var strCookie=document.cookie;
      var arrCookie=strCookie.split("; "); // 将多cookie切割为多个名/值对
      for(var i=0;i<arrCookie.length;i++)
        { // 遍历cookie数组，处理每个cookie对
      var arr=arrCookie[i].split("=");
      if(arr.length>0)
      DelCookie(arr[0]);
    }
   
}

