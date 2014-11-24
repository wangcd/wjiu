<!--[if lte IE 6]>  
<style type="text/css">  
* html #ftop{position:absolute; bottom:230px; top:expression(eval(document.documentElement.scrollTop+document.documentElement.clientHeight-this.offsetHeight-(parseInt(this.currentStyle.marginTop,0)||0)-(parseInt(this.currentStyle.marginBottom,0)||230)));}
body {background:url(about:blank) fixed;}
</style>  
<![endif]-->

<?php
function get_brands1($cat = 0, $app = 'brand')
{
    $children = ($cat > 0) ? ' AND ' . get_children($cat) : '';

    $sql = "SELECT b.brand_id, b.brand_name, b.brand_logo, b.brand_desc, COUNT(*) AS goods_num, IF(b.brand_logo > '', '1', '0') AS tag ".
            "FROM " . $GLOBALS['ecs']->table('brand') . "AS b, ".
                $GLOBALS['ecs']->table('goods') . " AS g ".
            "WHERE g.brand_id = b.brand_id $children AND is_show = 1 " .
            " AND g.is_on_sale = 1 AND g.is_alone_sale = 1 AND g.is_delete = 0 ".
            "GROUP BY b.brand_id HAVING goods_num > 0 ORDER BY tag DESC, b.sort_order ASC";
    $row = $GLOBALS['db']->getAll($sql);

    foreach ($row AS $key => $val)
    {
        $row[$key]['url'] = build_uri($app, array('cid' => $cat, 'bid' => $val['brand_id']), $val['brand_name']);
        $row[$key]['brand_desc'] = htmlspecialchars($val['brand_desc'],ENT_QUOTES);
    }

    return $row;
}
//
function get_promotion_info1($goods_id = '')
{
    $snatch = array();
    $group = array();
    $auction = array();
    $package = array();
    $favourable = array();

    $gmtime = gmtime();
    $sql = 'SELECT act_id, act_name, act_type, start_time, end_time FROM ' . $GLOBALS['ecs']->table('goods_activity') . " WHERE is_finished=0 AND start_time <= '$gmtime' AND end_time >= '$gmtime'";
    if(!empty($goods_id))
    {
        $sql .= " AND goods_id = '$goods_id'";
    }
    $res = $GLOBALS['db']->getAll($sql);
    foreach ($res as $data)
    {
        switch ($data['act_type'])
        {
            case GAT_SNATCH: //夺宝奇兵
                $snatch[$data['act_id']]['act_name'] = $data['act_name'];
                $snatch[$data['act_id']]['url'] = build_uri('snatch', array('sid' => $data['act_id']));
                $snatch[$data['act_id']]['time'] = sprintf($GLOBALS['_LANG']['promotion_time'], local_date('Y-m-d', $data['start_time']), local_date('Y-m-d', $data['end_time']));
                $snatch[$data['act_id']]['sort'] = $data['start_time'];
                $snatch[$data['act_id']]['type'] = 'snatch';
                break;

            case GAT_GROUP_BUY: //团购
                $group[$data['act_id']]['act_name'] = $data['act_name'];
                $group[$data['act_id']]['url'] = build_uri('group_buy', array('gbid' => $data['act_id']));
                $group[$data['act_id']]['time'] = sprintf($GLOBALS['_LANG']['promotion_time'], local_date('Y-m-d', $data['start_time']), local_date('Y-m-d', $data['end_time']));
                $group[$data['act_id']]['sort'] = $data['start_time'];
                $group[$data['act_id']]['type'] = 'group_buy';
                break;

            case GAT_AUCTION: //拍卖
                $auction[$data['act_id']]['act_name'] = $data['act_name'];
                $auction[$data['act_id']]['url'] = build_uri('auction', array('auid' => $data['act_id']));
                $auction[$data['act_id']]['time'] = sprintf($GLOBALS['_LANG']['promotion_time'], local_date('Y-m-d', $data['start_time']), local_date('Y-m-d', $data['end_time']));
                $auction[$data['act_id']]['sort'] = $data['start_time'];
                $auction[$data['act_id']]['type'] = 'auction';
                break;

            case GAT_PACKAGE: //礼包
                $package[$data['act_id']]['act_name'] = $data['act_name'];
                $package[$data['act_id']]['url'] = 'package.php#' . $data['act_id'];
                $package[$data['act_id']]['time'] = sprintf($GLOBALS['_LANG']['promotion_time'], local_date('Y-m-d', $data['start_time']), local_date('Y-m-d', $data['end_time']));
                $package[$data['act_id']]['sort'] = $data['start_time'];
                $package[$data['act_id']]['type'] = 'package';
                break;
        }
    }

    $user_rank = ',' . $_SESSION['user_rank'] . ',';
    $favourable = array();
    $sql = 'SELECT act_id, act_range, act_range_ext, act_name, start_time, end_time FROM ' . $GLOBALS['ecs']->table('favourable_activity') . " WHERE start_time <= '$gmtime' AND end_time >= '$gmtime'";
    if(!empty($goods_id))
    {
        $sql .= " AND CONCAT(',', user_rank, ',') LIKE '%" . $user_rank . "%'";
    }
    $res = $GLOBALS['db']->getAll($sql);

    if(empty($goods_id))
    {
        foreach ($res as $rows)
        {
            $favourable[$rows['act_id']]['act_name'] = $rows['act_name'];
            $favourable[$rows['act_id']]['url'] = 'activity.php';
            $favourable[$rows['act_id']]['time'] = sprintf($GLOBALS['_LANG']['promotion_time'], local_date('Y-m-d', $rows['start_time']), local_date('Y-m-d', $rows['end_time']));
            $favourable[$rows['act_id']]['sort'] = $rows['start_time'];
            $favourable[$rows['act_id']]['type'] = 'favourable';
        }
    }
    else
    {
        $sql = "SELECT cat_id, brand_id FROM " . $GLOBALS['ecs']->table('goods') .
           "WHERE goods_id = '$goods_id'";
        $row = $GLOBALS['db']->getRow($sql);
        $category_id = $row['cat_id'];
        $brand_id = $row['brand_id'];

        foreach ($res as $rows)
        {
            if ($rows['act_range'] == FAR_ALL)
            {
                $favourable[$rows['act_id']]['act_name'] = $rows['act_name'];
                $favourable[$rows['act_id']]['url'] = 'activity.php';
                $favourable[$rows['act_id']]['time'] = sprintf($GLOBALS['_LANG']['promotion_time'], local_date('Y-m-d', $rows['start_time']), local_date('Y-m-d', $rows['end_time']));
                $favourable[$rows['act_id']]['sort'] = $rows['start_time'];
                $favourable[$rows['act_id']]['type'] = 'favourable';
            }
            elseif ($rows['act_range'] == FAR_CATEGORY)
            {
                /* 找出分类id的子分类id */
                $id_list = array();
                $raw_id_list = explode(',', $rows['act_range_ext']);
                foreach ($raw_id_list as $id)
                {
                    $id_list = array_merge($id_list, array_keys(cat_list($id, 0, false)));
                }
                $ids = join(',', array_unique($id_list));

                if (strpos(',' . $ids . ',', ',' . $category_id . ',') !== false)
                {
                    $favourable[$rows['act_id']]['act_name'] = $rows['act_name'];
                    $favourable[$rows['act_id']]['url'] = 'activity.php';
                    $favourable[$rows['act_id']]['time'] = sprintf($GLOBALS['_LANG']['promotion_time'], local_date('Y-m-d', $rows['start_time']), local_date('Y-m-d', $rows['end_time']));
                    $favourable[$rows['act_id']]['sort'] = $rows['start_time'];
                    $favourable[$rows['act_id']]['type'] = 'favourable';
                }
            }
            elseif ($rows['act_range'] == FAR_BRAND)
            {
                if (strpos(',' . $rows['act_range_ext'] . ',', ',' . $brand_id . ',') !== false)
                {
                    $favourable[$rows['act_id']]['act_name'] = $rows['act_name'];
                    $favourable[$rows['act_id']]['url'] = 'activity.php';
                    $favourable[$rows['act_id']]['time'] = sprintf($GLOBALS['_LANG']['promotion_time'], local_date('Y-m-d', $rows['start_time']), local_date('Y-m-d', $rows['end_time']));
                    $favourable[$rows['act_id']]['sort'] = $rows['start_time'];
                    $favourable[$rows['act_id']]['type'] = 'favourable';
                }
            }
            elseif ($rows['act_range'] == FAR_GOODS)
            {
                if (strpos(',' . $rows['act_range_ext'] . ',', ',' . $goods_id . ',') !== false)
                {
                    $favourable[$rows['act_id']]['act_name'] = $rows['act_name'];
                    $favourable[$rows['act_id']]['url'] = 'activity.php';
                    $favourable[$rows['act_id']]['time'] = sprintf($GLOBALS['_LANG']['promotion_time'], local_date('Y-m-d', $rows['start_time']), local_date('Y-m-d', $rows['end_time']));
                    $favourable[$rows['act_id']]['sort'] = $rows['start_time'];
                    $favourable[$rows['act_id']]['type'] = 'favourable';
                }
            }
        }
    }

    $sort_time = array();
    $arr = array_merge($snatch, $group, $auction, $package, $favourable);
    foreach($arr as $key => $value)
    {
        $sort_time[] = $value['sort'];
    }
    array_multisort($sort_time, SORT_NUMERIC, SORT_DESC, $arr);

    return $arr;
}
$this->assign('promotion_info1', get_promotion_info1());
?>




