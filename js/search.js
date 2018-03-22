/**
 * Created by lenovo on 2018/3/22.
 */

$(function (){
    $('.search').blur(function (){
        if ($(this).val()!=''){
            $('.list').append('<li class="item clearfix" data-status="0"><span class="kuang"></span><span>'+$(this).val()+'</span></li>');
            $(this).val('');
        }
    });
    $(document).keyup(function(event){
        if(event.keyCode ==13){
            if ($('.search').val()!=''){
                $('.list').append('<li class="item clearfix" data-status="0"><span class="kuang"></span><span>'+$('.search').val()+'</span></li>');
                $('.search').val('');
            }
        }
    });
    $('.list').on('click','.kuang',function (){
        var parent=$(this).parents('.item');
        if (parent.attr('data-status')==0){
            $(this).text('√');
            parent.attr('data-status','1');
        }else{
            $(this).text('');
            parent.attr('data-status','');
        }
    });
    $('.operation').click(function (){
        var status=$(this).attr('data-status');
        if (status=='all'){
            $('.item').show();
        }else if (status=='clear'){
            $('.item[data-status='+1+']').remove();
        }else if (status=='0'){
            $('.item').hide();
            $('.item[data-status='+status+']').show();
        }else if (status=='1'){
            $('.item').hide();
            $('.item[data-status='+status+']').show();
        }
    });
});



