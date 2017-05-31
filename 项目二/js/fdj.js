$(function(){
	//Bottom 部分放大镜效果
	$('.mainRightTop').mouseover(function(){
		$('.moveTop').show();
		$('.mainTopBigImg').show();
		$('.mainRightBottom').css('display','none');
		$('.mainBottomBigImg').css('display','none');
	});
	$('.mainRightTop').mouseout(function(){
		$('.moveTop').hide();
		$('.mainTopBigImg').hide();
		$('.mainRightBottom').css('display','block');
	});
	$('.mainRightTop').mousemove(function(event){
		var x=event.pageX;
		var y=event.pageY;
		// console.log(x,y)
		var s_x=$('.mainRightTop').offset().left;
		var s_y=$('.mainRightTop').offset().top;
		// console.log(s_x,s_y)
		var mouse_x=x-s_x;
		var mouse_y=y-s_y;
		console.log(mouse_y,mouse_x)
		//鼠标在div里面当前的位置
		var m_l=mouse_x-$('.moveTop').width()/2;
		var m_t=mouse_y-$('.moveTop').height()/2;
		// console.log(m_t,m_l)
		if(m_l<=0){
			m_l=0;
		}else if(m_l>=$('.mainRightTop').width()-$('.moveTop').width()){
			m_l=$('.mainRightTop').width()-$('.moveTop').width();
		}
		if(m_t<=0){
			m_t=0;
		}else if(m_t>=$('.mainRightTop').height()-$('.moveTop').height()){
			m_t=$('.mainRightTop').height()-$('.moveTop').height();
		}
		var pre_x=m_l/($('.mainRightTop').width()-$('.moveTop').height());
		var pre_y=m_t/($('.mainRightTop').height()-$('.moveTop').height());
		var big_l=($('.topBigimg').width()-$('.mainTopBigImg').width())*pre_x;
		var big_y=($('.topBigimg').height()-$('.mainTopBigImg').height())*pre_y;
		$('.moveTop').css('left',m_l+'px');
		$('.moveTop').css('top',m_t+'px');
		$('.topBigimg').css('top',-big_y+'px');
		$('.topBigimg').css('left',-big_l+'px');
	});	


	//Bottom下部分放大镜效果
	$('.mainRightBottom').mouseover(function(){
		$('.moveBottom').show();
		$('.mainBottomBigImg').show();
		$('.mainRightTop').css('display','none');
		$('.mainTopBigImg').css('display','none');
	});
	$('.mainRightBottom').mouseout(function(){
		$('.moveBottom').hide();
		$('.mainBottomBigImg').hide();
		$('.mainRightTop').css('display','block');
	});
	$('.mainRightBottom').mousemove(function(event){
		var x=event.pageX;
		var y=event.pageY;
		// console.log(x,y)
		var s_x=$('.mainRightBottom').offset().left;
		var s_y=$('.mainRightBottom').offset().top;
		// console.log(s_x,s_y)
		var mouse_x=x-s_x;
		var mouse_y=y-s_y;
		console.log(mouse_y,mouse_x)
		//鼠标在div里面当前的位置
		var m_l=mouse_x-$('.moveBottom').width()/2;
		var m_t=mouse_y-$('.moveBottom').height()/2;
		// console.log(m_t,m_l)
		if(m_l<=0){
			m_l=0;
		}else if(m_l>=$('.mainRightBottom').width()-$('.moveBottom').width()){
			m_l=$('.mainRightBottom').width()-$('.moveBottom').width();
		}
		if(m_t<=0){
			m_t=0;
		}else if(m_t>=$('.mainRightBottom').height()-$('.moveBottom').height()){
			m_t=$('.mainRightBottom').height()-$('.moveBottom').height();
		}
		var pre_x=m_l/($('.mainRightBottom').width()-$('.moveBottom').height());
		var pre_y=m_t/($('.mainRightBottom').height()-$('.moveBottom').height());
		var big_l=($('.BottomImgs').width()-$('.mainBottomBigImg').width())*pre_x;
		var big_y=($('.BottomImgs').height()-$('.mainBottomBigImg').height())*pre_y;
		$('.moveBottom').css('left',m_l+'px');
		$('.moveBottom').css('top',m_t+'px');
		$('.BottomImgs').css('top',-big_y+'px');
		$('.BottomImgs').css('left',-big_l+'px');
	});	
});