<?php
 include_once('themes/' . $GLOBALS['_CFG']['template'].'/init.php');
?>
<?php echo $this->smarty_insert_scripts(array('files'=>'jquery-1.8.2.min.js,jquery.json.js')); ?>
<?php echo $this->smarty_insert_scripts(array('files'=>'transport.js,utils.js,jquery.SuperSlide.js')); ?>
<?php echo $this->smarty_insert_scripts(array('files'=>'public.js')); ?>

<div class="topNav">

<div class="block">
 <font id="ECS_MEMBERZONE"><?php 
$k = array (
  'name' => 'member_info',
);
echo $this->_echash . $k['name'] . '|' . serialize($k) . $this->_echash;
?> </font>
</div>

</div>







</div>

<div class="headBg">

<div class="block clearfix" style="position:relative; z-index:99999999; ">

 <a class="nlogo"  href="index.php" name="top" style="width:315px;"><img src="themes/jiuxian/images/logo.gif" ></a>

 <a class="index1000_nlogo"  href="index.php" name="top"><img src="themes/jiuxian/images/logox.jpg"></a>
 
<div id="search" >   
  <form id="searchForm" name="searchForm" method="get" action="search.php" onSubmit="return checkSearchForm()"  >
   
  <div class="B_input_box">
   <input name="keywords" type="text" id="keyword" value="" onclick="javascript:this.value=''" class="B_input"/>
  <input type="submit" value="搜索" class="sy_btn">
   </div>
   </form>
   <p class="keys  ">
   <script type="text/javascript">
    
    <!--
    function checkSearchForm()
    {
        if(document.getElementById('keyword').value)
        {
            return true;
        }
        else
        {
           alert("<?php echo $this->_var['lang']['no_keywords']; ?>");
            return false;
        }
    }
    -->
    
	
    </script>
    <?php if ($this->_var['searchkeywords']): ?>
 
   <?php $_from = $this->_var['searchkeywords']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'val');$this->_foreach['keywords'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['keywords']['total'] > 0):
    foreach ($_from AS $this->_var['val']):
        $this->_foreach['keywords']['iteration']++;
