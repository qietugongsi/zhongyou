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
	 	$(".h-footer").css("padding-bottom",0)
	 	$(".get-datum").show()
	 })
	 $(".get-datum").click(function(){
	 	$(this).hide();
	 	$('.index-data').show();
	 })
	 //加载动画
	 if($(".wow").size() > 0){
		new WOW().init();
	}
	//顶部二级导航
	$(".header .naver li").hover(function(){
		$(this).addClass("active");
	},function(){
		$(this).removeClass("active");
	})
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
	(function (window,document){
		function getVerifyCode(options) {
			var fn = arguments.callee;
			return function() {
				clearInterval(timer);
				if(!(options && Object.prototype.toString.call(options.callBack) == "[object Function]")) {
					throw new Error("必须传递参数及回调函数");
				}
				var that = $(this);
				if(options.isPhone){
					var phone = options.getPhone(),
						reg = options.phoneReg || /^1[3|4|5|7|8][0-9]\d{8}$/;
					if(!reg.test(phone)) {
						//如果手机号码不正确，则执行手机号码对应的回调函数
						options.phoneCallBack && options.phoneCallBack.call(that,phone);
						return;
					}
				}
				
				var timer = null,
					time = options.time || 60,
					count = 0,//记录定时器执行了多少次
					interval = 1000,//每次执行间隔
					start = new Date().getTime(),//开始执行时间
					targetTime = time * 1000,//目标时间
					unabledClass = options.unabledClass || "",
					timeIsUpText = options.timeIsUpText || "重新获取",
					timeRunnigText = options.timeRunnigText || " s后重新获取";
				that.off("click");
				that.addClass(unabledClass);
				timer = setTimeout(function() {
					var wucha = 0,//计算误差
						//下一次执行时间,下一次执行时间 = 每次执行间隔 - 误差
						nextRunTime = interval,
						currentFn = arguments.callee;
					count ++;
					wucha = new Date().getTime() - (start + count * interval);
					wucha = (wucha <= 0) ? 0 : wucha;
					nextRunTime = interval - wucha;
					nextRunTime = (nextRunTime <= 0) ? 0 : nextRunTime
					//console.log("误差：" + wucha + "，下一次执行时间：" + nextRunTime);
					if((targetTime -= interval) <= 0){
						clearTimeout(timer);
						/*time = 60;*/
						that.html(timeIsUpText).removeClass(unabledClass);
						that.on("click", fn(options));
					}else{
						time--;
						that.html(time + timeRunnigText);
						//在外部可以获取到倒计时当前时间
						if(options.getCurrentTime && (Object.prototype.toString.call(options.getCurrentTime) == "[object Function]")){
							options.getCurrentTime.call(that,time);
						}
						timer = setTimeout(currentFn,nextRunTime);
					}
				}, interval);
				//执行回调函数
				options.callBack.call(that);
			}
		}
		window.getVerifyCode = getVerifyCode;
	})(window,document);
	(function($) {
		$.fn.gallery_slider = function(options) {
		  var _ops = $.extend({
		      imgNum: 5 , //图片数量
		      gallery_item_left: '.prev' , //左侧按钮
		      gallery_item_right: '.next' , //右侧按钮
		      gallery_left_middle: '.gallery_left_middle', //左侧图片容器
		      gallery_right_middle: '.gallery_right_middle', //左侧图片容器
		      threeD_gallery_item: '.threeD_gallery_item' //图片容器
		  }, options);
		  var _this = $(this),
		  		_imgNum = _ops.imgNum, //图片数量
		  		_gallery_item_left = _ops.gallery_item_left, //左侧按钮
		  		_gallery_item_right = _ops.gallery_item_right, //右侧按钮
		  		_gallery_left_middle = _ops.gallery_left_middle, //左侧图片容器
		  		_gallery_right_middle = _ops.gallery_right_middle, //左侧图片容器
		  		_threeD_gallery_item = _ops.threeD_gallery_item; //图片容器
		  		
	  	//左侧按钮绑定点击事件
	  	_this.find(_gallery_item_left).on('click',function(){
				var idx = parseInt(_this.find(_gallery_left_middle).index());
				//当前展示图片逻辑
				_this.find(_threeD_gallery_item).eq(idx).removeClass('gallery_left_middle').addClass('front_side');
				//当idx值为0时，执行逻辑
				_this.find(_threeD_gallery_item).eq(idx == 0 ? idx + _imgNum - 1 : idx - 1).removeClass('gallery_out').addClass('gallery_left_middle');
				//当idx值为_imgNum - 3时，执行逻辑
				_this.find(_threeD_gallery_item).eq(idx == _imgNum - 3 ? idx + 2 : idx - _imgNum + 2).removeClass('gallery_right_middle').addClass('gallery_out');
				//当idx值为_imgNum - 2时，执行逻辑
				_this.find(_threeD_gallery_item).eq(idx == _imgNum - 2 ? idx + 1 : idx - _imgNum + 1).removeClass('front_side').addClass('gallery_right_middle');
			})
			//右侧按钮绑定点击事件
			_this.find(_gallery_item_right).on('click',function(){
				var idx = parseInt(_this.find(_gallery_right_middle).index());
				//当前展示图片逻辑
				_this.find(_threeD_gallery_item).eq(idx).removeClass('gallery_right_middle').addClass('front_side');
				//当idx值为0时，执行逻辑
				_this.find(_threeD_gallery_item).eq(idx == 0 ? idx + _imgNum - 1 : idx - 1).removeClass('front_side').addClass('gallery_left_middle');
				//当idx值为1时，执行逻辑
				_this.find(_threeD_gallery_item).eq(idx == 1 ? idx + _imgNum - 2 : idx - 2).removeClass('gallery_left_middle').addClass('gallery_out');
				//当idx值为_imgNum - 2时，执行逻辑
				_this.find(_threeD_gallery_item).eq(idx == _imgNum - 2 ? idx + 1 : idx - _imgNum + 1).removeClass('gallery_out').addClass('gallery_right_middle');
			})
		};
	})(jQuery);
})