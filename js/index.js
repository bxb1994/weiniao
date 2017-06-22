window.onload=function(){
	function lunbo(father,time){
		$(father+">.ban>.banimg").hide().eq(0).show();
		var num=0;
		function move(type){
			type=type||"right"
			if(type=="right"){
				num++;
				if(num>=$(father+">.ban>.banimg").length){
					num=0;
				}
			}else if(type=="left"){
				num--;
				if(num<=-1){
					num=$(father+">.ban>.banimg").length-1;
				}
			}
			$(father+">.ban>.banimg").fadeOut().eq(num).fadeIn();
			$(father+">ul>li").removeClass("dian").eq(num).addClass("dian");
		}
		var t=setInterval(move,time)
		$(father).mouseover(function(){
			clearInterval(t);
		})
		$(father).mouseout(function(){
			t=setInterval(move,time);
		})
		$(father+">.btnleft").click(function(){
			move("left")
		})
		$(father+">.btnright").click(function(){
			move("right");
		})
		$(father+">ul>li").click(function(){
			var index=$(this).index();
			$(father+">ul>li").removeClass("dian").eq(index).addClass("dian");
			$(father+">.ban>.banimg").fadeOut().eq(index).fadeIn();
			$(father+">.ban>.banimg").stop(true,true);
			num=index;
		})
	}
	lunbo("#banner1",3000)
	lunbo("#banner2",3000)
	lunbo("#banner3",3000)

		$("nav>a").click(function(){
			var num=$(this).index();
			$("nav>a").removeClass("active").eq(num).addClass("active");
		})

}