$(function(){
	var dateTime = new Date();
    var difference = dateTime.getTime() - serverTime;
    setInterval(function(){
      $(".endtime").each(function(){
        var obj = $(this);
        var endTime = new Date(parseInt(obj.attr('value')) * 1000);
        var nowTime = new Date();
        var nMS=endTime.getTime() - nowTime.getTime() + difference;
        var myD=Math.floor(nMS/(1000 * 60 * 60 * 24));
		var myH=Math.floor(nMS/(1000*60*60) % 24);
        var myM=Math.floor(nMS/(1000*60)) % 60;
        var myS=Math.floor(nMS/1000) % 60;
        var myMS=Math.floor(nMS/100) % 10;
        if(myD>= 0){
			var str = "剩余时间&nbsp;<span>"+myH+"时"+myM+"分"+myS+"秒</span>";
        }else{
			var str = "已结束！";	
		}

		obj.html(str);
      });
    }, 100);
})

window.pageConfig=window.pageConfig||{};pageConfig.wideVersion=(function(){return(screen.width>=1210);})();if(pageConfig.wideVersion&&pageConfig.compatible){document.getElementsByTagName("body")[0].className="root61";} 
