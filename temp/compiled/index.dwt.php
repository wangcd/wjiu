<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:wb="http://open.weibo.com/wb">
<head>
<meta name="Generator" content="ECSHOP v2.7.3" />
<script src="http://tjs.sjs.sinajs.cn/open/api/js/wb.js?appkey=3334122810" type="text/javascript" charset="utf-8"></script>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<META content=IE=EmulateIE7 http-equiv=X-UA-Compatible>
<meta name="Keywords" content="<?php echo $this->_var['keywords']; ?>" />
<meta name="Description" content="<?php echo $this->_var['description']; ?>" />
<meta property="qc:admins" content="3407733667675121571676375" />
<meta property="wb:webmaster" content="c43f7eb1deb60cb2" />

<title><?php echo $this->_var['page_title']; ?></title>



<link rel="shortcut icon" href="favicon.ico" />
<link rel="icon" href="animated_favicon.gif" type="image/gif" />
<link href="<?php echo $this->_var['ecs_css_path']; ?>" rel="stylesheet" type="text/css" />
<link rel="alternate" type="application/rss+xml" title="RSS|<?php echo $this->_var['page_title']; ?>" href="<?php echo $this->_var['feed_url']; ?>" />

<?php echo $this->smarty_insert_scripts(array('files'=>'common.js,index.js')); ?>
<SCRIPT type=text/javascript>
window.pageConfig={
	compatible:true,
	navId:"home"
};
</SCRIPT>
<script type="text/javascript">
var cur_date = new Date();
var serverTime = cur_date.getTime();
</script>
<script type="text/javascript">
function $id(element) {
  return document.getElementById(element);
}
//切屏--是按钮，_v是内容平台，_h是内容库
function reg(str){
  var bt=$id(str+"_b").getElementsByTagName("h2");
  for(var i=0;i<bt.length;i++){
    bt[i].subj=str;
    bt[i].pai=i;
    bt[i].style.cursor="pointer";
    bt[i].onmousemove=function(){
      $id(this.subj+"_v").innerHTML=$id(this.subj+"_h").getElementsByTagName("blockquote")[this.pai].innerHTML;
      for(var j=0;j<$id(this.subj+"_b").getElementsByTagName("h2").length;j++){
        var _bt=$id(this.subj+"_b").getElementsByTagName("h2")[j];
        var ison=j==this.pai;
        _bt.className=(ison?"":"h2bg");
      }
    }
  }
  $id(str+"_h").className="none";
  $id(str+"_v").innerHTML=$id(str+"_h").getElementsByTagName("blockquote")[0].innerHTML;
}

function changeAtt(t) {
t.lastChild.checked='checked';
for (var i = 0; i<t.parentNode.childNodes.length;i++) {
        if (t.parentNode.childNodes[i].className == 'cattsel') {
            t.parentNode.childNodes[i].className = '';
        }
    }
t.className = "cattsel";
changePrice();
}
</script>







</head>
<body>












<?php echo $this->fetch('library/index_ad_top.lbi'); ?>

<?php echo $this->fetch('library/page_header_index.lbi'); ?>
<?php echo $this->smarty_insert_scripts(array('files'=>'hecha_common.js,ad_top_1200.js')); ?>
<script>
$(function(){
	var datename = new Date();
	var Offset = datename.getTimezoneOffset() * 28800;
	
	setInterval(function(){
      $(".endtime").each(function(){
        var obj = $(this);
        var endTime = new Date(parseInt(obj.attr('value')) * 1000 - Offset) ;
		var show_day =  obj.attr('showday');
        var nowTime = new Date();
        var nMS=endTime.getTime() - nowTime.getTime();
        var myD=Math.floor(nMS/(1000 * 60 * 60 * 24));
		var myH_show=Math.floor(nMS/(1000*60*60) % 24);
        var myH=Math.floor(nMS/(1000*60*60));
        var myM=Math.floor(nMS/(1000*60)) % 60;
        var myS=Math.floor(nMS/1000) % 60;
        var myMS=Math.floor(nMS/100) % 10;
		var myHZero = '';
 		var myMZero = '';
		var mySZero = '';
		if (myH < 10)
		{
			var myHZero = '0';
		}
		if (myM < 10)
		{
			var myMZero = '0';
		}
		if (myS < 10)
		{
			var mySZero = '0';
		}
		
        if(myD >= 0){
			if(show_day == 'show')
			{
				var str = '<span>'+myD+'</span>天<span>'+myH_show+'</span>时<span>'+myM+'</span>分<span>'+myS+'</span>秒';
			}
			else
			{
				var str = '<b class="tcd-h">'+myHZero+myH+'</b>:<b class="tcd-m">'+myMZero+myM+'</b>:<b class="tcd-s">'+mySZero+myS+'</b>';
			}
        }else{
			var str = "已结束！";	
		}
		obj.html(str);
      });
    }, 100);
})
</script>


