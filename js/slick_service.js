
// slick
$('.slick_slide').slick({
	// dots: true,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 2500,
	speed: 700,
	slidesToShow: 4,
	adaptiveHeight: true,
	prevArrow:$(".slick_prev"),
	nextArrow:$(".slick_next"),
});

$(document).ready(function(){
var $slide = $('#slide');
var $nav = $('.nav_menu').find('li');
var enableNav = true; //클릭하여 내비게이션 이동 허용 여부(슬라이드 동작 중 클릭되는 것을 방지)
var speed = 1000;//슬라이드 속도
  console.log($nav);
  $(document).on("click", '.nav_menu li', function () {
    if(enableNav){
      console.log(enableNav);
    var slideNo = $(this).index();
    // var = ;
      $slide.slick('slickGoTo', slideNo);
      $nav.removeClass("on");
      $(this).addClass("on");
      if($(this).hasClass("on")){
          $(this).next().slideDown();
        //   $(this).children('img').attr('src','/img/play_icon.png');
        } else{
            $(this).next().slideUp();
            // $(this).children('img').attr('src','/img/play_icon2.png');
        }
      $('video').get(slideNo).play();
      $("#slide_paging").find(".page").text(slideNo +1);
      navStatus();
    }
    console.log(slideNo);


    slideFnc(slideNo);
    
  });

  const slideFnc = (slideNo) =>{
    if(slideNo === 0){
      $('.title').text('1. 자재조달 업무 자동화');
      $('.full2').css('background-color','#2a2a2a');
      $('.change_text').text('공새로는 자재조달 전체 업무 프로세스의 자동화를 제공합니다.');
    } else if(slideNo===1){
      $('.title').text('2. 데이터분석');
      $('.full2').css('background-color','#002863');
      $('.change_text').text('공새로는 데이터기반 건설현장 - 건자재 공급사 매칭 알고리즘 및 건자재 예측∙추천 서비스를 제공합니다.');
    }else if(slideNo===2){
      $('.title').text('3. 적시배송');
      $('.full2').css('background-color','#787878');
      $('.change_text').text('공새로는 현장 위치 / 품목 / 평가 기반 적시배송 건자재 조달이 가능합니다.');
      // $('#video3 source').play();
    }else if(slideNo===3){
      $('.title').text('4. 원가관리');
      $('.full2').css('background-color','#020202');
      $('.change_text').text('공새로는 건자재 주요조건별 시세 정보제공 및 원가분석 서비스를 제공합니다.');
  }
  }


  $(document).on("click", '.slick-dots li', function () {
    var slideNo = $(this).index();
    
    slideFnc(slideNo);
  });

  function checkVisible( elm, eval ) {
        eval = eval || "object visible";
        var viewportHeight = $(window).height(), // Viewport Height
            scrolltop = $(window).scrollTop(), // Scroll Top
            y = $(elm).offset().top,
            elementHeight = $(elm).height();

        if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
        if (eval == "above") return ((y < (viewportHeight + scrolltop)));
    }

  $slide.on('init reInit', function (event, slick) {//페이징이니셜
    if(!slick.$dots) return;
    $("#slide_paging").html('<b class="page">'+ (slick.currentSlide+1) +'</b> / ' + (slick.$dots[0].children.length));
  }).on('beforeChange', function(event, slick, currentSlide, nextSlide){ //슬라이드 변경 시 내비 및 페이징 변경
    //내비 변경
    if(enableNav){
      $nav.removeClass("on");
      $nav.eq(nextSlide).addClass("on");
      navStatus();
    }
    //페이징 변경
    if(!slick.$dots) return;
    var i = (nextSlide ? nextSlide : 0) + 1;
    $("#slide_paging").find(".page").text(i);
  });

  function navStatus(){ //슬라이드 동작 중 내비클릭 방지
    enableNav = false;
    setTimeout(function() {
      enableNav = true;
    }, speed);
  }

  $slide.slick({
    arrows: true,
    prevArrow: false,
    nextArrow: false,
    dots: true,
    infinite: true,
    autoplay:false,
    fade:true,
    speed:speed,
    autoplaySpeed:3000,
    draggable: true
  });
})