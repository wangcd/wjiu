 

<img src="themes/jiuxian/images/gw_ico.jpg">
<a href="flow.php" style="color:#FFF;">我的购物车</a><span>（<b><?php echo $this->_var['number']; ?></b>）</span>件




  <?php if ($this->_var['goods']): ?>
<ul class="car_ul"  style="display:none;">
 <?php $_from = $this->_var['goods']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'goods_0_36018000_1416817116');$this->_foreach['goods'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['goods']['total'] > 0):
    foreach ($_from AS $this->_var['goods_0_36018000_1416817116']):
        $this->_foreach['goods']['iteration']++;
?>
 <li>
 <div class="f_l">
 <a class="name" href="<?php echo $this->_var['goods_0_36018000_1416817116']['url']; ?>"><?php echo sub_str($this->_var['goods_0_36018000_1416817116']['short_name'],11); ?></a>
 </div>
 <div class="f_r">
<span><?php echo $this->_var['goods_0_36018000_1416817116']['goods_price']; ?></span>×<?php echo $this->_var['goods_0_36018000_1416817116']['goods_number']; ?> &nbsp;
<a class="del" href="javascript:" onClick="deleteCartGoods(<?php echo $this->_var['goods_0_36018000_1416817116']['rec_id']; ?>)">删除</a>
 </div>
</li>
 <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
 <li class="tr"><a target="_blank" href="flow.php" style="color:#FFFFFF" ><img src="themes/jiuxian/images/viewcart.gif" ></a></li>
 

</ul> 
 <div class="dang"></div>

<?php else: ?>
<ul class="car_ul" style="display:none;">
<li>
购物车中没有商品
<a target="_blank" href="flow.php" style="color:#FFFFFF" ><img src="themes/jiuxian/images/viewcart.gif" class="cart_img"></a>
</li>
</ul>

<?php endif; ?>



<script type="text/javascript">
function deleteCartGoods(rec_id)
{
Ajax.call('delete_cart_goods.php', 'id='+rec_id, deleteCartGoodsResponse, 'POST', 'JSON');
}

/**
 * 接收返回的信息
 */
function deleteCartGoodsResponse(res)
{
  if (res.error)
  {
    alert(res.err_msg);
  }
  else
  {
      document.getElementById('ECS_CARTINFO').innerHTML = res.content;
  }
}
</script>

