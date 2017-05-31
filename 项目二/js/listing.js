$(function(){
	var m=50;
	var i=0;
	var run=null;
	var f=0;

	//轮播图上一张
	$('.btnleft').click(function(){
		i--;
		if(i<0){
			i=4;
		}
		play();
	});
	$('.btnright').click(function(){
		i++;
		if(i>=5){
			i=0;
		}
		play();
	});
	function play(){
		$('#ppt li').eq(i).siblings().stop().animate({'opacity':0},300);
		$('#ppt li').eq(i).stop().animate({'opacity':'1'},300);
	}
	function autoplay(){
		i++;
		if(i>=$('#ppt li').length){
			i=0;
		}
		play();
	}
	run=setInterval(autoplay,3000);
	$('#header').hover(function(){
		clearInterval(run);
		run=null;
		$('.btnleft,.btnright').animate({'opacity':'1'},800);
	},function(){
		run=setInterval(autoplay,3000);
		$('.btnleft,.btnright').animate({'opacity':'0'},800);

	});

	//页面标题单机事件
	function titleclick(){
		$('.headerBottomChge').bind('click',function(){
			$(this).css({'background':'transparent','border':'2px solid #fff'});
		});
	}
	titleclick();
	function winclick(){
		$('.headerBottomChge').click(function(){
			f++;
			if(f%2==1){
				$(this).css({'background':'transparent','border':'2px solid #fff'});

			}else{
				$('.headerBottomChge').css({'background':'#83CC61','border':'2px solid transparent'});

			}
		});
	}
	winclick();

	//鼠标经过图片放大效果
	$('.mainImage-1').mouseenter(function(){
		$(this).children('.mainImageTu').children('img').css({'transform':'scale(1.1)'});
		$(this).children('p').stop().animate({'left':'40px'});
		$(this).children('span').animate({'right':'40px'});
		
	});
	$('.mainImage-1').mouseleave(function(){
		$(this).children('.mainImageTu').children('img').css({'transform':''});
		$(this).children('p').stop().animate({'left':'30'});
		$(this).children('span').animate({'right':'30px'});

	});
	//鼠标单击事件
	function dbclick(){
		var div=document.createElement('div');
		div.className='active';
		var index;
		$('.mainImage-1').dblclick(function(){
			$(this).prepend($(div));
		})
		$('.nextImages>li').dblclick(function(){
			index=$(this).index();
			// console.log(index)
			$('.mainImage-1').eq(index+1).prepend($(div));
			
		});
		$('#main').click(function(){
			$('.mainImage-1').children('.active').remove();
			return false;
		})
	}
	dbclick();

	//页面加载完毕时title效果
	function loadTilt(){
		$(document).ready(function(){
			$('.headerBottom').animate({'opacity':'1','top':'325px'},500);
		});
	}
	loadTilt();



	//Home二级菜单
	var a=0;
	function memuC(){
		$('.headerNavList li').hover(function(){
			// a=$(this).index();
			$(this).children('.navSecond').stop().fadeIn(400);
			$(this).css('color','blue');

		},function(){
			$(this).children('.navSecond').stop().fadeOut(400);
			$(this).css('color','');
		});
	}
	memuC();


	

});