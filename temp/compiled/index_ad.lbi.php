
<div id="slideBox" class="slideBox">

  <div class="hd">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
     <!--<li></li>-->
    </ul>
  </div>

  <div class="bd">
    <ul>
      <li class="li_1" >
        <div class="banner_main_con"> <a href="http://www.baidu.com" target="_blank" class="main_banner_a"></a>
         <!-- <div class="mall_banner_ad">
		   <a href="#" target="_blank"> <img width="190" height="130" src="themes/jiuxian/images/ad1.jpg"><s></s> <i></i> </a> 
		   <a href="#" target="_blank"> <img width="190" height="130" src="themes/jiuxian/images/ad2.jpg"><s></s><i></i> </a> 
		   <a href="#" target="_blank"> <img width="190" height="130" src="themes/jiuxian/images/ad3.jpg"><s></s> <i></i> </a> 
            
		  </div>-->
        </div>
      </li>
      <li class="li_2">
	  <div class="banner_main_con"> <a href="#" target="_blank" class="main_banner_a"></a>
          <!--<div class="mall_banner_ad">
		   <a href="#" target="_blank"> <img width="190" height="130" src="themes/jiuxian/images/ad4.jpg"><s></s> <i></i> </a> 
		   <a href="#" target="_blank"> <img width="190" height="130" src="themes/jiuxian/images/ad5.jpg"><s></s> <i></i> </a> 
		   <a href="#" target="_blank"> <img width="190" height="130" src="themes/jiuxian/images/ad6.jpg"><s></s> <i></i> </a> 
		  </div>-->
        </div>
		</li>
      <li class="li_3" >
	 <div class="banner_main_con"> <a href="#" target="_blank" class="main_banner_a"></a>
          <!--<div class="mall_banner_ad">
		   <a href="#" target="_blank"> <img width="190" height="130" src="themes/jiuxian/images/ad7.jpg"><s></s> <i></i> </a> 
		   <a href="#" target="_blank"> <img width="190" height="130" src="themes/jiuxian/images/ad8.jpg"> <s></s><i></i> </a> 
		   <a href="#" target="_blank"> <img width="190" height="130" src="themes/jiuxian/images/ad9.jpg"><s></s> <i></i> </a> 
		  </div>-->
        </div>
	  </li>
      
      <li class="li_4" >
	 <div class="banner_main_con"> <a href="#" target="_blank" class="main_banner_a"></a>
          <!--<div class="mall_banner_ad">
		   <a href="#" target="_blank"> <img width="190" height="130" src="themes/jiuxian/images/ad10.jpg"><s></s> <i></i> </a> 
		   <a href="#" target="_blank"> <img width="190" height="130" src="themes/jiuxian/images/ad11.jpg"> <s></s><i></i> </a> 
		   <a href="#" target="_blank"> <img width="190" height="130" src="themes/jiuxian/images/ad12.jpg"><s></s> <i></i> </a> 
		  </div>-->
        </div>
	  </li>
      
      <li class="li_5" >
	 <div class="banner_main_con"> <a href="#" target="_blank" class="main_banner_a"></a>
          <!--<div class="mall_banner_ad">
		   <a href="#" target="_blank"> <img width="190" height="130" src="themes/jiuxian/images/ad13.jpg"><s></s> <i></i> </a> 
		   <a href="#" target="_blank"> <img width="190" height="130" src="themes/jiuxian/images/ad14.jpg"> <s></s><i></i> </a> 
		   <a href="#" target="_blank"> <img width="190" height="130" src="themes/jiuxian/images/ad15.jpg"><s></s> <i></i> </a> 
		  </div>-->
        </div>
	  </li>
    
    <li class="li_6" >
	 <div class="banner_main_con"> <a href="#" target="_blank" class="main_banner_a"></a>
          <!--<div class="mall_banner_ad">
		   <a href="#" target="_blank"> <img width="190" height="130" src="themes/jiuxian/images/ad4.jpg"><s></s> <i></i> </a> 
		   <a href="#" target="_blank"> <img width="190" height="130" src="themes/jiuxian/images/ad1.jpg"> <s></s><i></i> </a> 
		   <a href="#" target="_blank"> <img width="190" height="130" src="themes/jiuxian/images/ad5.jpg"><s></s> <i></i> </a> 
		  </div>-->
        </div>
	  </li>
    
    </ul>
  </div>
</div>
<script type="text/javascript">
		
		jQuery(".slideBox").slide({mainCell:".bd ul",titCell:".hd li",autoPlay:true});
		
		
		jQuery(".index_banner").slide({mainCell:".bd ul",autoPlay:true,titCell:".hd li"});
		
		
		jQuery(function(){
			jQuery(".mall_banner_ad a").mouseenter(function(){
				jQuery(".mall_banner_ad a i").stop();
				jQuery(".mall_banner_ad a").not(jQuery(this)).children("i").animate({opacity: "0.48"},500);
				jQuery(this).children("i").animate({opacity: "0"},500);
	
			});
			jQuery(".mall_banner_ad").mouseleave(function(){
				jQuery(".mall_banner_ad a i").stop();
				jQuery(".mall_banner_ad a i").animate({opacity: "0"},500);
			});
		})
		
</script>

		
		
</script>

