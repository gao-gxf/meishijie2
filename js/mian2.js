$(function(){
	$(".nav-li").hover(function(){
		$(this).find('span').css('display','none')
		$(this).find('.nav-down-list').css('display','block')
	},function(){
		$(this).find('span').css('display','block')
		$(this).find('.nav-down-list').css('display','none')
	})//nav导航   
        
    
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
        //返回顶部    
        
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
        })//底部搜索框
        $.ajax({
        	"url":'json/weidao.json',
        	"type":'get',
        	"data":{},
        	"async":false,
        	"dataType":"json"
        }).done(
        	function(str){
        		var arr=eval(str)
        		list1=arr[0].list
        		$('.se-cont-right ').html('')
                    			$.each(list1, function(i) {
        				  
          			   	      		$('.se-cont-right ').append('<li><div class="se-bill-img"><a href=""><img src="'
        		                          +list1[i].src+
        		                          '"alt=""</a><span class="lit-tit">'
        		                          +list1[i].lititle+
'</span></div><div class="se-bill-des"><div class="se-bill-des-cont"><p class="se-bill-des-tit"><span class="destit">'
                                          +list1[i].data.destit+
        '</span><span class="desnum">'  +list1[i].data.desnum+'</span><span class="des-author">' 
          +list1[i].data.author+ '</span></p><div class="se-bill-des-des"><p class="se-p"><a href=""><i class="ff cap"></i>' 
          +list1[i].data.step+'</a></p><p class="se-p"><a href=""><i class="ff fire"></i>'+list1[i].data.taste+
          '</a></p></div></div>'
					        		)
        			});
        		
        		$(".right-down_btns>a").click(function(event){
        			var $page=$(this).attr('datapage');
        			       		$.each(arr,function(i){
        			var page=arr[i].page;
        			     if($page==page){
        			var list=arr[i].list
        			console.log(page,list);
        			$('.se-cont-right ').html('')
        			$.each(list, function(i) {
        				
          			   	      		$('.se-cont-right ').append('<li><div class="se-bill-img"><a href=""><img src="'
        		                          +list[i].src+
        		                          '"alt=""</a><span class="lit-tit">'
        		                          +list[i].lititle+
'</span></div><div class="se-bill-des"><div class="se-bill-des-cont"><p class="se-bill-des-tit"><span class="destit">'
                                          +list[i].data.destit+
        '</span><span class="desnum">'  +list[i].data.desnum+'</span><span class="des-author">' 
          +list[i].data.author+ '</span></p><div class="se-bill-des-des"><p class="se-p"><a href=""><i class="ff cap"></i>' 
          +list[i].data.step+'</a></p><p class="se-p"><a href=""><i class="ff fire"></i>'+list[i].data.taste+
          '</a></p></div></div>'
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
        
        $(".se-cont-left-comnon p").click(function(){
        	console.log($(this).addClass('now').next('ul'))
        	$(this).addClass('now').next('ul').addClass('now').siblings('ul').removeClass('now now2')
        	$(this).siblings('p').removeClass('now')
        })
        function Look(dev, list){
         $(dev).click(
          	function(event){
          		if($(dev).html()=="展开全部&gt;&gt;"){
          		$(list).addClass('now').parent().addClass('now2')
          		$(dev).html('&lt;&lt;收起')
          		}
          		else{
          		$(list).removeClass('now').parent().removeClass('now2')		
          		$(dev).html("展开全部&gt;&gt;")
          		}
          		
              event.preventDefault()
          		
          	}
          )	
        }
         
          Look('.technolog_list_more',".technolog_li")
          Look('.testa_list_more',".testa_li")
          Look('.food-list_more',".li_two")
          $(".se-cont-left-tit>li").click(function(){
          	$(this).removeClass('now').children('a').addClass('now');
          	$(this).siblings('li').addClass('now').children('a').removeClass('now');
          	$(".se-cont-left>div").eq($(this).index()).css("display","block").siblings('div').css('display','none')
//        	console.log($(".se-cont-left>div"))
          })
          
})