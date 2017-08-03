
$(".swiper-wrapper").css({
	width:$(window).width(),
	height:$(window).height()
})
//预加载
var imgArr=[
	"img/music.png",
	"img/jiantou.png",
	"img/27.png",
	"img/28.png",
	"img/29.png",
	"img/3.png",
	"img/4.png",
	"img/5.png",
	"img/6.png",
	"img/7.png",
	"img/8.png",
	"img/11.png",
	"img/12.png",
	"img/15.png",
	"img/19.png",
	"img/21.png",
	"img/diqiu/1.jpg",
	"img/diqiu/2.jpg",
	"img/diqiu/3.jpg",
	"img/diqiu/4.jpg",
	"img/diqiu/5.jpg",
	"img/diqiu/6.jpg",
	"img/diqiu/7.jpg",
	"img/diqiu/8.jpg",
	"img/diqiu/9.jpg",
	"img/diqiu/10.jpg",
	"img/diqiu/11.jpg",
	"img/diqiu/12.jpg",
	"img/diqiu/13.jpg",
	"img/diqiu/14.jpg",
	"img/diqiu/15.jpg",
	"img/diqiu/16.jpg",
	"img/diqiu/17.jpg",
	"img/diqiu/18.jpg",
	"img/diqiu/19.jpg",
	"img/diqiu/20.jpg",
	"img/diqiu/21.jpg",
	"img/diqiu/22.jpg",
	"img/diqiu/23.jpg",
	"img/diqiu/24.jpg",
	"img/diqiu/25.jpg",
	"img/diqiu/26.jpg",
	"img/diqiu/27.jpg",
	"img/diqiu/28.jpg",
	"img/diqiu/29.jpg",
	"img/diqiu/30.jpg",
	"img/diqiu/31.jpg",
	"img/diqiu/32.jpg",
	"img/diqiu/33.jpg",
	"img/diqiu/34.jpg",
	"img/diqiu/35.jpg",
	"img/diqiu/36.jpg",
	"img/diqiu/37.jpg",
	"img/diqiu/38.jpg",
	"img/diqiu/39.jpg",
	"img/diqiu/40.jpg",
	"img/diqiu/41.jpg",
	"img/diqiu/42.jpg",
	"img/diqiu/43.jpg",
	"img/diqiu/44.jpg",
	"img/diqiu/45.jpg",
	"img/diqiu/46.jpg",
	"img/diqiu/47.jpg",
	"img/36.png",
	"img/37.png",
	"img/38.png",
	"img/39.png",
	"img/40.png",
	"img/41.png",
	"img/42.png",
	"img/45.png",
	"img/P4/ren1.png",
	"img/P4/ren2.png",
	"img/P4/ren3.png",
	"img/P4/ren4.png",
	"img/P4/ren5.png",
	"img/P4/ren6.png",
	"img/P4/ren7.png",
	"img/P4/ren8.png",
	"img/P4/1.png",
	"img/P4/2.png",
	"img/P4/3.png",
	"img/P4/4.png",
	"img/P4/5.png",
	"img/P4/6.png",
	"img/P4/7.png",
	"img/P4/8.png",
	"img/P4/9.png",
	"img/P4/10.png",
	"img/P4/11.png",
	"img/P4/12.png",
	"img/P4/13.png",
	"img/P4/14.png",
	"img/P4/15.png",
	"img/P4/16.png",
	"img/P4/17.png",
	"img/P5/m1.png",
	"img/P5/m2.png",
	"img/P5/m3.png",
	"img/P5/m4.png",
	"img/P5/m5.png",
	"img/P5/m6.png",
	"img/P5/m7.png",
	"img/P5/m8.png",
	"img/P5/m9.png",
	"img/P5/m10.png",
	"img/P5/yingzi.png",
	"img/P5/men1.png",
	"img/P5/men2.png",
	"img/P5/men3.png",
	"img/P5/men4.png",
	"img/P5/men5.png",
	"img/P5/men6.png",
	"img/P5/men7.png",
	"img/P5/men8.png",
	"img/P5/men9.png",
	"img/P5/men10.png",
	"img/s1.png",
	"img/s2.png",
	"img/s3.png",
	"img/s4.png",
	"img/s5.png",
	"img/gaozhen.png",
	"img/huaping.png",
	"img/tuhongchuan.png",
	"img/xingwenning.png",
	"img/jiangde.png",
	"img/wangping.png",
	"img/p8-1.png",
	"img/p8-2.png",
	"img/p8-3.png",
	"img/p8-4.png",
	"img/p8-5.png",
	"img/p8-6.png",
	"img/p8-7.png",
	"img/p8-8.png",
	"img/p8-9.png",
	"img/p8-10.png",
	"img/p8-11.png",
	"img/p8-12.png",
	"img/p9-1.png",
	"img/p9-2.png",
	"img/p9-4.png",
	"img/p9-6.png",
	"img/p9-7.png",
	"img/aa.gif"
];
var Imgs=[];
var n=0;
for(var i=0;i<imgArr.length;i++){
	var makeImg=new Image();
	makeImg.src=imgArr[i];
	makeImg.onload=function(){
		Imgs.push(this);
//		console.log(Imgs.length);
		n=parseInt(Imgs.length * 100 / imgArr.length);
		$(".num").html(n+"%");
		$(".progress").css({
			width:n+"%"
		});
		if(n>=100){
			$(".outer").remove();
			main();
		}
	}
}