<?php echo $this->fetch('library/index_ad.lbi'); ?>


 
  
<?php echo $this->fetch('library/brands.lbi'); ?>

<div class="block">
<div class="blank"></div>
 
<div class="proGroup  ">

<div class="ff_1">
<h2 id="ECS_tree1" class="tabFront" >本月优惠活动</h2>
<h2 id="ECS_tree2" class="tabBack">热卖推荐</h2>
<h2 id="ECS_tree3" class="tabBack">会员专区</h2>
<h2 id="ECS_tree4" class="tabBack">积分兑换</h2>
<h2 id="ECS_tree5" class="tabBack" style="border-right:none; display:none;">多买多优惠</h2>
</div>

<div id="ECS_tree1_BODY">

<?php echo $this->fetch('library/recommend_promotion.lbi'); ?>

</div>

<div id="ECS_tree2_BODY" style="display:none;">

<?php echo $this->fetch('library/recommend_hot.lbi'); ?>


</div>
<div id="ECS_tree3_BODY" style="display:none;">

<?php echo $this->fetch('library/recommend_best.lbi'); ?>

</div>
<div id="ECS_tree4_BODY" style="display:none;">

<?php echo $this->fetch('library/recommend_new.lbi'); ?>

 </div>
 
 <div id="ECS_tree5_BODY" style="display:none;">
 <?php echo $this->fetch('library/recommend_best_index.lbi'); ?>
 </div>


</div>
 
<script type="text/javascript">
//<![CDATA[

  var cycleList = ['ECS_tree1','ECS_tree2','ECS_tree3','ECS_tree4','ECS_tree5'];
  var tabFront = 'tabFront';
  var tabBack = 'tabBack';
  function cycleShow(obj)
  {
    var curObj;
    var curBody;
    for (i=0; i < cycleList.length; i++)
    {
      curObj = document.getElementById(cycleList[i]);
      curBody = document.getElementById(cycleList[i] + '_BODY');
      if (obj.id == curObj.id)
      {
        curObj.className = tabFront;
        curBody.style.display = "";
      }
      else
      {
        curObj.className = tabBack;
        curBody.style.display = "none";
      }
    }
  }

  // 添加事件
  for (i=0; i< cycleList.length; i++)
  {
    document.getElementById(cycleList[i]).onmousemove = function()
    {
      cycleShow(this);
    };
  }

//]]>
</script>

<div class="index_r">
 <div class="ad1">
  

 </div>
 <div class="blank"></div>
 
 <div class="notice_news" >
			<div class="hd">
           <ul><li><b>酒品识别</b></li><li><b>新闻资讯</b></li><li><b>最新公告</b></li></ul>
			</div>
			<div class="bd">
				 

				  

				  
<?php $this->assign('articles',$this->_var['articles_26']); ?><?php $this->assign('articles_cat',$this->_var['articles_cat_26']); ?><?php echo $this->fetch('library/cat_articles.lbi'); ?>
<?php $this->assign('ads_id','156'); ?><?php $this->assign('ads_num','1'); ?><?php echo $this->fetch('library/ad_position.lbi'); ?>

			</div>
		</div>
  	<script type="text/javascript">jQuery(".notice_news").slide({titCell:".hd li"});</script>

 
 
 
 
 
 

 
 <div class="clearfix"></div>


  

</div>
 </div>
 
<div class="blank"></div>



<!--

<div class="block clearfix">
  <?php echo $this->fetch('library/recommend_promotion_two.lbi'); ?>
</div>
<div class="blank"></div>
<div class="block clearfix">
  <?php echo $this->fetch('library/recommend_hot_two.lbi'); ?>
</div>
<div class="blank"></div>


<div class="block clearfix">
 <?php echo $this->fetch('library/index_comm.lbi'); ?>
</div>

-->


<div class="blank"></div>
<?php echo $this->fetch('library/page_footer.lbi'); ?>



</body>
</html>
