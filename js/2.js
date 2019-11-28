var now=1;
var max=3;
function showd(op){
				if(Number(op)){
							now=parseInt(op);
							clearTimeout(myTime);
							  }
for(var i=1;i<=max; i++){
						if(i==now){
									document.getElementById("lunbo"+now).style.display="block";
									document.getElementById("d"+now).className="d1";
									
								}else{
									document.getElementById("lunbo"+i).style.display="none";
									document.getElementById("d"+i).className="d2";
								}
							}
							now++;
							if(now>max){
								now=1;
							}
							
							myTime=setTimeout("show()",3000);
}