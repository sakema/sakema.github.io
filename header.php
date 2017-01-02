<?php
	/**
	 * @package WordPress
	 * @subpackage sasha_unisex
	*/
	global $page, $paged;
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>

	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	
	<title>
		<?php
			wp_title( '-', true, 'right' );
			bloginfo('name');
			$site_description = get_bloginfo('description', 'display');
			if ($site_description && (is_home() || is_front_page())) echo " | $site_description";
			if ($paged >= 2 || $page >= 2) echo ' - ' . sprintf(__('Page %s', 'sasha_unisex'), max($paged, $page));
		?>
	</title>
	
	<link rel="alternate" type="application/rdf+xml" title="RDF mapping" href="<?php bloginfo('rdf_url'); ?>" />
	<link rel="alternate" type="application/rss+xml" title="RSS" href="<?php bloginfo('rss_url'); ?>" />
	<link rel="alternate" type="application/rss+xml" title="Comments RSS" href="<?php bloginfo('comments_rss2_url'); ?>" />
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
	
	<link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>" />	
	
  <link href="<?php echo esc_url(get_template_directory_uri()); ?>/css/style.css?ver=<?php echo time(); ?>" rel="stylesheet" />
	
	<link rel="shortcut icon" href="<?php echo esc_url(get_template_directory_uri()); ?>/favicon.ico" />
  
  <script>
    var ajaxurl = '<?php echo site_url() ?>/wp-admin/admin-ajax.php';
  </script>

  <!--[if lt IE 9]>
    <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
	
  <?php wp_head(); ?>
</head>

