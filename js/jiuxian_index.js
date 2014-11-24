$(function(){
	var datename = new Date();
	var Offset = datename.getTimezoneOffset() * 28800;
	
	setInterval(function(){
      $(".endtime").each(function(){
        var obj = $(this);
        var endTime = new Date(parseInt(obj.attr('value')) * 1000 - Offset) ;
		var show_day =  obj.attr('showday');
        var nowTime = new Date();
        var nMS=endTime.getTime() - nowTime.getTime();
        var myD=Math.floor(nMS/(1000 * 60 * 60 * 24));
		var myH_show=Math.floor(nMS/(1000*60*60) % 24);
        var myH=Math.floor(nMS/(1000*60*60));
        var myM=Math.floor(nMS/(1000*60)) % 60;
        var myS=Math.floor(nMS/1000) % 60;
        var myMS=Math.floor(nMS/100) % 10;
		var myHZero = '';
 		var myMZero = '';
		var mySZero = '';
		if (myH < 10)
		{
			var myHZero = '0';
		}
		if (myM < 10)
		{
			var myMZero = '0';
		}
		if (myS < 10)
		{
			var mySZero = '0';
		}
		
        if(myD >= 0){
			if(show_day == 'show')
			{
				var str = '<span>剩余时间:</span><span>'+myD+'</strong>天<strong class="tcd-h">'+myH_show+'</strong>时<strong class="tcd-m">'+myM+'</strong>分<strong class="tcd-s">'+myS+'</strong>秒';
			}
			else
			{
				var str = '<b class="tcd-h">'+myHZero+myH+'</b>:<b class="tcd-m">'+myMZero+myM+'</b>:<b class="tcd-s">'+mySZero+myS+'</b>';
			}
        }else{
			var str = "已结束！";	
		}
		obj.html(str);
      });
    }, 100);
})
	
