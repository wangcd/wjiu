
//加减
var timer=null;
//var timer1=null;
$(function(){
	// 列表页加入购物车前的加商品数量
	$('.prtlt_add').live('click',function(){
		var num=$(this).siblings('.prtlt_txt').val();
		num++;
		$(this).siblings('.prtlt_txt').val(num);
		$(this).siblings('.prtlt_next').removeClass("prtlt_on");

	});
	// 列表页加入购物车前的减商品数量
	$('.prtlt_next').live('click',function(){
		var num=$(this).siblings('.prtlt_txt').val();
		num--;
		if(num<=1){
			num=1;
			$(this).siblings('.prtlt_txt').val(num);
			$(this).addClass("prtlt_on");
			return;
		}else{
			$(this).siblings('.prtlt_txt').val(num);	
		}
	});

	// 列表页面上的加入购物车按钮触发的事件
	$('.prtlt_btn2').live('click',function(e){
		//加入购物车
		var num=$(this).siblings('span').find('input').val();
		var goodsId=$(this).siblings('span').find('input').attr('gid');
		//判断库存
		$.support.cors = true; 
		var url_kc= CROSS_DOMAIN_REQUEST_URL + "/web.php?c=list_kc&m=chk_list_kc&gid="+goodsId+"&n="+num;
		//var params = "gid="+goodsId+"&n="+num;
		var proxy_url = "/httpProxyAccess.htm?t="+new Date().toTimeString();
		$.post(proxy_url,{target:url_kc},
			function(result){
				  if(result.err==0){ // 没有库存
					alert(result.msg);
					return false;
				}else if(result.err==1){ // 有库存
					url_kc= CROSS_DOMAIN_REQUEST_URL + "/web.php?c=cart&m=chk_four_year&gid="+goodsId;
					$.post(proxy_url,{target:url_kc},
						function(data){
							 if(data.err==1){
									alert(data.msg);
								}else{
									list_toCart(goodsId,num,0,0);
								}
						},'JSON');
				}
		 }
				
		,'JSON');
	})

	// 加入购物车成功的页面的关闭按钮盒继续购物按钮的点击事件
	$(".succ_close,.contgo").live('click',function(){
		$(this).parents(".alt_succ").hide();
	})
})

// 列表页加入购物车前的数量输入框输入数量时触发的事件
function changeNum(n,i){	
	var num=document.getElementById("InputNum"+i).value;
	var reg = new RegExp("^[0-9]*$");
    if(!reg.test(num)){
        alert("请输入正确的数字!");
		document.getElementById("InputNum"+i).value=1;
    }else{
		var n2=parseInt(num)>=1?parseInt(num):1;
		document.getElementById("InputNum"+i).value=n2;
	}
}

// 将列表中的商品添加到购物车的方法  
function list_toCart(goodsId,num,rec_type,is_gift){		
	var jx_num=CarNumber(); // 获取购物车中已存在的商品的数量
	if(jx_num>30){
		alert("您的购物车已满！");
		return false;
	}else{
			var cookieValue = getCookie("jxcart");   
			//创建购物车对象   
			var jxcart; 
			//如果购物车为空添加新商品   
			if (cookieValue == "" || cookieValue == "undefined") {  
				//创建新购物车   
				jxcart = new Array();  
				//创建一个商品对象   
				var good = new Object();  
				good.id = goodsId;  
				good.num = num;
				good.rec_type = rec_type;
				good.is_gift = is_gift;
				//给购物车添加商品   
				jxcart[0] = good;  
			} else {  
				//获得购物车对象   
				jxcart = stringToJSON(cookieValue);  
				var index = jxcart.length;  
				//购物车中的商品   
				var i;  
				for (i = 0; i < index; i++) {  
					var good = jxcart[i];  
					//购物车中是否存在要添加的商品   
					if (good.id == goodsId && good.is_gift==is_gift) {  
						//追加数量并求出总金额
						if(parseInt(num)>1){
							good.num = parseInt(good.num) + parseInt(num);  
						}else{
							good.num = parseInt(good.num) + 1;  
						}
						break;  
					}  
				}  
				//如果循环未终端，则添加新商品到购物车   
				if (i == index) {  
					//创建一个商品对象   
					var good = new Object();  
					good.id = goodsId;  
					good.num = num; 
					good.rec_type = rec_type;
					good.is_gift = is_gift;
					//给购物车添加商品   
					jxcart[index] = good;  
				}  
			} //alert(jsonToString(jxcart));
			setCookie("jxcart", jsonToString(jxcart), 12);
				
			var listcartnum = CarNumber();
			$('#alt_num').html(listcartnum);
			$('#car_num').html(listcartnum); 
			chk_cart_free1(1); //赠品处理
			//弹出
			setTimeout(function(){clearInterval(timer);},500);
			//clearInterval(timer);
			 var sc = $(document).scrollTop()+($(window).height()/2)-110;
			 $(".alt_succ").css({"top": sc});
			 $(".alt_succ").show();
			 timer=setTimeout(function(){
				 if($.browser.version == "6.0" || $.browser.version == "7.0"){
					$(".alt_succ").hide();
				}else{
					$(".alt_succ").fadeOut(600);
				}
				clearInterval(timer);
			},5000)
	
	}
	
}  



// 获得购物车中商品的数量   
function CarNumber() {  
    //debugger;   
    //获得购物车数组   
    var cookieValue = getCookie("jxcart");  
    var jxcart;  
    if (cookieValue == "" || cookieValue == "undefined"){ 
        return 0; 
    }else {  
        jxcart = stringToJSON(cookieValue);  
        return jxcart.length;  
    }  
  
} 