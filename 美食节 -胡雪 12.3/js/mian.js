$(function(){
	$(".nav-li").hover(function(){
		$(this).find('span').css('display','none')
		$(this).find('.nav-down-list').css('display','block')
	},function(){
		$(this).find('span').css('display','block')
		$(this).find('.nav-down-list').css('display','none')
	})
	
     var $div=$('.ban-cont>li').eq(4).find('.li-img').eq(2).clone(true);
       $('.ban-cont').prepend('<li></li>');
       $('.ban-cont>li').eq(0).html($div)       
	 var $firstli=$('.ban-cont>li').eq(1).clone(true); 
	 var $width=$('.ban-cont>li').eq(1).width();
	 $('.ban-cont').append($firstli);
	 var $div2=$div=$('.ban-cont>li').eq(2).find('.li-img').eq(1).clone(true);
	 $('.ban-cont').append('<li></li>');
     $('.ban-cont>li').eq(7).html($div2) //动态添加元素
	 var $ulwidth=$width*$(".ban-cont>li").size()+330*2
	 $('.ban-cont').width($ulwidth)//设置总宽度
	 var $left=$('.ban-cont').css('left')
var $page=0;
var $num=0;
var $target=0;
var $btnpage=0;
var isclick=false;
     $(".ban-btn>li").mouseenter(function(){
     	$(this).find('.se-times').css('display','block');
     	$(this).addClass('now').siblings('li').removeClass('now').find('.se-times').css('display','none');
     	$btnpage=$page=$num=$(this).index();
     	$target=$num*$width;
     	$('.ban-cont').animate({'left':-($target+330)},1000)
     	$('.ban-mid-btn-right').attr('class','active'+$btnpage+' ban-mid-btn-right');
       	$('.ban-mid-btn-left').attr('class','active'+$btnpage+' ban-mid-btn-left');
  
     })//移入
     console.log( $(".ban-mid-btn").children().eq(0))
      $(".ban-mid-btn").children().eq(0).click(function(){
      	if(!isclick){
      	$btnpage++;
      	if($btnpage==$(".ban-btn>li").size()){
      	$btnpage=0;
      	}
      	$('.ban-mid-btn-right').attr('class','active'+$btnpage+' ban-mid-btn-right');
       	$('.ban-mid-btn-left').attr('class','active'+$btnpage+' ban-mid-btn-left');
      	Right();
      	}
      })//点击
      function 	Right(){
      $page++;
      if($page==$(".ban-btn>li").size()){
      	$page=0;
      }
	 $(".ban-btn>li").eq($page).find('.se-times').css('display','block');
     $(".ban-btn>li").eq($page).addClass('now').siblings('li').removeClass('now').find('.se-times').css('display','none');
      $num++;
    if($num==$(".ban-cont>li").size()-2){
      		$num=1;
      		$('.ban-cont').animate({'left':-330},10)
    }
      	$target=$num*$width+330;
      	$('.ban-cont').animate({'left':-$target},1000,function(){
      	 isclick=false
      	})
  }
      function Left(){
      	$page--;
      	if($page<0){
      		$page=$(".ban-btn>li").size()-1;
      	}
      	 $(".ban-btn>li").eq($page).find('.se-times').css('display','block');
         $(".ban-btn>li").eq($page).addClass('now').siblings('li').removeClass('now').find('.se-times').css('display','none');
        if($num<1){
      		$num=$(".ban-cont>li").size()-3;
      		$target=$num*$width
      		$('.ban-cont').stop().animate({'left':-$target},10)
      	}
        $num--;
      	$target=$num*$width;
      	$('.ban-cont').animate({'left':-($target+330)},1000,function(){
      	 isclick=false	
      	})
      }
       
       $(".ban-mid-btn-right").click(function(){
      	if(!isclick){
      		isclick=true;
      	    $btnpage--
      	
      	if($btnpage<0){
      		$btnpage=$(".ban-btn>li").size()-1;	
      	}
      	$('.ban-mid-btn-right').attr('class','active'+$btnpage+' ban-mid-btn-right');
       	$('.ban-mid-btn-left').attr('class','active'+$btnpage+' ban-mid-btn-left');
      	Left();
      	}
      })
       $('.banner').hover(function(){
       	$('.ban-mid-btn-right').attr('class','active'+$btnpage+' ban-mid-btn-right');
       	$('.ban-mid-btn-left').attr('class','active'+$btnpage+' ban-mid-btn-left');
       },function(){
       $('.ban-mid-btn-left').attr('class','active ban-mid-btn-left');
       	$('.ban-mid-btn-right').attr('class','active ban-mid-btn-right');
       })
       //轮播图结束 banner

       $('.nov-cont-tit>li').click(function(event){
       	$(this).addClass('now').siblings('li').removeClass('now')
       	$(this).find('a').addClass('now')
       	$(this).siblings('li').find('a').removeClass('now')
         var $index=$(this).index()
       	$('.nov-cont-cont>li').each(function(){
       		$(this).find('.nov-cont-img').eq($index).css('display','block').siblings('.nov-cont-img').css('display','none')
       	})
       		event.preventDefault()
       })//十月推荐
       var $div=$(".se-bill").eq(0).clone(true)	;
       $('.inner-wrap').append($($div));
       var $Width1=$('.se-bill').width();
       var $divwidth=$('.se-bill').size()*$Width1
       $('.inner-wrap').width($divwidth);
       var $num1=0;
       var $page1=0;
       var $target1=0;
       $('.up-to-date-a').mouseenter(function(){
       	$page1=$num1=$(this).index();
       	 $target1=$num1*$Width1;
       	 $('.inner-wrap').animate({'left':-$target1},1000)
       	 
       })
       var isClick=false
       $('.left-btn').click(function(){
       	if(!isClick){
       		isClick=true;
       	 left()	
       	}
       })
       function left(){
       	$page1--;
       	 if($page1==0){
            $('.up-to-date-a').eq(1).removeClass('now')
       	 	
       	 }
       	 if($page1<0){
       	 	 $('.up-to-date-a').eq($page1).addClass('now').siblings('.up-to-date-a').removeClass('now')
            $('.up-to-date-a').eq(0).removeClass('now')
       	 	$page1=$('.up-to-date-a').size()-1
       	 }
       	 $('.up-to-date-a').eq($page1).addClass('now').siblings('.up-to-date-a').removeClass('now');
       	if($num1<=0){
       	  $num1=$('.se-bill').size()-1;
       	  $target=$num1*$Width1;
       	 $('.inner-wrap').animate({'left':-$target},10)
       	}
       	$num1--
       	$target1=$num1*$Width1;
       	 $('.inner-wrap').animate({'left':-$target1},1000,function(){
       	 	isClick=false;
       	 })
      }
       function right(){
       	$page1++
       	if($page1==$('.up-to-date-a').size()){
       		$page1=0;
       		$('.up-to-date-a').eq(3).removeClass('now')
       	}
        if($page1==1){
            $('.up-to-date-a').eq(0).removeClass('now')
       	 }
       	 $('.up-to-date-a').eq($page1).addClass('now').siblings('.up-to-date-a').removeClass('now');
         
        if($num1==$('.se-bill').size()-1){
       	  $num1=0;
       	  $target1=$num1*$Width1;
       	  $('.inner-wrap').animate({'left':-$target1},10)
        } 
        $num1++;
       	$target1=$num1*$Width1;
       	 $('.inner-wrap').animate({'left':-$target1},1000,function(){
       	 	isClick=false;
       	 })
       }
        $('.right-btn').click(function(){
       	if(!isClick){
       		isClick=true;
       	 right();	
       	}
       })
      
        
        function tab1(btn,cont){
        	  $(btn).mouseenter(function(){
        	$(cont).find('img').eq($(this).index()).css('display','block').siblings('img').css('display','none')
            $(this).children().addClass('now')
            $(this).siblings().children().removeClass('now')
        })
        }
        tab1('.se-health-cont-btn1>p','.li-one>.se-health-cont-img')
        tab1('.se-health-cont-btn2>p','.li-two>.se-health-cont-img')
        tab1('.se-health-cont-btn3>p','.li-three>.se-health-cont-img')
        tab1('.se-health-cont-btn4>p','.li-four>.se-health-cont-img')
        $(window).scroll(function(){
        	if($('html,body').scrollTop()>200){
        		$('.back-top').css('display','block')
        	}
        	else{
        		$('.back-top').css('display','none')
        	}
        })
        $('.back-top').click(function(){
        	$('html,body').scrollTop(0)
        })
        $('.back-top').hover(function(){
        	$(this).addClass('now')
        },function(){
        	$(this).removeClass('now')
        })
        $(".down-search").hover(function(){
        	$(this).addClass('now')
        },function(){
        		$(this).removeClass('now')
        })
        $('.search-btn').click(function(){
        	$(this).toggleClass('now')
        	if($(this).hasClass('now')){
        	$(".down-search").addClass('now')	
        	}
        	else{
        	$(".down-search").removeClass('now')	
        	}
        })
})
