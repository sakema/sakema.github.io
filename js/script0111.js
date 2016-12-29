	$(document).ready(function(){
		var color=Math.floor(Math.random()*4);
		color=++color;
		var colorbutton='e3ddbf';
		switch(color) {
		  case 1:  colorbutton='b9d2e7';break;
		  case 2:  colorbutton='faccd7';break;
		  case 3:  colorbutton='bad2bf';break;
		  case 4:  colorbutton='e3ddbf';break;
		}
		$(".j-enter-club").css('background-color','#'+colorbutton);
		
		var h=$(".j-menu").css('height');
		$(".main-menu__dropdown").css('top', h);
		
	})
	
	/*$(function menu-height(){
		$(".dropdown").css('top', h);
	})*/
	
	$(function(){
		$(".j-menu").mouseenter(function(){
			$(".j-menu").removeClass("active");
			$($(this).addClass('active'));
		})
		
		
		$(".j-menu").mouseout(function(){
			/*$($(this).parent("li").removeClass('active'));*/
			$(".j-menu").removeClass("active");
			
		})
		
		$(".j-show-wishes").click(function(){
			$(".hidden-window").slideToggle("slow");
			$(".hidden-window--wishlist").show();
		})
		$(".hidden-window__close").click(function(){
			$(".hidden-window").hide("fast");
			$(".hidden-window--wishlist").hide();
			$(".hidden-window--bag").hide();
		})
		$(".j-show-shop").click(function(){
			$(".hidden-window").slideToggle("slow");
			$(".hidden-window--bag").show();
		})
		
		$(".j-enter-club").click(function(){
			$(".notification").fadeToggle("slow");
		})
		/*$(".scroll-arrows__left").click(function(){
			var x=$(".main-top__bg-image").css('left');
			alert(x);
			$(".main-top__bg-image").animate(function(){
				left:$(".main-top__bg-image").left-4;
			},1000);
			return(false);
		})*/
		
		$(".scroll-arrows__right").click(function(){
			var p=$(".main-top").css('background-position');
			p=p.split(" ");
			p[0]=(parseInt(p[0])+4)+'px';

			$(".main-top").css('background-position',p.join(' '));
			return(false);
		})
		$(".scroll-arrows__left").click(function(){
			var p=$(".main-top").css('background-position');
			p=p.split(" ");
			p[0]=(parseInt(p[0])-4)+'px';

			$(".main-top").css('background-position',p.join(' '));
			return(false);
		})
		$(".events-item").click(function(){			
			$(".events-item__more-info").hide();
			$(this).children(".events-item__more-info").show();
		})
		$(".events-item__close").click(function(){
			$(".events-item__more-info").hide();
			return(false);
		})
		
	/*	(function($) {
			$(function() {
			  $('.footer__up').click(function() {
				$('html, body').animate({scrollTop: 0},1000);
				return false;
			  })

			})
			})*/
		$(function (){
			$(".footer__up").hide();

			$(window).scroll(function (){
				if ($(this).scrollTop() > 4000){
					$(".footer__up").fadeIn();
				} else{
					$(".footer__up").fadeOut();
				}
			});

			$(".footer__up").click(function (){
				$("body,html").animate({
					scrollTop:0
				}, 800);
				return false;
			});
		});
	
	})
	/*$(function(){
		$(".wide-search").click(function(){
			if ($($(this).attr('href')).hasClass('active')){
				$($(this).attr('href')).removeClass('active');
			} else{
				$(".hidden_window").removeClass('active');
				$($(this).attr('href')).removeClass('active');
				$($(this).attr('href')).addClass('active');
				
			}
			return false;
		})
	})
	
	$(function(){
		$(".add-advert").click(function(){
			
			if ($(".add-advert-window").hasClass('active')){
				$(".add-advert-window").removeClass('active');
				$(".hidden_window").removeClass('active');
			} else{
				$(".hidden_window").removeClass('active');
				$(".add-advert-window").addClass('active');
			}
				
			
			return false;
		})
	})
	
	$(function(){
		$(".show-full-advert").click(function(){
			
			if ($(".see-full-advert-window").hasClass('active')){
				$(".see-full-advert-window").removeClass('active');
				$(".hidden_window").removeClass('active');
			} else{
				$(".hidden_window").removeClass('active');
				$(".see-full-advert-window").addClass('active');
			}
				
			
			return false;
		})
	})
	
	$(function(){
		$(".hidden_window_trigger").click(function(){
			if ($($(this).attr('href')).hasClass('active')){
				$(".popup").removeClass('active');
				$(".hidden_window").removeClass('active');
			} else{
				$(".hidden_window").removeClass('active');
				$(".popup").removeClass('active');
				$($(this).attr('href')).addClass('active');
				$(".popup").addClass('active');
			}
			return false;
		})
	})
	
	$(function(){
		$(".hidden_close").click(function(){
			$(".hidden_window").removeClass('active');
			$(".popup").removeClass('active');
		})
	})
	
	$(function(){
		$(".popup").click(function(){
			$(".hidden_window").removeClass('active');
			$(".popup").removeClass('active');
		})
	})
	
	/*$(function(){
		$(".button-search").click(function(){
			if ($(".search-results").hasClass('active')){
				$(".search-results").removeClass('active');
				$(".hidden_window").removeClass('active');
			} else{
				$(".hidden_window").removeClass('active');
				$(".search-results").addClass('active');
			}
			return false;
		})
	})*/
	

/*	$(function(){
		$(".result-show").click(function(){
				$(".search-results-block").removeClass('active');
				$($(this).attr('href')).addClass('active');
				
		})
	})
	$(function(){
		 $(".result-show").click(function(){
			 if  ($(".result1-show").hasClass('active')){
				$(".search-results-block").removeClass('result1');
			} 
			 if  ($(".result2-show").hasClass('active')){
				$(".search-results-block").removeClass('result2');
			} 
 			 if  ($(".result3-show").hasClass('active')){
				$(".search-results-block").removeClass('result3');
			}
			($(".result-show").removeClass('active'));
			$(".search-results-block").addClass($(this).data('added'));
			$($(this).addClass('active'));
			return false;
		 })	
		
			 
	})		 */
	 
			 
			 
	