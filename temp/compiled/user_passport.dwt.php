<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:wb="http://open.weibo.com/wb">
<head>
<meta name="Generator" content="ECSHOP v2.7.3" />
<script src="http://tjs.sjs.sinajs.cn/open/api/js/wb.js?appkey=3334122810" type="text/javascript" charset="utf-8"></script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="Keywords" content="<?php echo $this->_var['keywords']; ?>" />
<meta name="Description" content="<?php echo $this->_var['description']; ?>" />
<meta property="wb:webmaster" content="c43f7eb1deb60cb2" />

<title><?php echo $this->_var['page_title']; ?></title>

<link rel="shortcut icon" href="favicon.ico" />
<link rel="icon" href="animated_favicon.gif" type="image/gif" />
<link href="<?php echo $this->_var['ecs_css_path']; ?>" rel="stylesheet" type="text/css" />

<?php echo $this->smarty_insert_scripts(array('files'=>'common.js,user.js')); ?>

<script src="themes/<?php echo $GLOBALS['_CFG']['template']; ?>/js/jquery-1.7.2.js"></script>
</head>
<body>
<?php echo $this->fetch('library/page_header.lbi'); ?>



<div class="blank"></div>
<div class="blank"></div>
<div class="blank" ></div>







<?php if ($this->_var['action'] == 'login'): ?>


<div class="flow_log clearfix" style="height:550px;">
   <div class="block">
         <div class="login" >
        <table width="100%" align="center" border="0" cellpadding="5" cellspacing="1" >
        
          <tr>
            <td width="50%" valign="top" >
            <div class="usBox_1 f_l">
            <div class="login1"></div>
  <div class="usform">
   <form name="formLogin" action="user.php" method="post" onSubmit="return userLogin()" style="padding-left:7px;" >
      <div class="user_form clearfix">
      
        <table width="100%" border="0" align="left" cellpadding="0" cellspacing="0">
         <tr><td colspan="3"> <div class="login_tit">登录</div></td></tr>
          <tr>
            <td align="left" colspan="3"  class="flow_td"> 
            <input  type="text" id="username" name="username"  class="textbind yh" autocomplete="off" onblur="is_registered(this.value);">
            </td>
           
          </tr>
          <tr>
            <td colspan="3" class="flow_td2">
           
            <input  type="password"  id="password1" name="password" class="textbind mm"  value="" onblur="check_password(this.value);" onkeyup="checkIntensity(this.value)">
            </td> 
          </tr>
          <?php if ($this->_var['enabled_captcha']): ?>
          <tr>
            <td align="right" width="75" class="user_l"><?php echo $this->_var['lang']['comment_captcha']; ?>：</td>
            <td><input style="width:70px;" type="text" size="2" name="captcha" class="inputBg" />
            <img src="captcha.php?is_login=1&<?php echo $this->_var['rand']; ?>" class="captcha1" alt="captcha"  onClick="this.src='captcha.php?is_login=1&'+Math.random()" /> </td>
          </tr>
          <?php endif; ?>
          <tr>
          
            <td  align="left" colspan="3" class="flow_wj">
            <input type="checkbox" class="check f_l" checked="checked" name="remember" value="1" >
            <p class="f_l">下次自动登录</p>
            <span class="f_l"><img src="themes/jiuxian/images/wj_bg.gif" width="11" height="11"></span>
            <p class="f_l"><a href="user.php?act=get_password">忘记密码？</a></p>
          
          
          </tr>
        
          <tr class="us_tr" >
           
            <td colspan="3">
            <div class="clearfix"></div>
            <div class="flow_bnt">
            <input type="hidden"  name="act" value="act_login" />
            <input type="hidden"  name="back_act" value="<?php echo $this->_var['back_act']; ?>" />
            <input  type="image" src="themes/jiuxian/images/login.jpg"  class="bnt1"/> 
           <input type="button" class="bnt_blue_2 bnt2" value="不打算登录，直接购买" onclick="location.href='flow.php?step=consignee&amp;direct_shopping=1' " style="display:none;">
                         </div>  
             </td>  
          </tr>
          
         
	  <tr>
	 
	  <td>
    <!--  <div class="trlast">
       <span class="f_l"><a href="user.php?act=qpassword_name" ><?php echo $this->_var['lang']['get_password_by_question']; ?></a></span>
       <span class="f_r"><a href="user.php?act=get_password"><?php echo $this->_var['lang']['get_password_by_mail']; ?></a></span>
      </div>
	 -->
       </td>
      </tr>
      </table>
      </div>
    </form>
	
  </div>
 
  <div class="login3"></div>
