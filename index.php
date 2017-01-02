<?php get_header(); ?> 
<div class="page-body">	
	<section class="introduction">
		<div id="slider">
			<div class="introduction-item slide">
			  <h3>Представляем наш первый look book</h3>
			  <h2>ЛЕТНЕЙ КОЛЛЕКЦИИ</h2>
			</div>
			<div class="introduction-item slide">
			  <h3>Заголовок</h3>
			  <h2>второго экрана</h2>
			</div>
		</div>
			<div class="introduction-social">
				<div class="social-links">
					<a href="#"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/facebook-black.png"  alt=""/></a>
					<a href="#"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/vk-black.png"  alt=""/></a>
					<a href="#"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/inst-black.png"  alt=""/></a>
				</div>
			</div>
			<div class="introduction-arrows">
			  <a href="#" id="prewbutton" class="introduction-arrows__left j-introduction-left"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/arrow-left.png"  alt=""/></a>
			  <a href="#" id="nextbutton" class="introduction-arrows__right j-introduction-left"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/arrow-right.png"  alt=""/></a>
			</div>
	</section>
	<section class="collections">
		<div class="wrapper clearfix">
			<a href="#" class="collections-item collections-item_first">
				<div class="collections-item__content">
					<h3 class="collections-item__title">Новые летние коллекции:</h3>
					<div class="collections-item__link a-underline">Flowers и black&white!</div>
				</div>
			</a>
			<a href="#" class="collections-item collections-item_third">
				<div class="collections-item__content">
					<h3 class="collections-item__title">Невероятная</h3>
					<div class="collections-item__link a-underline">Fox collection</div>
				</div>
			</a>
			<a href="#" class="collections-item collections-item_second">
				<div class="collections-item_second__img"></div>
				<div class="collections-item_second__content">
					<h3 class="collections-item__title">Все коллекции</h3>
					<div class="button-white-black btn_filling">
            <div class="btn__wrapper">
              <div class="btn__fill"></div>
              <div class="btn__content"></div>
            </div>
				  </div>
				</div>
			</a>
		</div>
	</section>
	<section class="catalog">
		<div class="wrapper clearfix">
      <a href="#" class="catalog-item">
        <div class="catalog-item__img catalog-item__img--switch">
					<img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/catalog-item-image1.png" alt="" />
					<img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/catalog-item-image2.png" alt="" />
          <div href="#" class="catalog-item__to-wish"></div>
        </div>
        <div class="catalog-item__info">
          <div class="catalog-item__info-left">
            <div class="catalog-item__name">Бультерьер</div>
            <div class="catalog-item__category">Значки</div>
          </div>
          <div class="catalog-item__info-right">
            <div class="catalog-item__old-price"></div>
            <div class="catalog-item__price">700 Р</div>        
            <div href="#" class="button-white-black btn_filling">
               <div class="btn__wrapper">
                <div class="btn__fill"></div>
                <div class="btn__content">Купить</div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a href="#" class="catalog-item">
        <div class="catalog-item__img catalog-item__img--switch">
          <img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/catalog-item-image1.png" alt="" />
					<img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/catalog-item-image2.png" alt="" />
           <div class="catalog-item__to-wish"></div>
        </div>
        <div class="catalog-item__info">
          <div class="catalog-item__info-left">
            <div class="catalog-item__name">Французский бульдог</div>
            <div class="catalog-item__category">Тату</div>
          </div>
          <div class="catalog-item__info-right">
            <div class="catalog-item__old-price">700 Р</div>
            <div class="catalog-item__price catalog-item__new-price">500 Р</div>        
            <div href="#" class="button-white-black btn_filling">
               <div class="btn__wrapper">
                <div class="btn__fill"></div>
                <div class="btn__content">Купить</div>
              </div>
            </div>
          </div>
        </div>
      </a>
      <a href="#" class="catalog-item">
        <div class="catalog-item__img catalog-item__img--switch">
          <img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/catalog-item-image3.png" alt="" />
					<img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/catalog-item-image1.png" alt="" />
           <div class="catalog-item__to-wish"></div>
        </div>
        <div class="catalog-item__info">
          <div class="catalog-item__info-left">
            <div class="catalog-item__name">Соцветие пиона</div>
            <div class="catalog-item__category">Тату</div>
          </div>
          <div class="catalog-item__info-right">
            <div class="catalog-item__old-price"></div>
            <div class="catalog-item__price">1 200 Р</div>        
            <div class="button-white-black btn_filling">
               <div class="btn__wrapper">
                <div class="btn__fill"></div>
                <div class="btn__content">Купить</div>
              </div>
            </div>
          </div>
        </div>
      </a>
		</div>
	</section>
	<section class="events">
		<div class="wrapper clearfix">
			<div class="events__left">
				<h3 class="events__title">
				  <a href="#">АНОНСЫ МЕРОПРИЯТИЙ И ФЕСТИВАЛЕЙ В РАЗНЫХ ГОРОДАХ МИРА</a>
				 </h3>
				  <a href="#" class="button-black-white btn_filling">
					 <div class="btn__wrapper">
					  <div class="btn__fill"></div>
					  <div class="btn__content">Все события</div>
					</div>
				  </a>
			</div>
			<div class="events__right">
				<div class="events-tabs">
					<ul>
						<li><a href="#" class="active j-country">Россия</a></li>
						<li><a href="#" class="j-country">Европа</a></li>
						<li><a href="#" class="j-country">Все страны</a></li>
					</ul>
				</div>
				<div class="events__list clearfix">
					<a href="#" class="events-item events-item--photo" STYLE="background:transparent url(<?php echo esc_url(get_template_directory_uri()); ?>/img/events-1.jpg) center center no-repeat; background-size:cover;">
						<div class="events-item__layout" style="background:rgba(3,47,51,0.52);"></div>
						<div class="events-item__date">17/08/2016</div>
						<div class="events-item__title"><h3>Vogue Fashion's Night Out</h3></div>
						<div class="events-item__place">Россия, Москва</div>
						<div class="events-item__more j-more"></div>
						<div class="events-item__more-info">
						  <div class="events-item__close"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/close.png"  alt=""/></div>
						  <div class="events-item__title">Vogue Fashion's Night Out</div>
						  <div class="events-item__date">17/08/2016</div>
						  <div class="events-item__place">Россия, Москва</div>
						  <div class="events-item__address">ТЦ “Цветной”, секция 543, Республика</div>
						  <div class="events-item__link" href="#">Cтраница события</div>
						</div>
					</a>
					<a href="#" class="events-item events-item--photo"  STYLE="background:transparent url(<?php echo esc_url(get_template_directory_uri()); ?>/img/events-2.jpg) center center no-repeat; background-size:cover;">
						<div class="events-item__layout" style="background:rgba(3,47,51,0.52);"></div>
						<div class="events-item__date">1-2/09/2016</div>
						<div class="events-item__title"><h3>Barcelona Tattoo Convention’16</h3></div>
						<div class="events-item__place">Spain, Barcelona</div>
						<div class="events-item__more j-more"></div>
						<div class="events-item__more-info">
						  <div class="events-item__close"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/close.png"  alt=""/></div>
						  <div class="events-item__title">Barcelona Tattoo Convention’16</div>
						  <div class="events-item__date">1-2/09/2016</div>
						  <div class="events-item__place">Spain, Barcelona</div>
						  <div class="events-item__address">ТЦ “Цветной”, секция 543, Республика</div>
						  <div class="events-item__link">Cтраница события</div>
						</div>
					</a>
					<a href="#" class="events-item events-item--color" STYLE="background:#98e0e7;">
						<div class="events-item__date">1-2/09/2016</div>
						<div class="events-item__title"><h3>Micro ComicCon</h3></div>
						<div class="events-item__place">Россия, С-Петербург</div>
						<div class="events-item__more j-more"></div>
						<div class="events-item__more-info">
						  <div class="events-item__close"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/close.png"  alt=""/></div>
						  <div class="events-item__title">Micro ComicCon</div>
						  <div class="events-item__date">1-2/09/2016</div>
						  <div class="events-item__place">Россия, С-Петербург</div>
						  <div class="events-item__address">ТЦ “Цветной”, секция 543, Республика</div>
						  <div class="events-item__link">Cтраница события</div>
						</div>
					</a>
					<a href="#" class="events-item events-item--photo"  STYLE="background:transparent url(<?php echo esc_url(get_template_directory_uri()); ?>/img/events-3.jpg) center center no-repeat; background-size:cover;">
						<div class="events-item__layout" style="background:rgba(3,47,51,0.52);"></div>
						<div class="events-item__date">12/09/2016</div>
						<div class="events-item__title"><h3>Vogue Fashion's Night Out</h3></div>
						<div class="events-item__place">Россия, С-Петербург</div>
						<div class="events-item__more j-more"></div>
						<div class="events-item__more-info">
						  <div class="events-item__close"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/close.png"  alt=""/></div>
						  <div class="events-item__title">Vogue Fashion's Night Out</div>
						  <div class="events-item__date">12/09/2016</div>
						  <div class="events-item__place">Россия, С-Петербург</div>
						  <div class="events-item__address">ТЦ “Цветной”, секция 543, Республика</div>
						  <div class="events-item__link">Cтраница события</div>
						</div>
					</a>
					<a href="#" class="events-item events-item--color"  STYLE="background:#f6c2ce;">
						<div class="events-item__date">17/08/2016</div>
						<div class="events-item__title"><h3>Barcelona Tattoo Convention’16</h3></div>
						<div class="events-item__place">Россия, Москва</div>
						<div class="events-item__more j-more"></div>
						<div class="events-item__more-info">
						  <div class="events-item__close"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/close.png"  alt=""/></div>
						  <div class="events-item__title">Barcelona Tattoo Convention’16</div>
						  <div class="events-item__date">17/08/2016</div>
						  <div class="events-item__place">Россия, Москва</div>
						  <div class="events-item__address">ТЦ “Цветной”, секция 543, Республика</div>
						  <div class="events-item__link">Cтраница события</div>
						</div>
					</a>
					<a href="#" class="events-item events-item--photo"  STYLE="background:transparent url(<?php echo esc_url(get_template_directory_uri()); ?>/img/events-4.jpg) center center no-repeat; background-size:cover;">
						<div class="events-item__layout" style="background:rgba(3,47,51,0.52);"></div>
						<div class="events-item__date">17/092016</div>
						<div class="events-item__title"><h3>Geek Picnic</h3></div>
						<div class="events-item__place">Россия, С-Петербург</div>
						<div class="events-item__more j-more" ></div>
						<div class="events-item__more-info">
						  <div class="events-item__close"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/close.png"  alt=""/></div>
						  <div class="events-item__title">Geek Picnic</div>
						  <div class="events-item__date">17/09/2016</div>
						  <div class="events-item__place">Россия, С-Петербург</div>
						  <div class="events-item__address">ТЦ “Цветной”, секция 543, Республика</div>
						  <div class="events-item__link" >Cтраница события</div>
						</div>
					</a>
				</div>
			</div>
		</div>
  </section>
  <section class="blog">
    <div class="wrapper clearfix">
      <div class="blog__left">
        <a href="about.html"><h3 class="blog__title a-underline">ПУБЛИКАЦИИ</h3></a>
        <div class="blog__list">
          <div class="blog-item">
            <h4 class="blog-item__title">“На кого подписаться: Акварельные татуировки Саши Унисекс”</h4>
            <div class="blog-item__tags">Harpersbazaar</div>
          </div>
          <div class="blog-item">
            <h3 class="blog-item__title">“Кто создает моду на нетрадиционные татуировки и к чему это уже привело”</h3>
            <div class="blog-item__tags">Vogue Italy</div>
          </div>
          <div class="blog-item">
            <h4 class="blog-item__title">“An event organised by Corpus Domini  artist Sasha Unisex' art”</h4>
            <div class="blog-item__tags">Trendspace</div>
          </div>
          <div class="blog-item">
            <h4 class="blog-item__title">“Писаные красавицы”</h4>
            <div class="blog-item__tags">Wonderzine</div>
          </div>
        </div>
      </div>
      <div class="blog__right">
        <div class="blog-item">
					<div class="blog-item__img"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/main-prints-img.jpg" alt=""/></div>
          <h4 class="blog-item__title">“Новый Look Book на Lenta.ru”</h4>
          <div class="blog-item__tags">Lenta.ru</div>
        </div>
      </div>
    </div>
  </section>
  <div class="want-tatoo">           
    <a href="#" class="button-black-white btn_filling">
       <div class="btn__wrapper">
        <div class="btn__fill"></div>
        <div class="btn__content">ХОЧУ ТАТУ</div>
      </div>
    </a>
  </div>
</div>	
<?php get_footer(); ?>