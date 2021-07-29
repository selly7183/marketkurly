$(document).ready(function(){

/* header top */
$('#top-close').on('click', function(){
	$("#header-top").slideUp(300);	
	$("header").css("margin-bottom","-40px");
});



/* 네비게이션 */
$(".gnb2>ul>li:first-child").on("mouseover",function(){
	$(".sub-menu").stop().show();
});
$(".gnb2>ul>li:first-child").on("mouseout",function(){
	$(".sub-menu").stop().hide();
});


/* fixed */
$(window).on("scroll",function(){
	var pos=$("html,body").scrollTop();
	$("header")[pos>=40?"addClass":"removeClass"]("headfix");
});


/* 슬라이드 */
$(".slides").bxSlider({	
	auto:true,			//자동실행
	speed:1000,			//슬라이드 전환시간
	pause:1500,			//슬라이드 작동시간
	pager:false,		//슬라이드갯수 도트버튼
	controls:true,		//이전이후 버튼
	autoControls:false
});


/* 탭 */
$(".box2").hide();
$(".box2").first().show();
$(".tabs li").first().addClass("select");

$(".tabs li").on("click",function(){
	event.preventDefault();
	var active=$(this).find("a").attr("href");
	$(".box2").hide();
	$(active).show();
	$(".tabs li").removeClass("select");
	$(this).addClass("select");
});



/* aside 스크롤 */
$(window).scroll(function(){
	var h=$(window).height()/3;
	var pos=$(window).scrollTop()+h;
	$("#aside").stop().animate({"top":pos},1000);
});



/* 오른쪽 하단 top 버튼 */
$(".top-button").on("click",function(){	
	event.preventDefault();		//링크의 기본기능 방지로 깜빡임 없앰 // 기본동작(a태그의 기본기능인 링크기능)을 취소한다.

	$("html,body").stop().animate({
		scrollTop:"0px"		//사람이 스크롤을 움직이니까 그 위치를 잡아주기 위해 pos라는 변수를 사용
	},200,"swing");
});




});