</div>
         
         
         

              </td>
              
              
             <td width="50%" valign="top" >      
  <div class="usform_r">
   <form  action="user.php" method="post" name="formUser" onsubmit="return register();" > 
   <div class="user_reg f_l" >
    <h3>还不是本站会员 </h3>
    <p>只需20秒即可注册成为本站会员，享受便宜又放心的购物乐趣。 </p>
    <a href="user.php?act=register"><img src="themes/jiuxian/images/l_zc.gif" width="119" height="39" /></a><br /><br />
     <a href="user.php?act=oath&type=qq"><img src="themes/jiuxian/images/qq_login.gif"/></a>
	 <a href="user.php?act=oath&type=weibo"><img src="themes/jiuxian/images/sina_login_logo.gif"></a>
   </div>
   </form>
  </div>
 
              
              </td>
          </tr>
          
          
          <?php if ($this->_var['need_rechoose_gift']): ?>
          <tr>
            <td colspan="2" align="center" style="border-top:1px #ccc solid; padding:5px; color:red;"><?php echo $this->_var['lang']['gift_remainder']; ?></td>
          </tr>
          <?php endif; ?>
        </table>
        </div>
       </div>
      </div>



<?php endif; ?>



    <?php if ($this->_var['action'] == 'register'): ?>
    <?php if ($this->_var['shop_reg_closed'] == 1): ?>
    
    <?php else: ?>
    <?php echo $this->smarty_insert_scripts(array('files'=>'utils.js')); ?>
   <div class="block clearfix">
    <div class="usBox clearfix" id="reg"> 
   <div class="tit">
<p class="f_l"><span>注册本网站</span>只需20秒！以下信息均为必填</p>
<p class="f_r">已注册&nbsp;&nbsp;|&nbsp;&nbsp;<span><a href="flow.php?step=login">去登录》</a></span></p>
</div>

    <div class="reg_main clearfix">
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="user.php?act=oath&type=qq"><img src="themes/jiuxian/images/qq_login.gif"/></a><br />
   <form  action="user.php" method="post" name="formUser" onsubmit="return register();" > 
   <table width="100%"  border="0" align="left" cellpadding="5" cellspacing="3" >
     <tr><td colspan="2">用户名</td></tr>
        <tr>
          <td>
        <input name="username" type="text" id="username" onblur="is_registered(this.value);" class="username" />
          </td>
         <td> <span id="username_notice" class="us_name" style=" font-size:12px; color:#999; "><font class="us_name2">请填写邮箱/手机号码/用户名</font></span></td>
          <td> <span id="username_notice" class="us_name"></span></td>
        </tr>

         
       <tr>
          <td colspan="2"><?php echo $this->_var['lang']['label_email']; ?>：</td></tr>
          <tr>
          <td>
          <input name="email" type="text" size="25" id="email" onblur="checkEmail(this.value);"  class="username" />
          </td>
         <td colspan="2" style="padding:0;" ><span id="email_notice" class="us_name"><font class="us_name2">请输入邮箱地址</font></span></td>
        </tr>
        
       
        
        
        <tr >
          <tr><td colspan="2"><?php echo $this->_var['lang']['label_password']; ?></td></tr>
          <tr>
          <td>
          <input name="password" type="password" id="password1" onblur="check_password(this.value);" onkeyup="checkIntensity(this.value)" class="username"  />
          </td> 
         <td ><span class="us_name" id="password_notice"  style="width:300px; display:block;"><font class="us_name2">6-20个字符，可由英文、数字或符号组成</font></span></td>
        </tr>
        <!--<tr>
          <td align="right"><?php echo $this->_var['lang']['label_password_intensity']; ?>：</td>
          <td>
            <table width="145" border="0" cellspacing="0" cellpadding="1">
              <tr align="center">
                <td width="33%" id="pwd_lower"><?php echo $this->_var['lang']['pwd_lower']; ?></td>
                <td width="33%" id="pwd_middle"><?php echo $this->_var['lang']['pwd_middle']; ?></td>
                <td width="33%" id="pwd_high"><?php echo $this->_var['lang']['pwd_high']; ?></td>
              </tr>
            </table>
          </td>
        </tr>-->
        <tr>
         
          <td colspan="2"><?php echo $this->_var['lang']['label_confirm_password']; ?>：</td></tr>
          <tr>
          <td>
          <input name="confirm_password" type="password" id="conform_password" onblur="check_conform_password(this.value);"  class="username"  />
          </td>
           <td colspan="2" style="padding:0;"> <span class="us_name" id="conform_password_notice"><font class="us_name2">请重复一下上面密码</font></span></td>
        <?php $_from = $this->_var['extend_info_list']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'field');if (count($_from)):
    foreach ($_from AS $this->_var['field']):
