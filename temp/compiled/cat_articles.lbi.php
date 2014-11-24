 <div class="news " >
       <dl>  
  <?php $_from = $this->_var['articles']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }; $this->push_vars('', 'article_item');$this->_foreach['no1'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['no1']['total'] > 0):
    foreach ($_from AS $this->_var['article_item']):
        $this->_foreach['no1']['iteration']++;
?>

 <dd class='li_<?php echo $this->_foreach['no1']['iteration']; ?>'>
  <a href="<?php echo $this->_var['article_item']['url']; ?>" title="<?php echo htmlspecialchars($this->_var['article_item']['title']); ?>"><?php echo sub_str($this->_var['article_item']['short_title'],16); ?></a>  
  </dd>

  <?php endforeach; endif; unset($_from); ?><?php $this->pop_vars();; ?>
  </dl>
</div>
