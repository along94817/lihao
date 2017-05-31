$(function(){
	//表单正则验证
	var run=null;
	function test(){
		var r=/^[A-z0-9]{3,6}$/;
		var pear=/^[a-z0-9_-]{6,18}$/;
		$('.mainSub').click(function(){
			var input1=document.getElementsByTagName('input')[0];
			var input2=document.getElementsByTagName('input')[1];
			var result=r.test(input1.value);
			var result1=pear.test(input2.value);


			if(input2.value==''){
				alert('密码不能为空！请认真填写');
				$('.tShK2').hide();
			}else if(result1){
				$('.input_2').css('border','1px solid green');
			}else{
				$('.input_2').css('border','1px solid red');
				$('.tShk2').show('slow');
			}
			if(input1.value==''){
				alert('名字不能为空！');
				// $('.tShK').hide();
			}else if(result){
				$('.input_1').css('border','1px solid green');
			}else{
				$('.input_1').css('border','1px solid red');
				$('.tShK').show('slow');
			}

			//表单验证通过时文本域打字效果
			var str='欢迎来到实战训练营,在这里你将完成实战训练！小心草丛伏击躲在小兵后面';
			var i=0;
			var j=1;
			var p='';
			var text=document.getElementById('text')
			function paomadeng(){
				p+=str.substring(i,j);
				i++;
				j++;
				if(i>=34||j>=35){
					clearInterval(run)
				}
				text.value=p;
				console.log(i,j)
			}
			if(result==true&&result1==true){
				run=setInterval(paomadeng,200);
			}
		});
		$('.input_1').focus(function(){
			$('.tShK').hide('slow');
			// text.value='';
		});
		$('.input_2').focus(function(){
			$('.tShk2').hide('slow');
			// text.value='';
		});

	}
	test();
	//contact页面表单焦点事件
	function focus(){
		$('.mainInput1 input,.mainInput2 input,.mainTextArea textarea').focus(function(){
			$(this).css({'border':'1px solid rgba(255,255,255,0.5)'})
		});
	}
	focus();
	//contact页面表单焦点失去事件
	function blru(){
		$('.mainInput1 input,.mainInput2 input,.mainTextArea textarea').blur(function(){
			$(this).css({'border':''});
		});
	}
	blru();

	//移动的div
		function textMove(){
		var div=document.getElementsByClassName('mainBottomdiv')[0];
		var speed=2;
		var x=1;
		var y=1;
		var divtop=0;
		var divleft=0;
		var run=setInterval(function(){
			divtop=divtop+y*speed;
			divleft=divleft+x*speed;
			if(divtop>=450||divtop<=0){
				y=-y;
				div.style.color='rgb('+rand(0,255)+','+rand(0,255)+','+rand(0,255)+')';
			}
			if(divleft>=980||divleft<=0){
				x=-x;
				div.style.color='rgb('+rand(0,255)+','+rand(0,255)+','+rand(0,255)+')';
			}
			div.style.top=divtop+'px';
			div.style.left=divleft+'px';
		},10);
	}
	textMove();
	function rand(m,n){
		var a=Math.floor(Math.random()*(n+1-m))+m;
		return a;
	}


	//Contact表单渐入效果
	function scroll(){
		$(document).scroll(function(){
			var scrTop=$(document).scrollTop();
			if(scrTop>=400){
				$('.mainCenter1').animate({'opacity':'1'},500);
			}else if(scrTop<400){
				$('.mainCenter1').css({'opacity':'0'});
			}
		});
	}
	scroll();
});






