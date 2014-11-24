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




<div class="topNav">

	<div class="block">
		<!---<a class=" home_cell" href="javascript:void(0);" onclick="AddFavorite('我的网站',location.href)">收藏本站</a>--->
	<font id="ECS_MEMBERZONE"><?php 
$k = array (
  'name' => 'member_info',
);
echo $this->_echash . $k['name'] . '|' . serialize($k) . $this->_echash;
?> </font></div>
</div>

<div class="headBg">

<div class="block clearfix" style="position:relative; z-index:99999999; ">
 <div class="nlogo"  >
 <a  href="index.php" name="top"><img src="themes/jiuxian/images/logo.gif"></a></div>
  <a class="index1000_nlogo"  href="index.php" name="top"><img src="themes/jiuxian/images/logox.jpg"></a>

<div class="cat_search clearfix">  
 <div class="seo_box"> 
  <div class="seo_l"></div>
  <form id="searchForm" name="searchForm" method="get" action="search.php" onSubmit="return checkSearchForm()"  >
 
  
   <div class="B_input_box">
   <input name="keywords" type="text" id="keyword" value="" onclick="javascript:this.value=''" class="B_input"/>
  <input type="submit" value="搜索" class="sy_btn">
   </div>
 
   </form>
    </div>
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









<!--<div class="cat_nms" >
<a href="#" target="_blank"><img src="themes/jiuxian/images/mfy1.jpg" width="100" height="31"></a>
<a href="#" target="_blank"><img src="themes/jiuxian/images/hdfk1.jpg" width="110" height="31"></a>
<a href="#" target="_blank"><img src="themes/jiuxian/images/zpbz1.jpg" width="90" height="31"></a>
</div>-->

</div>
</div>
<div class="blank"></div>

<div   class="Nav clearfix" >
 <div class="block">
<div id="mainNav" class="clearfix">

  <div class=" category_all2"  onmouseover="this.className='category_all2 category_all2_on'" onmouseout="this.className='category_all2'">
<img src="themes/jiuxian/images/nnav_libg.jpg">

<div class="menuWrap" >
<ul class="childMenuList searchLink" id="cate">
<?php $_from = $this->_var['categories']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'cat');$this->_foreach['cat'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['cat']['total'] > 0):
    foreach ($_from AS $this->_var['cat']):
        $this->_foreach['cat']['iteration']++;
?>
   <?php if ($this->_foreach['cat']['iteration'] < 7): ?>
<li  class="menuItem "  onmouseover="this.className='menuItem menuItem_over'" onmouseout="this.className='menuItem'" id="li_<?php echo $this->_foreach['cat']['iteration']; ?>" >
<h3  class="h3"  ><a href="<?php echo $this->_var['cat']['url']; ?>" ><?php echo htmlspecialchars($this->_var['cat']['name']); ?></a> <span>></span></h3>
            
            
<ul class="subList">
<?php $_from = $this->_var['cat']['cat_id']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'child');$this->_foreach['child'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['child']['total'] > 0):
    foreach ($_from AS $this->_var['child']):
        $this->_foreach['child']['iteration']++;
?>
  <?php if ($this->_foreach['child']['iteration'] < 20): ?>
<li><a href="<?php echo $this->_var['child']['url']; ?>"><?php echo htmlspecialchars($this->_var['child']['name']); ?></a></li>
  <?php endif; ?>
<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
</ul>

</li>

 <?php endif; ?>	
<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?> 



</ul>

</div>



</div>

<div class="mainNav_r">
 

 
  <a class="aa aa_1" href="index.php"  title="<?php echo $this->_var['lang']['home']; ?>" <?php if ($this->_var['navigator_list']['config']['index'] == 1): ?> style="background:#9a3333;"   <?php endif; ?>><?php echo $this->_var['lang']['home']; ?></a>
 
  
  <?php $_from = $this->_var['navigator_list']['middle']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'nav');$this->_foreach['nav_middle_list'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['nav_middle_list']['total'] > 0):
    foreach ($_from AS $this->_var['nav']):
        $this->_foreach['nav_middle_list']['iteration']++;
?>
 
<a <?php if ($this->_var['nav']['opennew'] == 1): ?> target="_blank" <?php endif; ?> <?php if ($this->_var['nav']['active'] == 1): ?> style="background:#9a3333;" <?php endif; ?>  id='aa_<?php echo $this->_foreach['nav_middle_list']['iteration']; ?>' class="aa" href="<?php echo $this->_var['nav']['url']; ?>" title="<?php echo $this->_var['nav']['name']; ?>" >
<?php echo $this->_var['nav']['name']; ?> <span class="qiang">&nbsp;</span>
</a>
 
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


