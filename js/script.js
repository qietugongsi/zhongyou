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
	 $(function(){
				//获取普通验证码
			$('.b2').on("click",getVerifyCode({
				callBack: function (){//按钮点击后的回调函数，-----必须-----
					//在这里你还是可以对你的按钮进行操作
					console.log(this);
					alert("验证码发送成功");
				},
				time: 20,//定时时间，以秒为单位
				unabledClass: "unlabed"//按钮不能用的样式，即点击按钮后的样式
			}));
		});
	
})