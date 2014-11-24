	var dateTime = new Date();

    var difference = dateTime.getTime() - serverTime;
	
    setInterval(function(){
		var endtime_obj = document.getElementsByName('group_endtime');
		for(i=0;i<endtime_obj.length;i++)
		{
		
			var obj = endtime_obj[i].getElementsByTagName('input')[0];
			var endTime = new Date(parseInt(obj.value) * 1000);
			var nowTime = new Date();
			var nMS=endTime.getTime() - nowTime.getTime() + difference;
			var myD=Math.floor(nMS/(1000 * 60 * 60 * 24));
			var myH=Math.floor(nMS/(1000*60*60) % 24);
			var myM=Math.floor(nMS/(1000*60)) % 60;
			var myS=Math.floor(nMS/1000) % 60;
			var myMS=Math.floor(nMS/100) % 10;
			if(myD>= 0){
				var str = "剩余时间&nbsp;<span>"+"<font class='tim-fontColor'>"+myH+"</font>时</span>"+"<font class='tim-fontColor'>"+myM+"</font>分"+"<font class='tim-fontColor'>"+myS+"</font>秒";
			}
			else
			{
				var str = "已结束！";	
			}
			var endtime_box_obj = endtime_obj[i].getElementsByTagName('div');
			for(j=0;j<endtime_box_obj.length;j++)
			{
				if(endtime_box_obj[j].className == "group_endtime_box")
				{
					endtime_box_obj[j].innerHTML = str;
				}
			}
		}
     
    }, 100);
	
	window.pageConfig=window.pageConfig||{};pageConfig.wideVersion=(function(){return(screen.width>=1210);})();if(pageConfig.wideVersion&&pageConfig.compatible){document.getElementsByTagName("body")[0].className="root61";} 