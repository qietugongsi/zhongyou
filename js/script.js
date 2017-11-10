$(function(){
	if (window.console) {
		console.info(">>Join us? Email：psd2html@qq.com");
	}		
	//鼠标移动效果
	 $('.new-lists li,.float-contact').hover(function(){
	 	$(this).addClass('on').siblings().removeClass('on');
	 })
	 //关闭底部
	 $('.index-data .close').click(function(){
	 	$('.index-data').hide();
	 })
	 //加载动画
	 if($(".wow").size() > 0){
		new WOW().init();
	}
	
})