?>
	<?php if ($this->_var['field']['id'] == 6): ?>
        </tr>
        <tr><td><?php echo $this->_var['lang']['passwd_question']; ?></td></tr>
 
        <tr>
          <td>
          <select name='sel_question' style="width:271px;">
	  <option value='0'><?php echo $this->_var['lang']['sel_question']; ?></option>
	  <?php echo $this->html_options(array('options'=>$this->_var['passwd_questions'])); ?>
	  </select>
          </td>
        </tr>
        
        <tr> <td <?php if ($this->_var['field']['is_need']): ?>id="passwd_quesetion"<?php endif; ?>><?php echo $this->_var['lang']['passwd_answer']; ?> </td></tr>
        
       
          
          <tr>
          <td>
	  <input name="passwd_answer" type="text"  class="username" /><?php if ($this->_var['field']['is_need']): ?><span style="color:#FF0000"> *</span><?php endif; ?>
          </td>
        </tr>
	<?php else: ?>
        <tr><td><?php if ($this->_var['field']['is_need']): ?> id="extend_field<?php echo $this->_var['field']['id']; ?>i"<?php endif; ?><?php echo $this->_var['field']['reg_field_name']; ?></td></tr>
    
        <tr>
         <td>
          <input name="extend_field<?php echo $this->_var['field']['id']; ?>" type="text"  class="username" /><?php if ($this->_var['field']['is_need']): ?><span style="color:#FF0000"> *</span><?php endif; ?>
          </td>
        </tr>
	<?php endif; ?>
	<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
    
      <?php if ($this->_var['enabled_captcha']): ?>
      <tr>
      <td colspan="2"><?php echo $this->_var['lang']['comment_captcha']; ?>：</td></tr>
      <tr>
      <td colspan="2"><input type="text" size="8" name="captcha"  style="width:137px; height:30px; padding-left:2px; outline:none; float:left" />
      <span><img src="captcha.php?<?php echo $this->_var['rand']; ?>" class="captcha1"  alt="captcha" onClick="this.src='captcha.php?'+Math.random()" style="position:relative; left:5px; top:5px;" /></span>
      </td>
      </tr>
      <?php endif; ?>
        
        <tr>
          <td colspan="2" align="left" class="us_reg">
          <input name="act" type="hidden" value="act_register" >
          <input type="hidden" name="back_act" value="<?php echo $this->_var['back_act']; ?>" />
           <input name="Submit" type="image" src="themes/jiuxian/images/ty.gif"/ style="padding-top:47px;" >
          
          </td>  
        </tr>
       <!-- <tr class="tr1last">
          <td>&nbsp;</td>
          <td class="actionSub">
          <a  style="color:#057BD2" href="user.php?act=login"><?php echo $this->_var['lang']['want_login']; ?></a><br />
          <a  style="color:#057BD2" href="user.php?act=get_password"><?php echo $this->_var['lang']['forgot_password']; ?></a>
          </td>
        </tr>-->
        <tr>
          <td colspan="2"><p class="agree"><label>
            <input name="agreement" type="checkbox" value="1" checked="checked"  style="position:relative; top:2px;"/>
            <?php echo $this->_var['lang']['agreement']; ?></label></p></td>
        </tr>
        
       
      </table>
 
       
    </form>
	
 
 