?>
   <a href="search.php?keywords=<?php echo urlencode($this->_var['val']); ?>"><?php echo $this->_var['val']; ?></a>
   <?php if (! ($this->_foreach['keywords']['iteration'] == $this->_foreach['keywords']['total'])): ?>|<?php endif; ?>
   <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
   <?php endif; ?>
  </p>
</div> 

<!--<div class="nms">
<a target="_blank" href="#" title="满100免运费">满100免运费</a>
<a target="_blank" href="#" title="2000城市货到付款" class="nms_city">2000城市货到付款</a>
<a target="_blank" href="#" title="厂家直销正品保证">厂家直销正品保证</a>
</div>-->
<!--
<div class="index1000_nms">
<a target="_blank" href="#" title="满100免运费"><img src="themes/jiuxian/images/mfy.jpg" width="80" height="26"></a>
<a target="_blank" href="#" title="2000城市货到付款"><img src="themes/jiuxian/images/huoda.jpg" width="79" height="26"></a>
<a target="_blank" href="#" title="厂家直销正品保证"><img src="themes/jiuxian/images/zpin.jpg" width="68" height="26"></a>
</div>-->

</div>
</div>

<div   class="Nav clearfix" >
 <div class="block">
<div id="mainNav" class="clearfix">

<div class="category_all2"  >
<!--<img src="themes/jiuxian/images/nnav_libg.jpg">-->
<div class="block">
 <!--<div class="menuWrap" style="display:block;">
