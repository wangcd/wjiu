$(function(){
	//微信号码
	$(window).scroll(on_scroll);
	function on_scroll(){
		if($(document).scrollTop() >400)
		{
			$(".qc_code_box").show();
		}else
		{
			$(".qc_code_box").hide();
		};
		if($(document).scrollTop() >568)
		{
			$(".right_ad").attr('class','right_ad_fixed');
			$(".left_ad").attr('class','left_ad_fixed');	
		}else
		{
			$("#lefa_box").attr('class','left_ad');
			$("#right_box").attr('class','right_ad');
		}		
	}
	//右侧小广告位响应效果
  	showSmall();

	$(window).bind("resize",function(){
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
	  //已售罄产品展开关闭
	 
	  $(".open_product").click(function(){
	  	 var switchOp = $(".open_product").text();
	  	//alert(switchOp)
	  	if(switchOp == "展开")
	  	{
	  		$(".open_product").text("合起");
	  		$(".take_list2").removeClass("no_product_buy")

	  	}else if(switchOp == "合起")
	  	{
	  		$(".open_product").text("展开");
	  		$(".take_list2").addClass("no_product_buy")
	  	}
	  })
	//初始化左右箭头隐藏
	$(".happy_cyc").find(".btnL").css('background-position','0 -50px');
	$(".happy_cyc").find(".btnR").css('background-position','-52px -50px');
	$(".happy_cyc").mouseover(function(){
		$(".happy_cyc").find(".btnL").show();
		$(".happy_cyc").find(".btnR").show();
	}).mouseout(function(){
		$(".happy_cyc").find(".btnL").hide();
		$(".happy_cyc").find(".btnR").hide();
	});
	//鼠标进入更换背景图
	$(".happy_cyc").find(".btnL").mouseover(function(){
		$(this).css('background-position','0px 0px');
	}).mouseout(function(){
		$(this).css('background-position','0 -50px');
	})
	$(".happy_cyc").find(".btnR").mouseover(function(){
		$(this).css('background-position','-51px 0px');
	}).mouseout(function(){
		$(this).css('background-position','-51px -50px');
	})
	//广告位隐藏
	$(".left_ad_box").click(function(){
		$(this).parents("#lefa_box").hide();
	})
	$(".right_ad_box").click(function(){
		$(this).parents("#right_box").hide();
	})	  
})