</div>
   </div>
   </div>
  <div class="blank"></div>
  <div class="blank"></div>
<?php endif; ?>
<?php endif; ?>








    <?php if ($this->_var['action'] == 'get_password'): ?>
    <?php echo $this->smarty_insert_scripts(array('files'=>'utils.js')); ?>
    <script type="text/javascript">
    <?php $_from = $this->_var['lang']['password_js']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('key', 'item');if (count($_from)):
    foreach ($_from AS $this->_var['key'] => $this->_var['item']):
?>
      var <?php echo $this->_var['key']; ?> = "<?php echo $this->_var['item']; ?>";
    <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
    </script>
   
<div class=" us_password">
<div class="usBox1 clearfix" >
 <div class="user_tit" >
  <span>注册邮件找回密码</span>
 </div>
 <div class="jd1"></div>

    <form action="user.php" method="post" name="getPassword" onsubmit="return submitPwdInfo();">
       
        <table width="90%" border="0" align="center" >
         
          <tr>
            <td width="29%" align="right"><?php echo $this->_var['lang']['username']; ?></td>
            <td width="61%"><input name="user_name" type="text" size="30" class="inputBg1" /></td>
          </tr>
          <tr>
            <td align="right">邮件地址</td>
            <td><input name="email" type="text" size="30" class="inputBg1" /></td>
          </tr>
          <tr>
            <td></td>
            <td>
            <div class="pass_bnt">
            <input type="hidden" name="act" value="send_pwd_email" />
              <input type="submit" name="submit" value="<?php echo $this->_var['lang']['submit']; ?>" class="bnt_blue_1" />
              <input name="button" type="button" onclick="history.back()"  class="bnt_blue_1" value="<?php echo $this->_var['lang']['back_page_up']; ?>" style="border:none; position:relative; left:45px;" />
              </div>
	    </td>
          </tr>
        </table>
        <br />
      </form>
  </div>
</div>
<?php endif; ?>





    <?php if ($this->_var['action'] == 'qpassword_name'): ?>
    
     
    
<div class=" us_password">
<div class="usBox1 clearfix">
<div class="user_tit" ><span>密码问题找回密码</span></div>
 <div class="jd1"></div>

    <form action="user.php" method="post">
      
        <table width="90%" border="0" align="center">
         
          <tr>
            <td width="29%" align="right"><?php echo $this->_var['lang']['username']; ?></td>
            <td width="61%"><input name="user_name" type="text" size="30" class="inputBg1" /></td>
          </tr>
          <tr>
            <td></td>
            <td>
            <div class="pass_bnt">
              <input type="hidden" name="act" value="get_passwd_question" />
              <input type="submit" name="submit" value="<?php echo $this->_var['lang']['submit']; ?>" class="bnt_blue_1"  />
              <input name="button" type="button" onclick="history.back()" class="bnt_blue_1" value="<?php echo $this->_var['lang']['back_page_up']; ?>" style="border:none; position:relative; left:45px;" />
            </div>
	    </td>
          </tr>
        </table>
        <br />
      </form>
  </div>
</div>
<?php endif; ?>


    <?php if ($this->_var['action'] == 'get_passwd_question'): ?>
