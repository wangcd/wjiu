
<div id="footer">
<div class="help_tit">


<?php if ($this->_var['helps']): ?>
 <div class=" block ">
   <div class="helpTitBg clearfix">
   <?php $_from = $this->_var['helps']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'help_cat');$this->_foreach['no'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['no']['total'] > 0):
    foreach ($_from AS $this->_var['help_cat']):
        $this->_foreach['no']['iteration']++;
?>
 <dl class="dl<?php echo $this->_foreach['no']['iteration']; ?>">
  <dt> <?php echo $this->_var['help_cat']['cat_name']; ?></dt>
 
  <dd <?php if (($this->_foreach['no']['iteration'] == $this->_foreach['no']['total'])): ?> style="background:none;"<?php endif; ?>>
   <?php $_from = $this->_var['help_cat']['article']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'item');if (count($_from)):
    foreach ($_from AS $this->_var['item']):
?>
  <a href="<?php echo $this->_var['item']['url']; ?>" title="<?php echo htmlspecialchars($this->_var['item']['title']); ?>"><?php echo $this->_var['item']['short_title']; ?></a>
   <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
  </dd>   
</dl>

<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
  </div>
 </div>
  
  <div class="block clearfix">
  <ul class="asure">
   <li><a href="#" target="_blank"></a></li> 
  <li><a href="#" target="_blank"></a></li>
  <li><a href="#" target="_blank"></a></li> 
  <li><a href="#" target="_blank"></a></li>
  <li><a href="#" target="_blank"></a></li>
 <li><a href="#" target="_blank"></a></li> 
 </ul>
 </div>
 
  <div class="block">
  <ul class="index1000_asure">
   <li><a href="#" target="_blank" title="全真品"><img src="themes/jiuxian/images/img_7_1.gif" ></a></li> 
  <li><a href="#" target="_blank" title="免费运"><img src="themes/jiuxian/images/img_7_2.gif" ></a></li>
  <li><a href="#" target="_blank" title="放心购"><img src="themes/jiuxian/images/img_7_3.gif"></a></li> 
  <li><a href="#" target="_blank" title="方便付"><img src="themes/jiuxian/images/img_7_4.gif"></a></li>
  <li><a href="#" target="_blank" title="开箱验"><img src="themes/jiuxian/images/img_7_5.gif"></a></li>
<li class="li6"><a href="#" target="_blank" title="上门退"><img src="themes/jiuxian/images/img_7_6.gif"></a></li>
 </ul>
 </div>
 
 

<div class="blank"></div>
<?php endif; ?>
 
</div>

















 <div class=" clearfix">
 <div class="text">
 
 
<div>
 
  <div class="bNavList">
  
   <?php if ($this->_var['navigator_list']['bottom']): ?>
   <?php $_from = $this->_var['navigator_list']['bottom']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'nav_0_27176600_1416817116');$this->_foreach['nav_bottom_list'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['nav_bottom_list']['total'] > 0):
    foreach ($_from AS $this->_var['nav_0_27176600_1416817116']):
        $this->_foreach['nav_bottom_list']['iteration']++;
?>
        <a href="<?php echo $this->_var['nav_0_27176600_1416817116']['url']; ?>" <?php if ($this->_var['nav_0_27176600_1416817116']['opennew'] == 1): ?> target="_blank" <?php endif; ?>><?php echo $this->_var['nav_0_27176600_1416817116']['name']; ?></a>
        <?php if (! ($this->_foreach['nav_bottom_list']['iteration'] == $this->_foreach['nav_bottom_list']['total'])): ?>
           |
        <?php endif; ?>
      <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
  <?php endif; ?>
   
 </div>
 
</div>

 
 
 <?php echo $this->_var['copyright']; ?><br />
 <div align="center" style="color:#F00;">购买前请确认达到法定饮酒年龄！唯酒会不销售任何含酒精产品给18岁以下人士！</div>

  <div class="pci">
        <a href="#" target="_blank"><img src="themes/jiuxian/images/d01.jpg"></a>
        <a href="#" target="_blank"><img src="themes/jiuxian/images/d02.jpg" alt="rss"></a>
        <a href="#" target="_blank"><img src="themes/jiuxian/images/d03.jpg" alt="rss"></a>
        <a href="#" target="_blank"><img src="themes/jiuxian/images/d04.jpg"></a>
        <a href="#" target="_blank"><img src="themes/jiuxian/images/d05.jpg"></a>
  </div>
  

 <?php echo $this->_var['shop_address']; ?> <?php echo $this->_var['shop_postcode']; ?>
 <?php if ($this->_var['service_phone']): ?>
      Tel: <?php echo $this->_var['service_phone']; ?>
 <?php endif; ?>
 <?php if ($this->_var['service_email']): ?>
      E-mail: <?php echo $this->_var['service_email']; ?><br />
 <?php endif; ?>
 <?php $_from = $this->_var['qq']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'im');if (count($_from)):
    foreach ($_from AS $this->_var['im']):
