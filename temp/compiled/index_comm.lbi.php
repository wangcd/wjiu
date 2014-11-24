<?php

if(!function_exists("get_comments")){
function get_comments($num)
{
   $sql = 'SELECT a.*,b.goods_id,b.goods_thumb,b.goods_name FROM '. $GLOBALS['ecs']->table('comment') .
            ' AS a,'. $GLOBALS['ecs']->table('goods') .'AS b WHERE a.status = 1 AND a.parent_id = 0 and a.comment_type=0 and a.id_value=b.goods_id '.
            ' ORDER BY a.add_time DESC';
  if ($num > 0)
  {
   $sql .= ' LIMIT ' . $num;
  }
  //echo $sql;
        
  $res = $GLOBALS['db']->getAll($sql);
  $comments = array();
  foreach ($res AS $idx => $row)
  {

   $comments[$idx]['add_time']       = local_date($GLOBALS['_CFG']['time_format'], $row['add_time']);
   $comments[$idx]['content']       = $row['content'];
   $comments[$idx]['id_value']       = $row['id_value'];
   $comments[$idx]['goods_thumb']  = get_image_path($row['goods_id'], $row['goods_thumb'], true);
   $comments[$idx]['goods_name']       = $row['goods_name'];
  }
  return $comments;
}
}

?>



  
<?php
   $this->assign('my_comments',get_comments(10));
?>



<div class="comm_box">
<div class="comm_tit "><span class="f_l"></span></div>
<div class="blank" style="height:0;"></div>
  <div class="com_list clearfix">
<?php $_from = $this->_var['my_comments']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'comments');$this->_foreach['no1'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['no1']['total'] > 0):
    foreach ($_from AS $this->_var['comments']):
        $this->_foreach['no1']['iteration']++;
?>

<dl class="dl<?php echo $this->_foreach['no1']['iteration']; ?>">
<dt>
 <a href="goods.php?id=<?php echo $this->_var['comments']['id_value']; ?>" title="<?php echo $this->_var['comments']['goods_name']; ?>" target="_blank">
<img alt="<?php echo $this->_var['comments']['goods_name']; ?>" src="<?php echo $this->_var['comments']['goods_thumb']; ?>"  >
</a>
 </dt>
 <dd>
<h2><a class="name" href="goods.php?id=<?php echo $this->_var['comments']['id_value']; ?>" title="<?php echo $this->_var['comments']['goods_name']; ?>" target="_blank">
<?php echo sub_str($this->_var['comments']['goods_name'],15); ?>
</a>
 </h2>
 
<p><a href="goods.php?id=<?php echo $this->_var['comments']['id_value']; ?>" title="<?php echo $this->_var['comments']['goods_name']; ?>" target="_blank">
<?php echo sub_str($this->_var['comments']['content'],10); ?></a></p>
 </dd>
 </dl>
 
<?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
</div>

 
</div>

 