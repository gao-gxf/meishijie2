/**
 * Created by lenovo-pc on 2018/12/2.
 */
$(function(){
    function tab(btn,cont){
        $(btn).mouseover(function(){
            $(this).addClass('active').siblings(btn).removeClass('active');
            $(cont).eq($(this).index()).show().siblings(cont).hide();
        })
    }
    tab('.btn1','.cont1');
    tab('.btn2','.cont2');
    tab('.btn3','.cont3');
});