?>
      <?php if ($this->_var['im']): ?>
      <a href="http://wpa.qq.com/msgrd?V=1&amp;uin=<?php echo $this->_var['im']; ?>&amp;Site=<?php echo $this->_var['shop_name']; ?>&amp;Menu=yes" target="_blank"><img src="http://wpa.qq.com/pa?p=1:<?php echo $this->_var['im']; ?>:4" height="16" border="0" alt="QQ" /> <?php echo $this->_var['im']; ?></a>
      <?php endif; ?>
      <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
      <?php $_from = $this->_var['ww']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'im');if (count($_from)):
    foreach ($_from AS $this->_var['im']):
?>
      <?php if ($this->_var['im']): ?>
      <a href="http://amos1.taobao.com/msg.ww?v=2&uid=<?php echo urlencode($this->_var['im']); ?>&s=2" target="_blank"><img src="http://amos1.taobao.com/online.ww?v=2&uid=<?php echo urlencode($this->_var['im']); ?>&s=2" width="16" height="16" border="0" alt="淘宝旺旺" /><?php echo $this->_var['im']; ?></a>
      <?php endif; ?>
      <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
      <?php $_from = $this->_var['ym']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'im');if (count($_from)):
    foreach ($_from AS $this->_var['im']):
?>
      <?php if ($this->_var['im']): ?>
      <a href="http://edit.yahoo.com/config/send_webmesg?.target=<?php echo $this->_var['im']; ?>n&.src=pg" target="_blank"><img src="themes/jiuxian/images/yahoo.gif" width="18" height="17" border="0" alt="Yahoo Messenger" /> <?php echo $this->_var['im']; ?></a>
      <?php endif; ?>
      <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
      <?php $_from = $this->_var['msn']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'im');if (count($_from)):
    foreach ($_from AS $this->_var['im']):
?>
      <?php if ($this->_var['im']): ?>
      <img src="themes/jiuxian/images/msn.gif" width="18" height="17" border="0" alt="MSN" /> <a href="msnim:chat?contact=<?php echo $this->_var['im']; ?>"><?php echo $this->_var['im']; ?></a>
      <?php endif; ?>
      <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
      <?php $_from = $this->_var['skype']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'im');if (count($_from)):
    foreach ($_from AS $this->_var['im']):
?>
      <?php if ($this->_var['im']): ?>
      <img src="http://mystatus.skype.com/smallclassic/<?php echo urlencode($this->_var['im']); ?>" alt="Skype" /><a href="skype:<?php echo urlencode($this->_var['im']); ?>?call"><?php echo $this->_var['im']; ?></a>
      <?php endif; ?>
  <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?><br />
  <?php if ($this->_var['icp_number']): ?>
  <?php echo $this->_var['lang']['icp_number']; ?>:<a href="http://www.miibeian.gov.cn/" target="_blank"><?php echo $this->_var['icp_number']; ?></a><br />
  <?php endif; ?>
  
  

 
    <!-- <a href="http://webscan.360.cn/index/checkwebsite/url/www.weijiuwang.com" name="0765312185dba14067ce28c534040e44" >360网站安全检测平台</a>-->
 </div>
  

 </div>
</div>




<script>
function toT1(){document.getElementById("ftop1").className="top2";}
function toT2(){document.getElementById("ftop1").className="top1";}
</script>

<div id="ftop1" title="返回顶部" class="top2" onmouseover="toT1()" onmouseout="toT2()" style="display: block; _position:absolute; _right:0;"></div>

<script>
window.onscroll=function(){
var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
var toTopImg=document.getElementById("ftop1");
if(scrollTop>500){
toTopImg.style.display='block';

toTopImg.onclick=function(){window.scroll(0,-10000);}
}else{
toTopImg.style.display = 'none';
}
}
</script>





















