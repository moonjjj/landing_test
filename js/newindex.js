$(document).ready(function() {

    // fullpage
    $('#fullpage').fullpage({		      
      sectionsColor: ['#020202', '#fff', '#fff','#fff','#fff','#020202'],
      anchors: ['sec1', 'sec2', 'sec3','sec4', 'sec5','sec6'],
      menu: '#menu',
      scrollingSpeed: 1000,
      // continuousVertical: true,
      navigation: true,
      navigationTooltips:['Gongsaero','Solution','Data Analysis','Vision','Contact','New Construction'],
      showActiveTooltip:false,
      resetSliders: true,
      loopBottom: true,
	    loopTop: false,

      scrollBar: true,
      onLeave: function(origin, index, direction) {
        // 빠른전환으로 이벤트중복시 fullpage와 swiper전환시점 분리막기
        $('#fullpage').on('scroll touchmove mousewheel', function(event) {                    
          event.preventDefault();
          event.stopPropagation();
          return false;
        });

        

        swiper.mousewheel.disable();

        // console.log(origin); //전거
        // console.log(destination); //현재거
        // console.log(direction); //위로?아래로?

        if(index === 1){
        }
        if(index === 6){
          // more develop
          const text = $('.typing_text').text();
          console.log(text);
          console.log(text.length);
          // if(text)
          if(text.length == 0){
            typing(index);
          } else if(text.length <= 18){
            $('.typing_text').text('');
          }

          //6
          $('.last_bg_img').css('background-position','0 -150px');

        }


      },
      afterLoad: function(anchorLink, index) {   
        console.log(anchorLink);   
        console.log(index);   
        // 전환이 끝난후 이벤트풀기                               
        $('#fullpage').off('scroll mousewheel');      
        if(!$(".fp-completely .swiper-wrapper").length > 0) $('#fullpage').off('touchmove'); // 모바일분기
        if(swiper) swiper.mousewheel.enable();
        // if(index == 4) $.fn.fullpage.setAllowScrolling(false); // 마지막센션에서 올라올때 자동방지

        // afterLoad: function(origin, destination, direction){
          //section 2
          // if(index === 1){
          //   console.log('~first');
          //   $('.typing_text').text('');
          //   // $('.main_container').css('margin', '0px auto');
          //   // $('.main_container').css('opacity', '1');
          //   // $('.main_container').css('transform', 'scale(1)');
          //   // $('.main_container canvas').css('max-width', '1400px');
          //   // $('.main_container canvas').css('min-width', '1400px');
          // }
          // if(index === 2){
          //     document.querySelector('.sec2').querySelector('img').style.left = 0 + 'px';
          //     document.querySelector('.sec2').querySelector('span').style.opacity = 1;
          //     $('.full_desc_container .title').css('opacity','1');
          //     $('.full2_container').css('transform','scale(1.3)');
          //   }
          //   if(index === 3){
          //     console.log('~third');
          //     $('.full_desc_container2').css('height','100vh');
          //     $('.full_desc_container2 .title').css('opacity','1');
          //     $('.main_img').css('transform','scale(1)');
          // }
          // if(index === 4){
          //   console.log('~fourth');
          // }
          // if(index === 5){
          //   console.log('~fifth');
          //   $('.typing_text').text('');
          // }
          // if(index === 6){

          //   // more develop
          //   const text = $('.typing_text').text();
          //   console.log(text);
          //   console.log(text.length);
          //   // if(text)
          //   if(text.length == 0){
          //     typing(index);
          //   } else if(text.length <= 18){
          //     $('.typing_text').text('');
          //   }

          //   //6
          //   $('.last_bg_img').css('background-position','0 -150px');

          // }

          //section 3 is using the state classes to fire the animation
          //see the CSS code above!
      // }
      },
      afterSlideLoad: function(section, origin, destination, direction, trigger){
        console.log(section);
        console.log(origin);
        console.log(destination);
        console.log(direction);
        console.log(trigger);
      },
      onSlideLeave: function(section, origin, destination, direction, trigger){
        console.log('-----');
          console.log(section);
          console.log(origin);
          console.log(destination);
          console.log(direction);
          console.log(trigger);
          console.log('-----');
      },
    });           
  
    // swiper
    var length = $(".sec4 .swiper-slide").length;
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 0,
      freeMode: false,
      speed: 1000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      mousewheel: true,
      on: {
        slideChange: function(){        
          var idx = this.activeIndex;
          // 처음과 마지막 슬라이드가 아닐경우 fullpage전환 막기
          if(this.activeIndex != 0 && idx != length) $.fn.fullpage.setAllowScrolling(false);
          if(length == 2 && idx == 0) $.fn.fullpage.setAllowScrolling(false) //슬라이드가 2개밖에 없을때
          // console.log('즉시 : ' + idx);
        },  
        slideChangeTransitionEnd: function(){
          var idx = this.activeIndex;
          // 처음과 마지막 슬라이드일 경우 fullpage전환 풀기
          if(idx == 0 || idx >= length-1) $.fn.fullpage.setAllowScrolling(true);
          // console.log('전환후 : ' + idx);     
        },
        touchMove: function(e) {        
          var startY = e.touches.startY;
          setTimeout(function(){
            if(startY > e.touches.currentY) swiper.slideNext();  
            else swiper.slidePrev();
          },100);        
        },
      }, 
    });            
  });

  const typing = (page) =>{
		const content = "공사의\n새로운\n로드맵을\n만들어 나가는,";
		const text = document.querySelector(".typing_text");
		let i = 0;

		var to = setInterval(function(){
			let txt = content[i++];
			console.log(text);
			console.log(text.innerHTML);
			console.log(content);
			
			text.innerHTML += txt=== "\n" ? "<br/>": txt;

			if(txt === undefined || i === 21){
				clearInterval(to);
			}
			if(page !== 6){
        text.innerHTML = '';
				// alert('asdf');
				clearInterval(to);
				clearTimeout(to);
			}
		}, 300);
	}