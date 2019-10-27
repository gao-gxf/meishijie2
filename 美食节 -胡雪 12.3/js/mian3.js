$(function(){
	$(".nav-li").hover(function(){
		$(this).find('span').css('display','none')
		$(this).find('.nav-down-list').css('display','block')
	},function(){
		$(this).find('span').css('display','block')
		$(this).find('.nav-down-list').css('display','none')
	})
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
         $.ajax({
        	"url":'json/heli.json',
        	"type":'get',
        	"data":{},
        	"async":false,
        	"dataType":"json"
        }).done(
        	function(str){
        		var arr=eval(str)
        		
        		       		list1=arr[0].list
        		$('.hlys-cont').html('')
                    			$.each(list1, function(i) {
        				  
          			   	      		$('.hlys-cont ').append('<li><div class="se-bill-img"><a href=""><img src="'
        		                          +list1[i].src+
        		                          '"alt=""</a><span class="lit-tit">'
        		                          +list1[i].lititle+
'</span></div><div class="se-bill-des"><div class="se-bill-des-cont"><p class="se-bill-des-tit"><span class="destit">'
                                          +list1[i].data.destit+
        '</span><span class="desnum">'  +list1[i].data.desnum+'</span><span class="des-author">' 
          +list1[i].data.author+ '</span></p>'
					        		)
        			});
        		$(".right-down_btns>a").click(function(event){
        			$(this).addClass('now').siblings('a').removeClass('now')
        			var $page=$(this).attr('datapage');
        			       		$.each(arr,function(i){
        			var page=arr[i].page;
        			     if($page==page){
        			var list=arr[i].list
        			console.log(page,list);
        			$('.hlys-cont ').html('')
        			$.each(list, function(i) {
        				
          			   	      		$('.hlys-cont ').append('<li><div class="se-bill-img"><a href=""><img src="'
        		                          +list[i].src+
        		                          '"alt=""</a><span class="lit-tit">'
        		                          +list[i].lititle+
'</span></div><div class="se-bill-des"><div class="se-bill-des-cont"><p class="se-bill-des-tit"><span class="destit">'
                                          +list[i].data.destit+
        '</span><span class="desnum">'  +list[i].data.desnum+'</span><span class="des-author">' 
          +list[i].data.author+ '</span></p>'
					        		)
        			});
        			}
        			
        		})
        		$(".lit-tit").each(function(){
        			if($(this).html()==''){
        			$(this).css('display','none')
        		}
        		})
        		
        			event.preventDefault()
        		})
 
        	}
        )
})