<header class="page-header clearfix">
  <div class="notification">
    <div class="notification__text">Вступи в  клуб Sasha Unisex  и получи набор стикеров в подарок при первой покупке!</div>
    <a href="#" class="btn j-enter-club">Вступить!</a>
  </div>
  <div class="main-menu clearfix">
		<a href="#" class="show-hidden-menu"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/menu-hidden.png" alt=""/></a>
		<a href="#" class="close-hidden-menu"></a>
    <div class="main-menu__logo">
      <a class="logo" href="index.html"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/logo.png" alt="" /></a>
    </div>
    <nav class="main-menu__nav">
      <ul>
        <li class="main-menu__item j-menu"><a href="about.html">О Sasha Unisex</a>
				</li>
        <li class="main-menu__item j-menu">
          <a href="shop.html">Магазин</a>
          <div class="sub-menu">
            <div class="sub-menu__column">
              <h4 class="sub-menu__title">Переводные тату</h4>
              <ul class="sub-menu__list">
                <li class="sub-menu__item"><a href="#">classic collection</a></li>
                <li class="sub-menu__item"><a href="#">christmas collection</a></li>
                <li class="sub-menu__item"><a href="#">foxes</a></li>
                <li class="sub-menu__item"><a href="#">kids</a></li>
                <li class="sub-menu__item"><a href="#">dogs</a></li>
                <li class="sub-menu__item"><a href="#">b/w</a></li>
                <li class="sub-menu__item"><a href="#">flowers</a></li>
                <li class="sub-menu__item"><a href="#">asia</a></li>
              </ul>
            </div>
            <div class="sub-menu__column">
              <h4 class="sub-menu__title">Одежда</h4>
              <ul class="sub-menu__list">
                <li class="sub-menu__item"><a href="#">Футболки</a></li>
                <li class="sub-menu__item"><a href="#">Шапки</a></li>
              </ul>
              <h4 class="sub-menu__title">Аксессуары</h4>
              <ul class="sub-menu__list">
                <li class="sub-menu__item"><a href="#">Значки</a></li>
                <li class="sub-menu__item"><a href="#">стикеры</a></li>
                <li class="sub-menu__item"><a href="#">принты большие</a></li>
                <li class="sub-menu__item"><a href="#">принты маленькие</a></li>
              </ul>
            </div>
          </div>
        </li>
        <li class="main-menu__item j-menu"><a href="#">Мероприятия</a></li>
        <li class="main-menu__item j-menu"><a href="mytattoo.html">Услуги</a></li>
        <li class="main-menu__item j-menu"><a href="#">Точки продаж</a></li>
      </ul>
			<ul class="main-menu__lang hidden">
          <li><a href="#" class="active">ru</a></li>
          <li><a href="#">eng</a></li>
      </ul>
    </nav>
	<div class="main-menu__user">
      <a href="#" class="main-menu__enter">Вход</a>
      <a href="#" class="main-menu__wishlist j-show-wishes"><span>4</span></a>
      <a href="#" class="main-menu__cart j-show-cart"><span>10</span></a>
    </div>
  </div>
	<aside class="hidden-window hidden-window--wishlist">
	  <div class="hidden-window__top">
	  	<a href="#" class="wishes"><span>4</span></a>
		  <div class="hidden-window__close">Закрыть</div>
	  </div>
	  <div class="product-list">
	    <ul>
        <li class="product-item">
					<img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/item-img.jpg" alt="" class="product-item__img"/>
					<div class="product-item__info">
						<a href="#" class="product-item__name">Название товара</a>
						<div class="product-item__price">700 р.</div>
						<a class="product-item__add" href="#">в корзину</a>
					</div>
					<a href="#" class="product-item__delete"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/hidden_window-delete.png" alt=""/></a>
				</li>
				<li class="product-item">
					<img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/item-img.jpg" alt="" class="product-item__img"/>
					<div class="product-item__info">
						<a href="#" class="product-item__name">Название товара</a>
						<div class="product-item__price">700 р.</div>
						<a class="product-item__add" href="#">в корзину</a>
					</div>
					<a href="#" class="product-item__delete"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/hidden_window-delete.png" alt=""/></a>
				</li>
				<li class="product-item">
					<img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/item-img.jpg" alt="" class="product-item__img"/>
					<div class="product-item__info">
						<a href="#" class="product-item__name">Название товара</a>
						<div class="product-item__price">700 р.</div>
						<a class="product-item__add" href="#">в корзину</a>
					</div>
					<a href="#" class="product-item__delete"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/hidden_window-delete.png" alt=""/></a>
				</li>
				<li class="product-item">
					<img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/item-img.jpg" alt="" class="product-item__img"/>
					<div class="product-item__info">
						<a href="#" class="product-item__name">Название товара</a>
						<div class="product-item__price">700 р.</div>
						<a class="product-item__add" href="#">в корзину</a>
					</div>
					<a href="#" class="product-item__delete"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/hidden_window-delete.png" alt=""/></a>
				</li>
			</ul>
			<div class="product-list__result">
				<p>Итого:&nbsp;<span>2100 р.</span></p>
			</div>
		</div>
		<div class="hidden-window__buttons">
		  <a href="#" class="button-black-white btn_filling">
			  <div class="btn__wrapper">
				<div class="btn__fill"></div>
				<div class="btn__content">Добавить все в корзину</div>
			  </div>
			</a>
			<a href="#" class="button-white-black btn_filling">
			  <div class="btn__wrapper">
				<div class="btn__fill"></div>
				<div class="btn__content">Личный кабинет</div>
			  </div>
			</a>
		</div>
	</aside>	
	<aside class="hidden-window hidden-window--bag">
		<div class="hidden-window__top">
			<a href="#" class="cart"><span>10</span></a>
			<div class="hidden-window__close">Закрыть</div>
		</div>
		<div class="product-list">
			<ul>
				<li class="product-item">
					<img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/item-img.jpg" alt="" class="product-item__img"/>
					<div class="product-item__info">
						<a href="#" class="product-item__name">Название товара</a>
						<div class="product-item__price">700 р.</div>
						<div class="product-item__count">1</div>
					</div>
					<a href="#" class="product-item__delete"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/hidden_window-delete.png" alt=""/></a>
				</li>
				<li class="product-item">
					<img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/item-img.jpg" alt="" class="product-item__img"/>
					<div class="product-item__info">
						<a href="#" class="product-item__name">Название товара</a>
						<div class="product-item__price">700 р.</div>
						<div class="product-item__count">1</div>
					</div>
					<a href="#" class="product-item__delete"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/hidden_window-delete.png" alt=""/></a>
				</li>
				<li class="product-item">
					<img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/item-img.jpg" alt="" class="product-item__img"/>
					<div class="product-item__info">
						<a href="#" class="product-item__name">Название товара</a>
						<div class="product-item__price">700 р.</div>
						<div class="product-item__count">1</div>
					</div>
					<a href="#" class="product-item__delete"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/hidden_window-delete.png" alt=""/></a>
				</li>
				<li class="product-item">
					<img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/item-img.jpg" alt="" class="product-item__img"/>
					<div class="product-item__info">
						<a href="#" class="product-item__name">Название товара</a>
						<div class="product-item__price">700 р.</div>
						<a class="product-item__add" href="#">в корзину</a>
					</div>
					<a href="#" class="product-item__delete"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/hidden_window-delete.png" alt=""/></a>
				</li>
				<li class="product-item">
					<img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/item-img.jpg" alt="" class="product-item__img"/>
					<div class="product-item__info">
						<a href="#" class="product-item__name">Название товара</a>
						<div class="product-item__price">700 р.</div>
						<a class="product-item__add" href="#">в корзину</a>
					</div>
					<a href="#" class="product-item__delete"><img src="<?php echo esc_url(get_template_directory_uri()); ?>/img/hidden_window-delete.png" alt=""/></a>
				</li>
			</ul>
			<div class="product-list__result">
				<p>Итого:&nbsp;<span>2100 р.</span></p>
			</div>
		</div>
		<div class="hidden-window__buttons">
			<a href="#" class="button-black-white btn_filling">
				<div class="btn__wrapper">
				<div class="btn__fill"></div>
				<div class="btn__content">Оформить заказ</div>
				</div>
			</a>
			<a href="#" class="button-white-black btn_filling">
				<div class="btn__wrapper">
				<div class="btn__fill"></div>
				<div class="btn__content">Личный кабинет</div>
				</div>
			</a>
		</div>
	</aside>
</header>