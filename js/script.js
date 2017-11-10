$(function(){
	if (window.console) {
		console.info(">>Join us? Email：psd2html@qq.com");
	}		
	
	/*触屏*/
		$(".slider .inner").bind("swipeleft",function(){
 			
		});
		
		$(".slider .inner").bind("swiperight",function(){
 			
		});
		
		
//	二级菜单
    $('.naver li').hover(function(){
		$(this).addClass('on');
		
	     },function(){
		$(this).removeClass('on');
     });
     
     //动画效果
     jQuery(".banner").slide({mainCell:".bd ul",effect:"left",easing:"easeOutQuint",delayTime:500,autoPlay:true});
     
     //滚动效果
     jQuery(".products").slide({titCell:false,mainCell:".body ul",autoPage:true,effect:"left",autoPlay:true,vis:4});
     
      jQuery(".brands").slide({titCell:false,mainCell:".body ul",autoPage:true,effect:"left",autoPlay:true,vis:1});
      
    //登录页面切换效果
     jQuery(".login_gilde").slide({mainCell:".bd ul",effect:"left",easing:"easeInOutExpo",delayTime:500,autoPlay:true});
     
     //详情页效果
     jQuery(".pro_imgs").slide({ mainCell:".bd ul",effect:"left",autoPlay:true });
     
     //选项卡切换
     jQuery(".pro_tabb").slide({});
})