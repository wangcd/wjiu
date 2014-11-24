<div class="blank"></div>
<?php if ($this->_var['brand_list']): ?>
<div class="block">
<div class="homebrand clearfix">  
 
   <div class="title">
    <span>品牌旗舰店</span>
	<em><a href="brand.php" target="_blank">更多品牌</a></em></div>
     <div class="brandbox">
      
      <div class="brandlist">
       <?php $_from = $this->_var['brand_list']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'brand');$this->_foreach['brand_foreach'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['brand_foreach']['total'] > 0):
    foreach ($_from AS $this->_var['brand']):
        $this->_foreach['brand_foreach']['iteration']++;
?>
    <?php if (( $this->_foreach['brand_foreach']['iteration'] ) % 18 == 0): ?><ul class="brd01"><?php endif; ?>
  
  <li>
    <a href="<?php echo $this->_var['brand']['url']; ?>"><img class="brand_img" src="data/brandlogo/<?php echo $this->_var['brand']['brand_logo']; ?>" alt="<?php echo htmlspecialchars($this->_var['brand']['brand_name']); ?> (<?php echo $this->_var['brand']['goods_num']; ?>)" /></a>
    <span><?php echo htmlspecialchars($this->_var['brand']['brand_name']); ?></span>
 </li>
 
	 <?php if (( $this->_foreach['brand_foreach']['iteration'] ) % 11 == 1): ?></ul class="brd01"><?php endif; ?>
      <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?> 
      </div>
      
     </div>
   
    <div style="clear:both"></div> 
 
</div>
</div> 
<div class="blank"></div>
<?php endif; ?>




