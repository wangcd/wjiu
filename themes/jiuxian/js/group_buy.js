
		jQuery(".tuanToday").slide({titCell:".blockTitle ul",mainCell:".bd ul",autoPage:true,effect:"left"});

	
(function(){
	var vari={
		width:180,
		pics:document.getElementById("pics"),
		prev:document.getElementById("prev"),
		next:document.getElementById("next"),
		len:document.getElementById("pics").getElementsByTagName("li").length,
		intro:document.getElementById("pics").getElementsByTagName("p"),
		now:1,
		step:5,
		dir:null,
		span:null,
		span2:null,
		begin:null,
		begin2:null,
		end2:null,
		move:function(){
			if(parseInt(vari.pics.style.left,10)>vari.dir*vari.now*vari.width&&vari.dir==-1){
				vari.step=(vari.step<2)?1:(parseInt(vari.pics.style.left,10)-vari.dir*vari.now*vari.width)/5;
				vari.pics.style.left=parseInt(vari.pics.style.left,10)+vari.dir*vari.step+"px";
			}
			else if(parseInt(vari.pics.style.left,10)<-vari.dir*(vari.now-2)*vari.width&&vari.dir==1){
				vari.step=(vari.step<2)?1:(-vari.dir*(vari.now-2)*vari.width-parseInt(vari.pics.style.left,10))/5;
				vari.pics.style.left=parseInt(vari.pics.style.left,10)+vari.dir*vari.step+"px";
			}
			else{
				vari.now=vari.now-vari.dir;
				clearInterval(vari.begin);
				vari.begin=null;
				vari.step=5;
				vari.width=180;
			}
		}
	};
	vari.prev.onclick=function(){
		if(!vari.begin&&vari.now!=1){
			vari.dir=1;
			
			vari.begin=setInterval(vari.move,20);
		}
		else if(!vari.begin&&vari.now==1){
			vari.dir=-1
			vari.now=vari.len-1;
			//vari.width*=vari.len-1;
			vari.begin=setInterval(vari.move,20);
		};
	};
	vari.next.onclick=function(){
		if(!vari.begin&&vari.now!=vari.len){
		vari.dir=-1;
		vari.begin=setInterval(vari.move,20);
			
		}
		else if(!vari.begin&&vari.now==vari.len){
			vari.dir=1;
			vari.now=2;
			vari.width*=vari.len-1;
			vari.begin=setInterval(vari.move,20);
		};
	};
	
})();
(function(){
	var vari1={
		width:150,
		pics1:document.getElementById("pics1"),
		prev1:document.getElementById("prev1"),
		next1:document.getElementById("next1"),
		len1:document.getElementById("pics1").getElementsByTagName("li").length,
		intro1:document.getElementById("pics1").getElementsByTagName("p"),
		now1:1,
		step1:5,
		dir1:null,
		move1:function(){
			if(parseInt(vari1.pics1.style.left,10)>vari1.dir1*vari1.now1*vari1.width&&vari1.dir1==-1){
				vari1.step1=(vari1.step1<2)?1:(parseInt(vari1.pics1.style.left,10)-vari1.dir1*vari1.now1*vari1.width)/5;
				vari1.pics1.style.left=parseInt(vari1.pics1.style.left,10)+vari1.dir1*vari1.step1+"px";
			}
			else if(parseInt(vari1.pics1.style.left,10)<-vari1.dir1*(vari1.now1-2)*vari1.width&&vari1.dir1==1){
				vari1.step1=(vari1.step1<2)?1:(-vari1.dir1*(vari1.now1-2)*vari1.width-parseInt(vari1.pics1.style.left,10))/5;
				vari1.pics1.style.left=parseInt(vari1.pics1.style.left,10)+vari1.dir1*vari1.step1+"px";
			}
			else{
				vari1.now1=vari1.now1-vari1.dir1;
				clearInterval(vari1.begin);
				vari1.begin=null;
				vari1.step1=5;
				vari1.width=150;
			}
		}
	};
	vari1.prev1.onclick=function(){
		if(!vari1.begin&&vari1.now1!=1){
			vari1.dir1=1;
			
			vari1.begin=setInterval(vari1.move1,20);
		}
		else if(!vari1.begin&&vari1.now1==1){
			vari1.dir1=-1
			vari1.now1=vari1.len1-1;
			//vari1.width*=vari1.len1-1;
			vari1.begin=setInterval(vari1.move1,20);
		};
	};
	vari1.next1.onclick=function(){
		if(!vari1.begin&&vari1.now1!=vari1.len1){
		vari1.dir1=-1;
		vari1.begin=setInterval(vari1.move1,20);
			
		}
		else if(!vari1.begin&&vari1.now1==vari1.len1){
			vari1.dir1=1;
			vari1.now1=2;
			vari1.width*=vari1.len1-1;
			vari1.begin=setInterval(vari1.move1,20);
		};
	};
	
})();
