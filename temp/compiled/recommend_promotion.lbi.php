<?php if ($this->_var['promotion_goods']): ?>
  <ul class="tabFourList" >
<?php $_from = $this->_var['promotion_goods']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'goods');$this->_foreach['promotion_goods'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['promotion_goods']['total'] > 0):
    foreach ($_from AS $this->_var['goods']):
        $this->_foreach['promotion_goods']['iteration']++;
?>
  <?php if ($this->_foreach['promotion_goods']['iteration'] < 11): ?>
 <li id='li_<?php echo $this->_foreach['promotion_goods']['iteration']; ?>'>
 <span class="promotion_pic"></span>
 <a class="pPic"  href="<?php echo $this->_var['goods']['url']; ?>"><img src="<?php echo $this->_var['goods']['thumb']; ?>" alt="<?php echo htmlspecialchars($this->_var['goods']['name']); ?>"  class="err-product" /></a>
 <div class="txt">
            <p class="np_1"><a href="<?php echo $this->_var['goods']['url']; ?>" title="<?php echo htmlspecialchars($this->_var['goods']['name']); ?>"><?php echo $this->_var['goods']['short_style_name']; ?></a></p>
            <p class="np_2"><span> <!--市场价：<font class="market"><?php echo $this->_var['goods']['market_price']; ?></font>-->
           
           <?php if ($this->_var['goods']['promote_price'] != ""): ?>
          活动价：<font class="snPrice"><?php echo $this->_var['goods']['promote_price']; ?></font>
          <?php else: ?>
          商城价：<font class="snPrice"><?php echo $this->_var['goods']['shop_price']; ?></font>
          <?php endif; ?>
           </span>
          </p> 
         </div>
       </li>
 
   
  <?php endif; ?>
<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
 </ul>
<?php endif; ?>