<ul class="childMenuList searchLink" id="cate">-------->
<?php $_from = $this->_var['categories']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'cat');$this->_foreach['cat'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['cat']['total'] > 0):
    foreach ($_from AS $this->_var['cat']):
        $this->_foreach['cat']['iteration']++;
?>
   <?php if ($this->_foreach['cat']['iteration'] < 7): ?>
<!----<li  class="menuItem "  onmouseover="this.className='menuItem menuItem_over'" onmouseout="this.className='menuItem'" id="li_<?php echo $this->_foreach['cat']['iteration']; ?>" >
<h3  class="h3"  ><a href="<?php echo $this->_var['cat']['url']; ?>" ><?php echo htmlspecialchars($this->_var['cat']['name']); ?></a> <span>></span></h3>                       
<ul class="subList clearfix">----------->
<?php $_from = $this->_var['cat']['cat_id']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'child');$this->_foreach['child'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['child']['total'] > 0):
    foreach ($_from AS $this->_var['child']):
        $this->_foreach['child']['iteration']++;
?>
  <?php if ($this->_foreach['child']['iteration'] < 20): ?>
<!----<li><a href="<?php echo $this->_var['child']['url']; ?>"><?php echo htmlspecialchars($this->_var['child']['name']); ?></a></li>-------->
  <?php endif; ?>
<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
<!--</ul>

</li>-->

 <?php endif; ?>	
<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?> 



<!--</ul>

</div>-->




</div>






<div class=" my_left_category my_left_category2" style="background:#67A71F; position:absolute; top:37px; left:0; z-index:999999999;">


    <?php $_from = $this->_var['categories']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'cat');$this->_foreach['cat1'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['cat1']['total'] > 0):
    foreach ($_from AS $this->_var['cat']):
        $this->_foreach['cat1']['iteration']++;
?>
      <?php if ($this->_foreach['cat1']['iteration'] < 10): ?>
     <dl>
     <dt onmouseover="this.className='category_over'" onmouseout="this.className=''">
     <a class="a1" href="<?php echo $this->_var['cat']['url']; ?>" ><?php echo htmlspecialchars($this->_var['cat']['name']); ?></a>
     
     
     <div class="category_over_box">
     <ul class="clearfix">
       <div style="float:left; width:400px; padding:0 10px; overflow:hidden">
     <?php $_from = $this->_var['cat']['cat_id']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'child');$this->_foreach['child'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['child']['total'] > 0):
    foreach ($_from AS $this->_var['child']):
        $this->_foreach['child']['iteration']++;
?>
     <li <?php if (($this->_foreach['child']['iteration'] == $this->_foreach['child']['total'])): ?> style="border-bottom:none;" <?php endif; ?>>
     
     <div style="clear:both"></div>
     
     
     <div class="f_l">
     <a class="over_2" href="<?php echo $this->_var['child']['url']; ?>"><?php echo htmlspecialchars($this->_var['child']['name']); ?></a>  
     </div>
     <div class="f_r">
     <?php $_from = $this->_var['child']['cat_id']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'childer');if (count($_from)):
    foreach ($_from AS $this->_var['childer']):
?>
     
     | <a class="over_3" href="<?php echo $this->_var['childer']['url']; ?>"><?php echo htmlspecialchars($this->_var['childer']['name']); ?></a>
     
     <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
      </div>
      
       <div style="clear:both"></div>
     </li>  
     <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
      </div>  
      
      <div class=" hotBrand " >
<div class="tit">推荐品牌 </div>
<div class="  clearfix1">
<?php $_from = get_brands1($GLOBALS[smarty]->_var[cat][id]); if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'bchilder');if (count($_from)):
    foreach ($_from AS $this->_var['bchilder']):
?>
<a href="<?php echo $this->_var['bchilder']['url']; ?>"><?php echo htmlspecialchars($this->_var['bchilder']['brand_name']); ?></a>
<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
</div>
</div>
      
     <div class="csActive">
<div class="tit">促销活动  </div>
<div class="clearfix clearfix2" style="padding:5px;">
<?php $_from = $this->_var['promotion_info1']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('key', 'item1');$this->_foreach['item1'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['item1']['total'] > 0):
    foreach ($_from AS $this->_var['key'] => $this->_var['item1']):
        $this->_foreach['item1']['iteration']++;
