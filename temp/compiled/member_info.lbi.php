

<?php if ($this->_var['user_info']): ?>
<div class="f_l">
<div class="f_l log"  style="position:relative; z-index:999999999; ">
<ul class="ul1" onmouseover="this.className='ul1 ul1_on'" onmouseout="this.className='ul1'">
 <a class="a1" href="http://www.weijiuwang.com/index.php"><span><strong>许昌总站</strong></span></a>
  <div class="ul1_float">
  
  <ul>
  
     
     <a href="http://www.weijiuwang.com/index.php">禹州分站</a>
     <a href="http://www.weijiuwang.com/index.php">长葛分站</a>
     <a href="http://www.weijiuwang.com/index.php">襄县分站</a>

     
 </ul>    
  </div>
 </div>
	&nbsp;<span><?php echo $this->_var['lang']['hello']; ?>，</span><span  style=" font-family:Arial; "><?php echo $this->_var['user_info']['username']; ?> 欢迎登录本站！</span>    
 <a href="user.php">[<?php echo $this->_var['lang']['user_center']; ?>]</a> 
 <a href="user.php?act=logout">[<?php echo $this->_var['lang']['user_logout']; ?>]</a> 
 </ul> 
 </div>
 
 
 

 
<div class="f_r">
 


 <div class="f_l log"  style="position:relative; z-index:999999999; ">
<!--   <ul class="ul1" onmouseover="this.className='ul1 ul1_on'" onmouseout="this.className='ul1'">
 <a class="a1" href="user.php"><span>我的账户</span></a>
  <div class="ul1_float">
  
  <ul>
  
     <a href="user.php?act=order_list">我的订单</a>
     <a href="user.php?act=message_list">我的留言</a>
     <a href="user.php?act=collection_list">我的收藏</a>
     <a href="user.php?act=affiliate">我的推荐</a>
     <a href="user.php?act=profile">用户信息</a>
     <a href="user.php?act=address_list">收货地址</a>
     
 </ul>    
  </div>
    <div class="dang"></div>
 </ul> -->
<a href="http://www.weijiuwang.com/flow.php">购物车</a>
 
    <?php if ($this->_var['navigator_list']['top']): ?>

    <?php $_from = $this->_var['navigator_list']['top']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'nav_0_41164400_1418891256');$this->_foreach['nav_top_list'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['nav_top_list']['total'] > 0):
    foreach ($_from AS $this->_var['nav_0_41164400_1418891256']):
        $this->_foreach['nav_top_list']['iteration']++;
?>  
  <!--  <span style="color:#bfbfbf;">|</span>    <a href="<?php echo $this->_var['nav_0_41164400_1418891256']['url']; ?>"  -->
	 <?php if ($this->_var['nav_0_41164400_1418891256']['opennew'] == 1): ?> 
	 
	 <?php endif; ?>
	 <!--<?php echo $this->_var['nav_0_41164400_1418891256']['name']; ?></a>-->
 
    <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?> 
	<?php endif; ?>
</div>

 <span class="rexian">客服热线:</span>
 <span class="phone"><font>0374-9617799</font></span> </div>
 
 
 
 
<?php else: ?>
&nbsp;<span>您好，欢迎光临本站！</span>
[<a href="user.php">登录</a><span style="color:#666;">|</span><a href="user.php?act=register">注册</a>]
<a href="user.php?act=oath&type=qq"><img src="themes/jiuxian/images/qq_login.gif" width="50"/></a>
<a href="user.php?act=oath&type=weibo"><img src="themes/jiuxian/images/sina_login_logo.gif"></a>



<div class="f_r">
 


 <div class="f_l log"  style="position:relative; z-index:999999999; ">
<!--   <ul class="ul1" onmouseover="this.className='ul1 ul1_on'" onmouseout="this.className='ul1'">
 <a class="a1" href="user.php"><span>我的账户</span></a>
  <div class="ul1_float">
  
  <ul>
  
     <a href="user.php?act=order_list">我的订单</a>
     <a href="user.php?act=message_list">我的留言</a>
     <a href="user.php?act=collection_list">我的收藏</a>
     <a href="user.php?act=affiliate">我的推荐</a>
     <a href="user.php?act=profile">用户信息</a>
     <a href="user.php?act=address_list">收货地址</a>
     
 </ul>    
  </div>
    <div class="dang"></div>
 </ul> -->
<a href="http://www.weijiuwang.com/flow.php">购物车</a>|
<a href="http://www.weijiuwang.com/admin/privilege.php?act=login">联盟商登陆</a>|
<a href="http://www.weijiuwang.com/admin/privilege.php?act=login">配货商登陆</a>
 
    <?php if ($this->_var['navigator_list']['top']): ?>

    <?php $_from = $this->_var['navigator_list']['top']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'nav_0_41164400_1418891256');$this->_foreach['nav_top_list'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['nav_top_list']['total'] > 0):
    foreach ($_from AS $this->_var['nav_0_41164400_1418891256']):
        $this->_foreach['nav_top_list']['iteration']++;
?>  
    <span style="color:#bfbfbf;">|</span>
    
     <a href="<?php echo $this->_var['nav_0_41164400_1418891256']['url']; ?>" <?php if ($this->_var['nav_0_41164400_1418891256']['opennew'] == 1): ?>  target="_blank" <?php endif; ?>><?php echo $this->_var['nav_0_41164400_1418891256']['name']; ?></a>

    <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?> <?php endif; ?>
</div>

 <span class="rexian">客服热线:</span>
 <span class="phone"><font>0374-9617799</font></span> </div>


<?php endif; ?>


