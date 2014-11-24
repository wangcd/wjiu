// JavaScript Document

/* 
Name: common.js
For : http://www.hecha.cn/
Date: 20121121  Sincol
*/
$(function(){
	//回到顶部
	$("#backtotop").click(function(){
		$("html,body").animate({"scrollTop":"0"},"fast");
	});
	//页面大小
	
	var w=document.documentElement.clientWidth;
	if(w<1200)
	{
		$('.top_banner').css('width','1007px');	
		$('#slideBox').css('width','1007px');
		$('.Nav').css('width','1007px');
	
	
		$('.dingtong').css('width','1200px');
	}
	else
	{
		$('.top_banner').css('width','100%');
		$('#slideBox').css('width','100%');
		$('.Nav').css('width','100%');
		$('.dingtong').css('width','100%');			
	}	
	
	$(window).resize(function(){
		var w=document.documentElement.clientWidth;
		if(w<1200)
		{
			$('.top_banner').css('width','1200px');
			$('#slideBox').css('width','1200px');
			$('.Nav').css('width','1200px');
			$('.dingtong').css('width','1200px');				
		}
		else
		{
			$('#slideBox').css('width','100%');
			$('.Nav').css('width','100%');				
			$('.top_banner').css('width','100%');
			$('.dingtong').css('width','100%');	
		}		
	})

})


function closebox(obj){$("#"+obj).hide();
}
function togglebox(obj){$("#"+obj).toggle();}
function togglernav(obj){
	$("#"+obj+" .slix").toggle();
	$("#"+obj+" .sliz").toggle();
}
/* settab */
function setTab(name,cursel,n){
	for(i=1;i<=n;i++){
		var menu=document.getElementById(name+i);
		var con=document.getElementById("con_"+name+"_"+i);
		menu.className=i==cursel?"hover":"";
		con.style.display=i==cursel?"block":"none";
	}
}

/* tabSet */
function tabSet(obj,id,tag)
{
 var arrayli = obj.parentNode.getElementsByTagName("li"); //获取菜单数组
 var arraytag = document.getElementById(id).getElementsByTagName(tag); //获取标签数组
 for(i=0;i<arraytag.length;i++)
 {
  if(obj==arrayli[i])
  {
   arrayli[i].className = "this";
   arraytag[i].className = "this";
  }
  else
  {
   arrayli[i].className = "";
   arraytag[i].className = "hide";
  }
 }
}
function AddFavorite(){
    var url="http://www.hecha.cn";
        try{
            window.external.addFavorite(url, "#");
        }catch (e){
            try{
                window.sidebar.addPanel("#", url, "");
            }catch (e){
                alert("抱歉，您的浏览器不支持自动收藏首页操作!\n请您使用菜单栏或Ctrl+D收藏本站。");
            }
        }
}