function main(){
	var audioEle=document.getElementsByTagName("audio");
	var flag=true;
	$(".slide_music").click(function(){
		if(flag){
			audioEle[0].pause();
			$(".slide_music").removeClass("music_rotate");
			flag=false;
		}else{
			audioEle[0].play();
			$(".slide_music").addClass("music_rotate");
			flag=true;
		}
	})    
	var mySwiper1 = new Swiper ('.swiper1',{
	direction: 'vertical',//纵向
    freeMode:false,
   	onInit: function(swiper1){ //Swiper2.x的初始化是onFirstInit
	    swiperAnimateCache(swiper1); //隐藏动画元素 
	    swiperAnimate(swiper1); //初始化完成开始动画
	}, 
	onSlideChangeEnd: function(swiper1){ 
		if(swiper1.activeIndex==1){
			clearInterval(time);
			var d=0,time=null;
			function Amintate(){
				$("#box img").css("display","none");
				$("#box img").eq(d).css("display","block");
				if (d>=71) {
					d=0;
				}
				d++;
				if(swiper1.activeIndex!==1){
					clearInterval(time);
				}
			};
			time=setInterval(Amintate,100);
		}
		if(swiper1.activeIndex==3){
			$(".slide_4_jihe").children().css("display","block");
			$(".slide_4_ren").children().css("display","block");
			$(".slide_4_ren1").animate({
				left:'2.52rem',
				top:'2.5rem',
				height:'1.39rem',
				width:'1.39rem'
			},2000);
			$(".slide_4_ren2").animate({
				left:'5.36rem',
				top:'3.52rem',
				height:'1.54rem',
				width:'1.54rem'
			},2000);
			$(".slide_4_ren3 ").animate({
				left:'5.58rem',
				top:'6.3rem',
				height:'1.32rem',
				width:'1.32rem'
			},2000);
			$(".slide_4_ren4").animate({
				left:'5.22rem',
				top:'8.28rem',
				height:'1.39rem',
				width:'1.39rem'
			},2000);
			$(".slide_4_ren5").animate({
				left:'2.88rem',
				top:'9.6rem',
				height:'1.54rem',
				width:'1.54rem'
			},2000);
			$(".slide_4_ren6").animate({
				left:'0.8rem',
				top:'8.4rem',
				height:'1.39rem',
				width:'1.39rem'
			},2000);
			$(".slide_4_ren7").animate({
				left:'0.98rem',
				top:'6.52rem',
				height:'1.54rem',
				width:'1.54rem'
			},2000);
			$(".slide_4_ren8").animate({
				left:'0.25rem',
				top:'3.76rem',
				height:'1.69rem',
				width:'1.69rem'
			},2000);
			$(".slide_4_ty6").animate({
				left:'0.36rem',
				top:'0.96rem',
				height:'0.76rem',
				width:'0.76rem'
			},2000);
			$(".slide_4_ty12").animate({
				left:'4.45rem',
				top:'1.82rem',
				height:'0.44rem',
				width:'0.44rem'
			},2000);
			$(".slide_4_ty9").animate({
				left:'6.03rem',
				top:'1.43rem',
				height:'1.27rem',
				width:'1.27rem'
			},2000);
			$(".slide_4_ty5").animate({
				left:'0.42rem',
				top:'5.72rem',
				height:'0.13rem',
				width:'0.13rem'
			},2000);
			$(".slide_4_ty15").animate({
				left:'1.92rem',
				top:'5.73rem',
				height:'0.36rem',
				width:'0.36rem'
			},2000);
			$(".slide_4_ty8").animate({
				left:'3.1rem',
				top:'4.98rem',
				height:'0.13rem',
				width:'0.13rem'
			},2000);
			$(".slide_4_ty1").animate({
				left:'3.97rem',
				top:'4.47rem',
				height:'0.7rem',
				width:'0.7rem'
			},2000);
			$(".slide_4_ty4").animate({
				left:'7.32rem',
				top:'3.86rem',
				height:'0.74rem',
				width:'0.73rem'
			},2000);
			$(".slide_4_ty3").animate({
				left:'5.24rem',
				top:'6.04rem',
				height:'0.2rem',
				width:'0.2rem'
			},2000);
			$(".slide_4_ty11").animate({
				left:'4.78rem',
				top:'6.98rem',
				height:'0.08rem',
				width:'0.08rem'
			},2000);
			$(".slide_4_ty14").animate({
				left:'-1.32rem',
				top:'7.5rem',
				height:'2.4rem',
				width:'2.16rem'
			},2000);
			$(".slide_4_ty10").animate({
				left:'3.01rem',
				top:'7.8rem',
				height:'0.13rem',
				width:'0.13rem'
			},2000);
			$(".slide_4_ty13").animate({
				left:'3.84rem',
				top:'8.45rem',
				height:'0.3rem',
				width:'0.3rem'
			},2000);
			$(".slide_4_ty2").animate({
				left:'5.26rem',
				top:'7.27rem',
				height:'0.49rem',
				width:'0.49rem'
			},2000);
			$(".slide_4_ty16").animate({
				left:'4.72rem',
				top:'10.05rem',
				height:'0.78rem',
				width:'0.78rem'
			},2000);
			$(".slide_4_ty17").animate({
				left:'0.39rem',
				top:'11.77rem',
				height:'2.24rem',
				width:'2.42rem'
			},2000);
			$(".slide_4_ty7").animate({
				left:'6.59rem',
				top:'11.25rem',
				height:'0.28rem',
				width:'0.28rem'
			},2000);
			$(".slide_4_ren img").click(function(){
				$(".slide_4_text").children().hide();
				$(".slide_4_ren img").hide();
				$("#outer").show();
				$(".slide img").css({
					animation: "scale1 1s linear 0s normal forwards",
				});
				$(".slide_4_close").show();
				$(".slide_4_dianji").hide();
				var t=$(this).index();
				var mySwiper2 = new Swiper ('.swiper2', {
					direction: 'horizontal',
					loop: true,
					initialSlide :t,
				    // 如果需要前进后退按钮
				    nextButton: '.swiper-button-next',
				    prevButton: '.swiper-button-prev'
				}); 
			})
			$(".slide_4_close").click(function(){
				$(this).hide(1000);
				$(".slide img").css({
					animation: "scale2 1s linear 0s normal forwards",
				});
				setTimeout(function(){
	   	  			$(".slide_4_ren img").show(1000);
	   	  			$(".slide_4_dianji").show(500);
	   	  			$("#outer").hide();
	   	  		},1000)
			})
		}else{
			$(".slide_4_jihe").children().css({
				display:"none",
				left:"3rem",
				top:"5.82rem",
				height:"0rem",
				width:"0rem"
			});
			$(".slide_4_ren").children().css({
				display:"none",
				left:"3rem",
				top:"5.82rem",
				height:"0rem",
				width:"0rem"
			});
		}
		if(swiper1.activeIndex==4){
			var i=0;
			var time1=setInterval(function(){
				$(".slide_5_m").children().eq(i).slideDown(1000).css("animation","translate1 1s linear 1s normal forwards");
				$(".slide_5_shadow img").eq(i).css("animation","opacity1 1s linear 1s normal forwards");
				i++;
				if(i>=10){
					clearInterval(time1);
				}
			},500);
			$(".slide_5_m p").click(function(){
				$(".slide_5_dj").hide();
				var index=$(this).index();
				$(".slide_5_jieshao>img").eq(index).css({
					animation:"show"+(index+1)+" 1s 0s linear normal forwards"
				})
				setTimeout(function(){
					$(".close").show(500);
				},1000)
				$(".close").click(function(){
					$(".slide_5_jieshao img").eq(index).css({
					animation:"hide"+(index+1)+" 1s 0s linear normal forwards"
					});
					$(this).hide(500);
					setTimeout(function(){
						$(".slide_5_dj").show();
					})
				})
			})
		
		}else{
			$(".slide_5_m").children().slideUp(1000).css({transform:"translate(0,0)"});
			$(".slide_5_shadow img").css({
					animation:"opacity2 0s 0s linear normal forwards",
				})
				for(var k=0;k<=9;k++){
					$(".slide_5_jieshao p").eq(k).css({
						animation:"hide"+(k)+" 1s 0s linear normal forwards",
					})
				}
		}
		if(swiper1.activeIndex==5){
			$(".slide_6_sanjiaoti").children().css("display","block");
			$(".slide_6_s1").css("animation","s1 1.5s linear both");
			$(".slide_6_s2").css("animation","s2 1.5s linear both");
			$(".slide_6_s3").css("animation","s3 1.5s linear both");
			$(".slide_6_s4").css("animation","s4 1.5s linear both");
			$(".slide_6_s5").css("animation","s5 1.5s linear both");
		}else{
			$(".slide_6_sanjiaoti").children().css("display","none");
		}
		if(swiper1.activeIndex==6){
			setTimeout(function(){
				$(".slide_7_S").slideDown(1000);
			},2500)
		}else{
			$(".slide_7_S").css("display","none")
		}
		if(swiper1.activeIndex==7){
			$(".slide_8_sanjiao").children().css("display","block");
			$(".p8-1").css("animation","p81 1s linear 0s normal forwards")
			$(".p8-2").css("animation","p82 1s linear 0s normal forwards")
			$(".p8-3").css("animation","p83 1s linear 0s normal forwards")
			$(".p8-4").css("animation","p84 1s linear 0s normal forwards")
			$(".p8-5").css("animation","p85 1s linear 0s normal forwards")
			$(".p8-6").css("animation","p86 1s linear 0s normal forwards")
			
		}else{
			$(".slide_8_sanjiao").children().css("display","none");
			
		}
		if(swiper1.activeIndex==8){
			$(".p9-1").animate({},1000);
			$(".p9-2").animate({},1000);
			$(".p9-3").animate({},1000);
			$(".p9-4").animate({},1000);
			$(".p9-5").animate({},1000);
			$(".p9-6").animate({},1000);
		}
 	swiperAnimate(swiper1); //每个slide切换结束时也运行当前slide动画
  	} 
}) 

}

