$(function(){
var standTab = $(".indexTab_left").find("a");
	var timer=0;//计时器
	var smallNum = 0;//小导航轮换位置
	var showDiv = $(".indexTab_box .indexTab_right").children("div");//右侧四大块
	var eveModelLi = $(".indexTab_box .indexTab_right").children("div").eq(0).find(".indexTabNav ul li").length;//初始化给小导航赋值
	var contentWidth = $(".indexTab_box .indexTab_right").children("div").width();//获取内容区宽度
	var eveTabWidth = contentWidth/eveModelLi;//每个tab宽度
		$(".indexTabNav li").css('width',eveTabWidth+'px');//初始化设置tab宽度
	var leftIndex = 0;
	//竖Tab切换
	$(".indexTab_left a").mouseover(function(){
		//alert(eveTabWidth)

		smallNum = 0;
	  	clearInterval(timer)
		var tabConNum = $(".indexTab_left").find("a").index($(this));
		showDiv.find("li").unbind("mouseover");
		showDiv = $(".indexTab_box .indexTab_right").children("div").eq(tabConNum);
		eveModelLi = showDiv.find(".indexTabNav ul li").length;
		eveTabWidth = contentWidth/eveModelLi;
		showDiv.find(".indexTabNav ul li").css('width',eveTabWidth+'px');
		timepiece();
		$(".indexTab_left a").removeClass("on");
		$(this).addClass("on");
		$(".indexTab_box .indexTab_right").children("div").eq(tabConNum).show();
		$(".indexTab_box .indexTab_right").children("div").eq(tabConNum).siblings("div").hide();
		bindLi();
		bindPro()
	})
 	bindLi();
 	bindPro()
	//小导航切换
	function bindLi(){
		showDiv.find("li").unbind("mouseover mouseout");//先清除绑定 
		showDiv.find("li").mouseover(function(){
			clearInterval(timer);
			var liConNum = showDiv.find("li").index($(this));
			$(this).addClass("on");
			$(this).siblings("li").removeClass("on");
			$(this).parent().parent().parent().children("div").hide();
			$(this).parent().parent().parent().children("div").eq(liConNum).show();
			$(this).parent().parent().parent().children("div .indexTabNav").show();
			smallNum =liConNum ;
		})
	}
	//经过大图停止计时
	function bindPro()
	{	
		showDiv.children("div").unbind("mouseover mouseout");
		showDiv.children("div").mouseover(function(){
			clearInterval(timer);
			var bigImgNum = showDiv.children("div").index($(this));	
		}).mouseout(function(){
			clearInterval(timer);
			timepiece();
		})	
	}

	//计时器
	function timepiece(){	
		timer = setInterval(function(){
			//alert(eveModelLi)
			if(smallNum ==eveModelLi)
			{
				smallNum = 0;
			}
			showDiv.find(".indexTabNav ul li").eq(smallNum).addClass("on");
			showDiv.find(".indexTabNav ul li").eq(smallNum).siblings("li").removeClass("on");
			showDiv.find("li").parent().parent().parent().children("div").eq(smallNum).show();
			showDiv.find("li").parent().parent().parent().children("div").eq(smallNum).siblings("div").hide();
			showDiv.find("li").parent().parent().parent().children("div .indexTabNav").show();
			smallNum++;
		},2000)
	}
	timepiece(0);

	//广告位隐藏
	$(".left_ad_box").click(function(){
		$(this).parents("#lefa_box").remove();
	})
	$(".right_ad_box").click(function(){
		$(this).parents("#right_box").remove();
	})	
	//右侧小广告位响应效果
  	showSmall();

  	if($(window).width()<1300)
	  {
	  	hideSmall()
	  }else
	  {
	  	showSmall()
	  }
	  if($(window).width()<1367)
		{
			$("#right_box").css({'right':"1px"});
			$("#lefa_box").css({'left':"1px"});
		}else if($(window).width()>1389)
		{
			$("#right_box").css({'right':"10px"});
			$("#lefa_box").css({'left':"11px"});			
		}
	$(window).bind("resize",function(){
		if($(window).width()<1367)
		{
			$("#right_box").css({'right':"1px"});
			$("#lefa_box").css({'left':"1px"});
		}else if($(window).width()>1389)
		{
			$("#right_box").css({'right':"10px"});
			$("#lefa_box").css({'left':"11px"});			
		}
		  if($(window).width()<1300)
		  {
		  	hideSmall()
		  }else
		  {
		  	showSmall()
		  }
	})

	function showSmall()
	  {
	  	$("#lefa_box").show();
	  	$("#right_box").show();
	  }

	function hideSmall()
	  {
	  	$("#lefa_box").hide();
	  	$("#right_box").hide();
	  }	  
//两侧浮动
	$(window).scroll(on_scroll);
	function on_scroll(){
		/*if($(document).scrollTop() >400)
		{
			$(".qc_code_box").show();
		}else
		{
			$(".qc_code_box").hide();
		};*/
		if($(document).scrollTop() >167)
		{
			$(".right_ad").attr('class','right_ad_fixed');
			$(".left_ad").attr('class','left_ad_fixed');	
		}else
		{
			$("#lefa_box").attr('class','left_ad');
			$("#right_box").attr('class','right_ad');
		}		
	}
})