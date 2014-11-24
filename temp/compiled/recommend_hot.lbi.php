 
  
  <?php if ($this->_var['hot_goods']): ?>
  
 <ul class="tabFourList " >
  
  <?php $_from = $this->_var['hot_goods']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'goods_0_13596100_1416817116');$this->_foreach['hot_goods'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['hot_goods']['total'] > 0):
    foreach ($_from AS $this->_var['goods_0_13596100_1416817116']):
        $this->_foreach['hot_goods']['iteration']++;
?>
  
 <li id='li_<?php echo $this->_foreach['hot_goods']['iteration']; ?>'>
 <span class="hot_pic"></span>
 <a class="pPic"  href="<?php echo $this->_var['goods_0_13596100_1416817116']['url']; ?>"><img src="<?php echo $this->_var['goods_0_13596100_1416817116']['thumb']; ?>" alt="<?php echo htmlspecialchars($this->_var['goods_0_13596100_1416817116']['name']); ?>"  class="err-product" /></a>
 <div class="txt">
            <p class="np_1"><a href="<?php echo $this->_var['goods_0_13596100_1416817116']['url']; ?>" title="<?php echo htmlspecialchars($this->_var['goods_0_13596100_1416817116']['name']); ?>"><?php echo $this->_var['goods_0_13596100_1416817116']['short_style_name']; ?></a></p>
            <p class="np_2"><span><!--市场价：<font class="market"><?php echo $this->_var['goods_0_13596100_1416817116']['market_price']; ?></font>-->
           
           <?php if ($this->_var['goods_0_13596100_1416817116']['promote_price'] != ""): ?>
          活动价：<font class="snPrice"><?php echo $this->_var['goods_0_13596100_1416817116']['promote_price']; ?></font>
          <?php else: ?>
          商城价：<font class="snPrice"><?php echo $this->_var['goods_0_13596100_1416817116']['shop_price']; ?></font>
          <?php endif; ?>
           </span>
          </p> 
         </div>
       </li>

  <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
</ul>
 


<?php endif; ?>
