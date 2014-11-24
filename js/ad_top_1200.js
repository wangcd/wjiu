$(function(){
	
	setTimeout(function(){
	if($(".top_banbox2 .top_pic img").length == 0){
		$(".top_banbox2").hide();
		$(".top_banbox").show().css({'opacity':1});
		return;
	}
	
	
	var oImgBig=new Image();
	var oImgSmall=new Image();
	var iHeightB=0;
	var iHeightS=0;
	var a=0;
	var b=0;
	var c=0;
	var timer=null;
	oImgBig.src=$('.top_banbox2').find('img').attr('src');
	//alert(oImgBig.src)
	oImgSmall.src=$('.top_banbox').find('img').attr('src');
	//alert(oImgSmall.src)
	
	if (oImgSmall.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数
         
		iHeightS=oImgSmall.height;
		//callback.call(img);
		b=1// 直接返回，不用再处理onload事件
		//alert(iHeightS)
		//c();
		//alert(1)
     }
	 else
	 {
		// alert(2)
		//oImgSmall.onload=function(){
		
			//iHeightS=this.height;
			iHeightS=oImgSmall.height;
			b=1;	
			//alert('load')
			if(a&&b)
			{
				//alert('if')
				$('.top_banbox2').stop().animate({'height':iHeightB},1000,function(){
					$('#hdbanClose').attr('title','收缩');
					$('#hdbanClose').show().attr('class','hdban_close');
					timer=setTimeout(function(){
						
						$('#hdbanClose').text('展开');
						$('.top_banbox2').stop().animate({'height':90},1000,function(){
								
								$('.top_banbox2').hide();
								$('.top_banbox').show().animate({'opacity':1},500);
								c=1;
								$('#hdbanClose').attr('title','展开');
								$('#hdbanClose').attr('class','hdban_close hdban_close2');
								
						});
					},3000)
					
				});	
			}
		//}
	 }
	if (oImgBig.complete) { // 如果图片已经存在于浏览器缓存，直接调用回调函数
         //alert(11)
		iHeightB=oImgBig.height;
		//callback.call(img);
		a=1// 直接返回，不用再处理onload事件
	//alert(iHeightB)
		//c();
     }
	 else
	 {
		// alert(22)
		oImgBig.onload=function(){
		//alert('loadB')
			iHeightB=this.height;
			a=1;	
			
			if(a&&b)
		{
			//alert('ifB')
			$('.top_banbox2').stop().animate({'height':iHeightB},1000,function(){
				$('#hdbanClose').attr('title','收缩');
				$('#hdbanClose').show().attr('class','hdban_close');
				timer=setTimeout(function(){
					
					$('#hdbanClose').text('展开');
					$('.top_banbox2').stop().animate({'height':90},1000,function(){
							
							$('.top_banbox2').hide();
							$('.top_banbox').show().stop().animate({'opacity':1},500);
							c=1;
							$('#hdbanClose').attr('title','展开');
							$('#hdbanClose').attr('class','hdban_close hdban_close2');
							
					});		
					
				},3000)
				
			});	
		}
		}
	 }

		if(a&&b)
		{
			//alert('ifab')
			$('.top_banbox2').stop().animate({'height':iHeightB},1000,function(){
				
				$('#hdbanClose').attr('title','收缩');
				$('#hdbanClose').show().attr('class','hdban_close');
				
				timer=setTimeout(function(){
					
					
					$('.top_banbox2').stop().animate({'height':90},1000,function(){
							
								$('.top_banbox2').hide();
								$('.top_banbox').show().stop().animate({'opacity':1},500);
								c=1;
								$('#hdbanClose').attr('title','展开');
								$('#hdbanClose').attr('class','hdban_close hdban_close2');
					});		
					
				},3000)
				
			});	
		}
	
	
	
	$('.top_banbox2').mousemove(function(){
		
		clearInterval(timer);	
			
	})
	$('.top_banner').mouseleave(function(){
			
		//$('.hdban_close').text('展开');
		timer=setTimeout(function(){
			//alert(1)
			$('.top_banbox2').stop().animate({'height':90},1000,function(){
					$('#hdbanClose').attr('title','展开');
					$('#hdbanClose').attr('class','hdban_close hdban_close2');
					$('.top_banbox2').hide();
					$('.top_banbox').show().stop().animate({'opacity':1},500); 
			})	
			c=1;
		},3000);
		
	}) 
	
	$('#hdbanClose').click(function(){
		
		if(!c)
		{
			$('.top_banbox2').stop().animate({'height':90},1000,function(){
					$('#hdbanClose').attr('title','展开');
					$('#hdbanClose').attr('class','hdban_close hdban_close2');
					$('.top_banbox2').hide();
					$('.top_banbox').show().stop().animate({'opacity':1},500);
					 
		    	 c=1;
			})
		}
		else
		{
			$('#hdbanClose').attr('title','收缩');
			$('#hdbanClose').show().attr('class','hdban_close');
			$('.top_banbox').hide();
			$('.top_banbox').css('opacity','0.2');
			$('.top_banbox2').show();
			$('.top_banbox2').stop().animate({'height':iHeightB},1000);
			c=0;
			
		}
	})	
		
	},1000)
	
})