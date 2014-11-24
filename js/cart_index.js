//左右滑动
var hzspeed = 20, hzmarsize = 176, hzlength = 0, hzMarSum = 0, hzMar;
function hzTo(v,i) { clearInterval(hzMar); hzlength = v; hzsetMar(i); }
function hzMarquee(i) {
	if (hzlength > 0) {
		if (document.getElementById("hzm2"+i).offsetWidth <= document.getElementById("hzm"+i).scrollLeft) { document.getElementById("hzm"+i).scrollLeft -= document.getElementById("hzm1"+i).offsetWidth; }
		else { document.getElementById("hzm"+i).scrollLeft += hzmarsize; }
		hzMarSum += hzmarsize;
		if (hzMarSum > hzlength) {
			clearInterval(hzMar); hzMarSum = 0;
		}
	}
	else {
		if (document.getElementById("hzm"+i).scrollLeft > 0) { document.getElementById("hzm"+i).scrollLeft -= hzmarsize; }
		else { document.getElementById("hzm"+i).scrollLeft += document.getElementById("hzm1"+i).offsetWidth; }
		hzMarSum -= hzmarsize;
		if (hzMarSum < hzlength) {
			clearInterval(hzMar); hzMarSum = 0;
		}
	}
}




//加入购物车
/*根据名字获得Cookie值*/  
function getCookie(c_name) {  
    if (document.cookie.length > 0) {  
        c_start = document.cookie.indexOf(c_name + "=")  
        if (c_start != -1) {  
            c_start = c_start + c_name.length + 1  
            c_end = document.cookie.indexOf(";", c_start)  
            if (c_end == -1) c_end = document.cookie.length  
            return unescape(document.cookie.substring(c_start, c_end))  
        }  
    }  
    return ""  
}  











//清空购物车方法   
function clearCar()   
{  
    if (window.confirm("您确定要清空购物车吗？"))   
    {  
        var cookieValue = getCookie("jxcart");  
        if (cookieValue != "")   
        {  
            var date = new Date();  
            date.setTime(date.getDate() - 99999);  
            setCookie("jxcart", null, -1);  
			chk_cart_free(1); //赠品处理
        }  
    }
	
}  

//获得购物车中商品的数量   
function CarNumber()   
{  
  
    //debugger;   
    //获得购物车数组   
    var cookieValue = getCookie("jxcart");  
    var jxcart;  
    if (cookieValue == "" || cookieValue == "undefined")  
        return 0; 
    else {  
        jxcart = stringToJSON(cookieValue);  
        return jxcart.length;  
    }  
  
} 

//点击加减
function cartChange(v,n,i)
{	
   	var jx_num=CarNumber();
	if(jx_num<=0){
		alert("您的购物车已为空！");
		setCookie("jxcart", null, -1);  
		chk_cart_free(1); //赠品处理
		return false;
	}
	var kc=n;
	var curv=document.getElementById("ctxt"+i).value;
	var newv=parseInt(curv)+v;	
	if(newv>kc){
		alert("对不起，库存不足，请减少您购物数量！");
		newv=curv; 
		return false;
		}
	if(newv<=1){ var newv=1;}
	document.getElementById("ctxt"+i).value=newv;
	changeCartnum(i,newv);
}

//输入数量
function renum(i,n)
{	
	
	var reg = new RegExp("^[0-9]*$");
	var curv=document.getElementById("ctxt"+i).value;
    if(!reg.test(curv)){
        alert("请输入数字!");
		document.getElementById("ctxt"+i).value=1;
    }else{
			if(curv<=1){ var curv=1;}
			var kc=n;
			if(curv>kc){alert("对不起，库存不足，请减少您购物数量！");curv=1; }
			document.getElementById("ctxt"+i).value=curv;
			changeCartnum(i,curv);
		}
}
 
 //收藏
function save(goodsId)
{
  var uid=document.getCookie("ECS[user_id]");
  if(uid>0){
	  $.post('/web.php?c=goods&m=collect',{id:goodsId,uid:uid},save_rep,'JSON');
	}else{
		alert("您还没有登录，请先登录！");
	}
  
}
function save_rep(result)
{
	if(result.err==1){
        //登录弹出页
		//login_layer();
		location.href="/web.php?c=login"
	}
	else{
		alert(result.msg);
	}
}

//浏览历史
//添加商品至浏览历史 
function viewhis(gid) 
{
	
	var cookieValue = getCookie("viewhis");      
  var viewhis; 
  if (cookieValue == "" || cookieValue == "undefined") {     
      viewhis = new Array();  
      var good = new Object();  
      good.id = gid;
      good.k = 0;  
      viewhis[0] = good;  
  }  
  else {  
      viewhis = stringToJSON(cookieValue);  
      var index = viewhis.length;   
      var i;  
      for (i = 0; i < index; i++) { 
          var good = viewhis[i];   
          if (good.id == gid) {
              break;  
          }  
      }  
	 	if (i == index) {     
          var good = new Object();  
     		good.id = gid; 
     		//var mytime =timestamp=new Date().getTime();
     		//good.k = mytime; 
          viewhis[index] = good;  
      }  
  }
	if(i>10){viewhis = delArray(viewhis, 0);}
  setCookie("viewhis", jsonToString(viewhis), 12);

}  
//获得浏览历史的数量   
function HisNumber()   
{  
  var cookieValue = getCookie("viewhis");  
  var viewhis;  
  if (cookieValue == "" || cookieValue == "undefined")  
      return 0; 
  else {  
      viewhis = stringToJSON(cookieValue);  
      return viewhis.length;  
  }  

}

//清空浏览历史
function clearHis()   
{  
  if (window.confirm("您确定要清空浏览历史记录吗？"))   
  {  
      var cookieValue = getCookie("viewhis");  
      if (cookieValue != "")   
      {  
          var date = new Date();  
          date.setTime(date.getDate() - 99999);  
          setCookie("viewhis", null, -1);
      }  
  }
	
}  


