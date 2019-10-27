$(document).ready(function () {
	
	var $ipt=$('.earch .ipt')
	$ipt.click(function () {
		$ipt.placeholder().css('display','none')
	})
	
	var $navli=$('.nav>li')
	
	
	
	$navli.mouseover(function () {
		// var index=$(this).index()
		// console.log($navli[index])
		$(this).css({'background':'#fafafa'})
	}).mouseout(function () {
		// var index=$(this).index()
		$(this).css({'background':''})
	})
	//var index=$(this).index() 声明两次是因为在两个条件里面
	//或者直接$(this)
	
	//第一块轮播图
	
	var $oneleft=$('.lb-one-left')
	var $oneright=$('.lb-one-right')
	
	var animateRuning=false
	$oneleft.click(function () {
		if(!animateRuning){
			animateRuning=true;
			$('.lb-one-long').animate({'left':-990},400,function () {
				$('.lb-one-longa').first().appendTo('.lb-one-long');
				$('.lb-one-long').css({'left':0}),
				animateRuning=false
			})
		}
	})
	$oneright.click(function () {
		if(!animateRuning){
			animateRuning=true;
			$('.lb-one-longa').last().prependTo('.lb-one-long');
			$('.lb-one-long').css({'left':-990})
			$('.lb-one-long').animate({'left':0},400,function () {
				animateRuning=false
			})
		}
	})
	
	
	
	
	
	
	/////////////////////////////////
// 	var $oneleft=$('.lb-one-left')
// 	var $oneright=$('.lb-one-right')
// 	    var $width=$('.lb-one-longa').eq(1).width();
// 	    var $li=$('.lb-one-longa:eq(0)').clone(true);//把第一个克隆到最后一个
// 	    $('.lb-one-long').append($li)
// 		var $num=$('.lb-one-longa').size();
// 		$('.lb-one-long').width($width* $num+'px');
// 		$oneleft.click(function(){
// 			// $(this).addClass('now').siblings('li').removeClass('now');
// 			 page=num=$(this).index();
// 			$target=num*$width
// 			  $('.lb-one-long').animate({'left':-$target},900) 
// 		})
// 	    console.log($('.lb-one-longa').eq(1).width(),$('.lb-one-long'),$num,$li,$('.lb-one-long'))
// 	    var num=0;
// 	    var page=0
// 	     function right(){
// 	     	num++;
// 	     	if(num==$num){
// 	     		num=1
// //	     	$('.tab').css({'left':"0px"},30)
// 	     	 $('.lb-one-long').animate({'left':0},10) 
// 	     	}
// 	     	$target=num*$width
// 	     	 $('.lb-one-long').animate({'left':-$target},1000) 
// 	     	  page++;
// 	     	  if(page==$oneleft.size()){
// 	     		page=0
// 	     	}
// 	     	 // $('.btn>li').eq(page).addClass('now').siblings('li').removeClass('now') 
// 	     }
// 	    var $time=null;
// 	    $time=setInterval(right,3900) 
// 	    $('.ban-left').hover(function(){
// 	  	clearInterval($time)
// 	    },function(){
// 	  	 $time=setInterval(right,3900) 
// 	  	
// 	  })
// 	
	
	
////////////////////////////////
	//选项卡
	var $twoulli=$('.dd .aa')
	var $twodown=$('.dt-img')
		$twoulli.click(function() {
			//要变换的盒子样式为none
			 $twodown.hide()
			//找到对应的内容div,并显示
			var _index=$(this).index()
			// $two_down[index].style.display='block'  //原生效率高
			$($twodown[_index]).show()
		})
	console.log($twoulli,$twodown)
	
	
	
// 		$twoulli.click(function () {
// 			$(this).attr('class','active').siblings('.aa').attr('class','')
// 			$twodown.eq($(this).index()).show().siblings('div').hide()
// 		})
	
	//第二个轮播图   头部的轮播
	var $titleul=$('title1-left-ul')
	var $titleright=$('title1-right a')
	
	console.log($titleul,$titleright)
	
	
	
})