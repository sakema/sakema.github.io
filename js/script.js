	$(document).ready(function(){
		//***************button-color-random-change*****************/
		var color=Math.floor(Math.random()*4);
		color=++color;
		switch(color) {
		  case 1:  $(".j-enter-club").addClass("btn--blue");break;
		  case 2:  $(".j-enter-club").addClass("btn--yellow");break;
		  case 3:  $(".j-enter-club").addClass("btn--pink");break;
		  case 4:  $(".j-enter-club").addClass("btn--green");break;
		}
	$(".hidden-window").css('top',$(".notification").css('height'));

		/*************************************************/
		
		$(".clients__item a").addClass("a-underline");
		$(".clients__item.active a").removeClass("a-underline");

		$(".owl-carousel").owlCarousel({
			    // Most important owl features
				loop:true,
				autoWidth:true,
				items : 2,
				autoPlay:false,
				nav:true,
				navText: 	["&larr;","&rarr;"],
				dots:false,
				responsive : {
						
						// breakpoint 1281 up
						1281 : {
								margin:36
						},
						// breakpoint 770 up
						770 : {
								margin:36
						},
						640 : {
								margin:16,
								center:true
						}
				}
		});
		
		$(".owl-carousel2").owlCarousel({
				loop:true,
				autoWidth:false,
				items : 3,
				autoPlay:false,
				nav:true,
				navText: 	["",""],
				dots:false,
				margin:0,
				responsive : {
					1280:{
						items: 3
					},
					640:{
						items: 2,
						margin:16
					}
				}
		});
		
			$(".owl-carousel3").owlCarousel({
				loop:true,
        center:false,
				autoWidth:true,
				items : 2,
				autoPlay:false,
				nav:true,
				navText: 	["&larr;","&rarr;"],
				dots:false,
				margin:8,
				URLhashListener:true,
        startPosition: 'URLHash',
				responsive : {
					1280:{
						margin:8,
					},
					640:{
						margin:16,
						nav:false,
					}
				}
		});
	})
	
	$(function(){
		$(".j-enter-club").click(function(){
			$(".notification").slideUp("slow");
			$(".hidden-window").css('top','0');
		});
		
		/*************************************************/
		$(".j-show-wishes").click(function(){
			$(".hidden-window--wishlist").animate({right:"0"},300);
			document.body.style.overflow = "hidden";
			right=$(".hidden-window--wishlist").css('right');
			return false;
		})
		$(".j-show-cart").click(function(){
			$(".hidden-window--bag").animate({right:"0"},300);
			document.body.style.overflow = "hidden";
			right=$(".hidden-window--wishlist").css('right');
			return false;
		})
		
		$(".hidden-window__close").click(function(){
			$(".hidden-window").animate({right:(right)},300);
			document.body.style.overflow = "auto";
		})
		
		/*********************** change background of menu ********************/
		$(window).scroll(function (){
			/*var introd_height=$(".introduction").height();
			var header_height=$(".main-menu").height()+$(".notification").height();
			var bg_height=(introd_height-header_height-header_height);*/
				
				if ($(this).scrollTop() > 100){
					$(".main-menu").addClass('main-menu--colored');
				} else {
					$(".main-menu").removeClass('main-menu--colored');
				}
		/**************** VIEWPORT/*******************************/
			
			$(".scroll-up:in-viewport").stop().fadeIn("slow");	
			$(".scroll-up:below-the-fold" ).stop().fadeOut("slow");
		
		});
		$(".scroll-up").click(function (){
				$("body,html").animate({scrollTop:0	}, 800);
				return false;
			});
			
		/**********************sub menu***************************/
		$(".j-menu").mouseenter(function(){
			$(".j-menu").removeClass("active");
			$($(this).addClass('active'));
			/*h_old=$(".j-menu").parents(".main-menu__nav").height();
			var h1=$(this).children(".sub-menu").height();
			console.log(h_old+' - ' +h1);
							if (h1<h_old) {
								$(".j-menu").height(h1);
							}*/
		})
		$(".j-menu").mouseout(function(){
			$(".j-menu").removeClass("active");
			/*$(".j-menu").height(h_old);*/
		})
		/*********************************************/
		$(".j-country").click(function(){
			$(".j-country").removeClass("active");
			$($(this).addClass('active'));
			return(false);
		})
		/**********************************************************/
		$(".cooperate-slider-item__link").click(function(){
			$(".cooperate__hidden-information").show("fast");
			return(false);
		})
		$(".cooperate__hidden-close").click(function(){
			$(".cooperate__hidden-information").hide("fast");
			return(false);
		})
		/***********************CATALOG_VIEW**************************/
		$(".j-2cols").click(function(){
			$(".j-4cols").removeClass("active");
			$($(this).addClass('active'));
			$(".catalog__list").removeClass("view-4cols");
			$(".catalog__list").addClass("view-2cols");
			return(false);
		})
		
		$(".j-4cols").click(function(){
			$(".j-2cols").removeClass("active");
			$($(this).addClass('active'));
			$(".catalog__list").removeClass("view-2cols");
			$(".catalog__list").addClass("view-4cols");
			return(false);
		})

		/**********************SUB_FILTER********************************/
		$(".sub-filter li").click(function(){
			$(this).parent().children(".sub-filter li").removeClass('active');
			$(this).addClass('active');
			var new_html=$(this).text();
			$(this).parents(".j-filter").children(".filter-link").html(new_html);
			$(".sub-filter").fadeOut("slow");
		})
		$(".filter-link").bind('click',function(event){	
			$(event.target).parent().children(".sub-filter").toggle();
			return(false);
		})
		/*************************************************************/
		
		$(".j-more").click(function(){			
			$(".events-item__more-info").hide(); 
			$(this).parent(".events-item").children(".events-item__more-info").show();
			return(false);
		})
		
		$(".events-item__close").click(function(){
			$(".events-item__more-info").hide();
			return(false);
		})
		/************************************************************/
			$(".services-tabs__item").on('click',function(){
				$(".services-tabs__item").removeClass("active");
				$(this).addClass("active");
				var tab_c=$(".services-tabs li").length;
				var service_n=$(this).children().attr('id');
				for (i=0;i<tab_c;i++){
					$(".services"+String(i)).hide();};
				 $("."+String(service_n)).show();
				return(false);
				
			})
			/*********************************OPACITY**************************/
			$(".j-opacity").on('click',function(){
				if ($(this).hasClass("services-item__samples--opacity30")){
					$(this).parent().children(".services-item__samples--opacity100").addClass("services-item__samples--opacity30");
					$(this).parent().children(".services-item__samples--opacity100").removeClass("services-item__samples--opacity100");
					$(this).removeClass("services-item__samples--opacity30");
					$(this).addClass("services-item__samples--opacity100");
				}
				
			})
			/************************CLIENTS****************************************/
			$(".clients__item").on('click',function(){
				$(".clients__item").removeClass('active');
				$(this).addClass('active');
				$(".clients__item a").addClass("a-underline");
				$(".clients__item.active a").removeClass("a-underline");
				return(false);
			});
			
			$(".show-hidden-menu").click(function(){			
			$(".main-menu__nav").show(); 
			document.body.style.overflow = "hidden";
			$(".close-hidden-menu").show(); 
			return(false);
		})
		
		$(".close-hidden-menu").click(function(){			
			$(".main-menu__nav").hide(); 
       document.body.style.overflow = "auto";
			$(".close-hidden-menu").hide(); 
			return(false);
		})
		
		$(".catalog-filters-small__show").click(function(){			
			$(".catalog-filters-small__content").toggle(); 
			return(false);
		})
		/**************************************/
		$(".main-menu__lang li a").click(function(){
			$(".main-menu__lang li a").removeClass("active");
			$($(this).addClass('active'));
			return(false);
		})
			
	})

			 
	