?>

	
<div>
    <a href="<?php echo $this->_var['item1']['url']; ?>" title="<?php echo $this->_var['lang'][$this->_var['item1']['type']]; ?> <?php echo $this->_var['item1']['act_name']; ?><?php echo $this->_var['item1']['time']; ?>" ><?php echo $this->_var['item1']['act_name']; ?></a> 
    
    </div>

    <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>  
</div>
</div>
     
     </ul>
     </div>
     
     
     
    
     
     
     </dt>
      
    </dl>
     <?php endif; ?>
    <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?> 


</div>



</div>

<div class="mainNav_r">
 
 <!-- <a class="aa aa_0"  href="index.php"<?php if ($this->_var['navigator_list']['config']['index'] == 1): ?> class="cur"<?php endif; ?>><?php echo $this->_var['lang']['home']; ?><span></span></a>-->
 
  <a class="aa aa_0" href="index.php"  title="<?php echo $this->_var['lang']['home']; ?>" <?php if ($this->_var['navigator_list']['config']['index'] == 1): ?>   <?php endif; ?> style="background:#910000;"><?php echo $this->_var['lang']['home']; ?></a>
 
  
  <?php $_from = $this->_var['navigator_list']['middle']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'nav');$this->_foreach['nav_middle_list'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['nav_middle_list']['total'] > 0):
    foreach ($_from AS $this->_var['nav']):
        $this->_foreach['nav_middle_list']['iteration']++;
?>
 
<a  <?php if ($this->_var['nav']['opennew'] == 1): ?>target="_blank" <?php endif; ?> id='aa_<?php echo $this->_foreach['nav_middle_list']['iteration']; ?>'    class="aa" href="<?php echo $this->_var['nav']['url']; ?>" title="<?php echo $this->_var['nav']['name']; ?>" >
<?php echo $this->_var['nav']['name']; ?> <span class="qiang">&nbsp;</span></a>
 
 <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
 
 
 

 
 </div>
  
 
	<div class=" f_r buy_car_bg_box" >  
    
<div class="buy_car_bg " id="ECS_CARTINFO">
 <?php 
$k = array (
  'name' => 'cart_info',
);
echo $this->_echash . $k['name'] . '|' . serialize($k) . $this->_echash;
?> 
</div>
</div>	
 </div>
 </div>
</div>




<div id="popAdBox">

<div class="div1_con" style="display:block;">
 <a class="prev" href="javascript:void(0)"></a>
 <a class="next" href="javascript:void(0)"></a>

<div class="bd">
 <ul style="left: 0px;">
  <li><?php 
$k = array (
  'name' => 'ads',
  'id' => '150',
  'num' => '1',
);
echo $this->_echash . $k['name'] . '|' . serialize($k) . $this->_echash;
?></li>
  <li><?php 
$k = array (
  'name' => 'ads',
  'id' => '151',
  'num' => '1',
);
echo $this->_echash . $k['name'] . '|' . serialize($k) . $this->_echash;
?></li>
  <li><?php 
$k = array (
  'name' => 'ads',
  'id' => '152',
  'num' => '1',
);
echo $this->_echash . $k['name'] . '|' . serialize($k) . $this->_echash;
?></li>
 </ul>
</div>

</div>

<span class="ce" style="top: 59px; width: 18px; height: 52px;"></span>
   
</div>

<script type="text/javascript">
		jQuery(".div1_con").slide({mainCell:".bd ul",autoPage:true,autoPlay:true,effect:"left"});
</script>


<script>

 
$(function(){
	$('#popAdBox').show();
	var c=0;
	$('#popAdBox .ce').click(function(){
		if(!c)
		{
			
			$('#popAdBox').stop().animate({'width':'46px'},300,function(){
				//$('.adLink').show()
				$(this).css({'background':'url(http://img01.jiuxian.com/img1/nsy/popAdBoxClose.png) no-repeat','bottom':'-16px'})	
				$(this).find('.ce').css({'top':'0','width':'46px','height':'120px'});
				$('.div1_con',this).css('display','none');
			});
			
			c=1;
		}
		else
		{
			//$('.adLink').hide()
			$('#popAdBox').css({'background':'url(http://127.0.0.1/jxwine2013273/themes/jiuxian/images/popAdBoxOpen3.png) no-repeat','bottom':'10px'});
			$('#popAdBox').find('.ce').css({'top':'59px','width':'18px','height':'52px'});
			$('#popAdBox .div1_con').css('display','block');
			
			$('#popAdBox').stop().animate({'width':'235px'});
			c=0
		}
	})
	

})
</script>