<div class="usBox">
<div class="user_tit" align="center">
<ul>
<li>
<span>
输入账号找回密码
</span>
</li>
</ul>
</div>
<div class="usBox_in clearfix" style="position:relative">
    <form action="user.php" method="post">
        <br />
        <table width="70%" border="0" align="center">
          <tr>
            <td colspan="2" align="center"><strong><?php echo $this->_var['lang']['input_answer']; ?></strong></td>
          </tr>
          <tr>
            <td width="29%" align="right"><?php echo $this->_var['lang']['passwd_question']; ?>：</td>
            <td width="61%"><?php echo $this->_var['passwd_question']; ?></td>
          </tr>
          <tr>
            <td align="right"><?php echo $this->_var['lang']['passwd_answer']; ?>：</td>
            <td><input name="passwd_answer" type="text" size="20" class="inputBg" /></td>
          </tr>
          <?php if ($this->_var['enabled_captcha']): ?>
          <tr>
            <td align="right"><?php echo $this->_var['lang']['comment_captcha']; ?></td>
            <td><input type="text" size="8" name="captcha" class="inputBg" />
            <img src="captcha.php?is_login=1&<?php echo $this->_var['rand']; ?>" class="captcha1" alt="captcha"   onClick="this.src='captcha.php?is_login=1&'+Math.random()" /> </td>
          </tr>
          <?php endif; ?>
          <tr>
            <td></td>
            <td><input type="hidden" name="act" value="check_answer" />
              <input type="submit" name="submit" value="<?php echo $this->_var['lang']['submit']; ?>" class="bnt_blue_1"  />
              <input name="button" type="button" onclick="history.back()" class="bnt_blue_1" value="<?php echo $this->_var['lang']['back_page_up']; ?>" style="border:none;" />
	    </td>
          </tr>
        </table>
        <br />
      </form>
  </div>
</div>
<?php endif; ?>

<?php if ($this->_var['action'] == 'reset_password'): ?>
    <script type="text/javascript">
    <?php $_from = $this->_var['lang']['password_js']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('key', 'item');if (count($_from)):
    foreach ($_from AS $this->_var['key'] => $this->_var['item']):
?>
      var <?php echo $this->_var['key']; ?> = "<?php echo $this->_var['item']; ?>";
    <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
    </script>
<div class="usBox" style="width:1200px;">
<div class="user_tit" align="center">
<!--<ul>
<li>-->
<span style=" text-align:center;padding-top:20px;color:red;"><br><br>
<strong>注册邮件找回密码</strong>
</span>
<!--</li>
</ul>-->
</div>
<div class="usBox_in clearfix" style="position:relative">
    <form action="user.php" method="post" name="getPassword2" onSubmit="return submitPwd()">
      <br />
      <table width="80%" border="0" align="center">
        <tr>
          <td align="right" ><?php echo $this->_var['lang']['new_password']; ?>:</td>
          <td><input name="new_password" type="password" size="25" class="inputBg" /></td>
        </tr>
        <tr>
          <td align="right"><?php echo $this->_var['lang']['confirm_password']; ?>:</td>
          <td><input name="confirm_password" type="password" size="25"  class="inputBg"/></td>
        </tr>
        <tr>
          <td colspan="2" align="center">
            <input type="hidden" name="act" value="act_edit_password" />
            <input type="hidden" name="uid" value="<?php echo $this->_var['uid']; ?>" />
            <input type="hidden" name="code" value="<?php echo $this->_var['code']; ?>" />
            <input type="submit" name="submit" value="<?php echo $this->_var['lang']['confirm_submit']; ?>" />
          </td>
        </tr>
      </table>
      <br />
    </form>
  </div>
</div>
<?php endif; ?>

 

</div>

<div class="blank"></div>
<?php echo $this->fetch('library/page_footer.lbi'); ?>
</body>
<script type="text/javascript">
var process_request = "<?php echo $this->_var['lang']['process_request']; ?>";
<?php $_from = $this->_var['lang']['passport_js']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('key', 'item');if (count($_from)):
    foreach ($_from AS $this->_var['key'] => $this->_var['item']):
?>
var <?php echo $this->_var['key']; ?> = "<?php echo $this->_var['item']; ?>";
<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
var username_exist = "<?php echo $this->_var['lang']['username_exist']; ?>";
</script>
</html>
