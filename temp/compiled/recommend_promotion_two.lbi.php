<?php echo $this->smarty_insert_scripts(array('files'=>'jxwine_index.js')); ?>
<?php if ($this->_var['promotion_goods']): ?>
<div class="prom_box block clearfix">
<div class="tit">
<div class="f_l">&nbsp;</div>
</div>

<div class="ad f_l">
 <div id="slideBox" class="pro_ad">
			<div class="hd">
				<ul><li></li><li></li><li></li></ul>
			</div>
			<div class="bd">
				<ul>
					<li><?php 
$k = array (
  'name' => 'ads',
  'id' => '103',
  'num' => '1',
);
echo $this->_echash . $k['name'] . '|' . serialize($k) . $this->_echash;
?></li>
					<li><?php 
$k = array (
  'name' => 'ads',
  'id' => '104',
  'num' => '1',
);
echo $this->_echash . $k['name'] . '|' . serialize($k) . $this->_echash;
?></li>
					<li><?php 
$k = array (
  'name' => 'ads',
  'id' => '105',
  'num' => '1',
);
echo $this->_echash . $k['name'] . '|' . serialize($k) . $this->_echash;
?></li>
				</ul>
			</div>
		</div>

		<script type="text/javascript">
		jQuery(".pro_ad").slide({mainCell:".bd ul",titCell:".hd li",autoPlay:true});
		</script>
        
       
      <div id="slideBox" class="pro_ad">
			<div class="hd">
				<ul><li></li><li></li><li></li></ul>
			</div>
			<div class="bd">
				<ul>
					<li><?php 
$k = array (
  'name' => 'ads',
  'id' => '106',
  'num' => '1',
);
echo $this->_echash . $k['name'] . '|' . serialize($k) . $this->_echash;
?></li>
					<li><?php 
$k = array (
  'name' => 'ads',
  'id' => '107',
  'num' => '1',
);
echo $this->_echash . $k['name'] . '|' . serialize($k) . $this->_echash;
?></li>
					<li><?php 
$k = array (
  'name' => 'ads',
  'id' => '108',
  'num' => '1',
);
echo $this->_echash . $k['name'] . '|' . serialize($k) . $this->_echash;
?></li>
				</ul>
			</div>
		</div>

		<script type="text/javascript">
		jQuery(".pro_ad").slide({mainCell:".bd ul",titCell:".hd li",autoPlay:true});
		</script>
           
        
        
        
</div>

<ul class="goods_list f_r">

<?php $_from = $this->_var['promotion_goods']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'goods_0_31663800_1418891256');$this->_foreach['no'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['no']['total'] > 0):
    foreach ($_from AS $this->_var['goods_0_31663800_1418891256']):
        $this->_foreach['no']['iteration']++;
?>
  <?php if ($this->_foreach['no']['iteration'] > 10): ?>
<li class="li<?php echo $this->_foreach['no']['iteration']; ?>">
 <span class="promotion_pic">&nbsp;</span>
   <a href="<?php echo $this->_var['goods_0_31663800_1418891256']['url']; ?>"><img  src="<?php echo $this->_var['goods_0_31663800_1418891256']['thumb']; ?>" alt="<?php echo htmlspecialchars($this->_var['goods_0_31663800_1418891256']['name']); ?>" width="160" height="160"  /></a>
     <div class="tabSmallTitle">
        <p><a href="<?php echo $this->_var['goods_0_31663800_1418891256']['url']; ?>" title="<?php echo htmlspecialchars($this->_var['goods_0_31663800_1418891256']['name']); ?>"><?php echo $this->_var['goods_0_31663800_1418891256']['short_style_name']; ?><font color="#FF0000"><?php echo sub_str($this->_var['goods_0_31663800_1418891256']['brief'],8); ?></font></a></p>
        <p> 
         <font>市场价:</font><span class="market"><?php echo $this->_var['goods_0_31663800_1418891256']['market_price']; ?></span>
         <font>活动价:</font><strong><?php echo $this->_var['goods_0_31663800_1418891256']['promote_price']; ?></strong>
        </p>
            
           <div class="time">
            <span>剩余时间:</span>
           <span class="endtime" value="<?php echo $this->_var['goods_0_31663800_1418891256']['e_time']; ?>" showday="show"></span></div> 
         
     </div>
</li>
 <?php endif; ?>
<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
</ul>

</div>

<?php endif; ?>

