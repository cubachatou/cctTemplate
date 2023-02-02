<!-- HEAD + HTML Open -->
<?php include('inc/head.php'); ?>
<!-- <body><div class="wrapper"> -->
<?php include('inc/body-open.php'); ?>
<!-- HEADER -->
<?php include('inc/header.php'); ?>

<!-- MAIN -->
<main class="page page_home">
  <section class="fh-section">
    <div class="fh-section__container">
      <div class="fh-section__inner">
        <h1 class="fh-section__title hamburger">
          <span>Mavericks</span>
          <span>agency</span>
        </h1>
      </div>
    </div>
  </section>
  <section class="short-about">
    <div class="short-about__container">
      <div class="short-about__inner">
        <span class="short-about__title p1">Mavericks Agency є командою дизайнерів та розробників продуктів, котрі працюють задля отримання результату</span>
        <a href="javascript:void(0)" class="short-about__button button button_primary">Більше про компанію</a>
      </div>
    </div>
  </section>
  <section class="services">
    <div class="services__container">
      <div class="services__inner">
        <div class="services__heading section-heading">
          <h2 class="section-heading__title">Наші послуги</h2>
          <span class="section-heading__sub-title p6">Lorem ipsum</span>
        </div>
        <div class="services__grid">
          <div class="services__card service-card" data-tilt>
            <div class="service-card__content">
              <span class="service-card__number text-red">01</span>
              <h3 class="service-card__title">Дизайн</h3>
              <span class="service-card__text p4">Той дизайн, який дійсно вирішує проблеми бізнесу і ваших клієнтів</span>
            </div>
            <a href="javascript:void(0)" class="service-card__button button button_underline">Деталі</a>
          </div>
          <div class="services__card service-card" data-tilt>
            <div class="service-card__content">
              <span class="service-card__number text-blue">02</span>
              <h3 class="service-card__title">Розробка</h3>
              <span class="service-card__text p4">Розробляємо працюючі рішення, без багів і костилів</span>
            </div>
            <a href="javascript:void(0)" class="service-card__button button button_underline">Деталі</a>
          </div>
          <div class="services__card service-card" data-tilt>
            <div class="service-card__content">
              <span class="service-card__number text-purple">03</span>
              <h3 class="service-card__title">Підтримка</h3>
              <span class="service-card__text p4">Нам чхати, який час доби чи день тижня – ми готові перефарбувати кнопку в інший колір</span>
            </div>
            <a href="javascript:void(0)" class="service-card__button button button_underline">Деталі</a>
          </div>
        </div>
        <a href="javascript:void(0)" class="services__more-button button button_primary">Більше про послуги</a>
      </div>
    </div>
  </section>
  <section class="cases">
    <div class="cases__container">
      <div class="cases__inner">
        <div class="cases__heading section-heading">
          <h2 class="sction-heading__title">Останні кейси</h2>
          <span class="section-heading__sub-title next">Наші останні роботи з портфоліо</span>
        </div>
        <div class="cases__slider case-slider swiper">
          <div class="case-slider__controls">
            <button type="button" class="case-slider__arrow case-slider__arrow_prev">
              <svg class="icon icon-chevron-left">
                <use xlink:href="/images/svgMap.svg#icon-chevron-left"></use>
              </svg>
              <svg class="icon-nav-blob" viewBox="0 0 88 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="icon-nav-blob__path" d="M 90 45 C 90 53.8168 86.5881 64.3174 81.4058 71.4503 C 76.2234 78.5833 67.291 85.073 58.9058 87.7975 C 50.5205 90.5221 39.4795 90.5221 31.0942 87.7975 C 22.709 85.073 13.7766 78.5833 8.5942 71.4503 C 3.4119 64.3174 0 53.8168 0 45 C -0 36.1832 3.4119 25.6826 8.5942 18.5497 C 13.7766 11.4167 22.709 4.927 31.0942 2.2025 C 39.4795 -0.5221 50.5205 -0.5221 58.9058 2.2025 C 67.291 4.927 76.2234 11.4167 81.4058 18.5497 C 86.5881 25.6826 90 36.1832 90 45 C 90 53.8168 86.5881 64.3174 81.4058 71.4503" />
              </svg>
            </button>
            <button type="button" class="case-slider__arrow case-slider__arrow_next">
              <svg class="icon icon-chevron-left">
                <use xlink:href="/images/svgMap.svg#icon-chevron-left"></use>
              </svg>
              <svg class="icon-nav-blob" viewBox="0 0 88 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="icon-nav-blob__path" d="M 90 45 C 90 53.8168 86.5881 64.3174 81.4058 71.4503 C 76.2234 78.5833 67.291 85.073 58.9058 87.7975 C 50.5205 90.5221 39.4795 90.5221 31.0942 87.7975 C 22.709 85.073 13.7766 78.5833 8.5942 71.4503 C 3.4119 64.3174 0 53.8168 0 45 C -0 36.1832 3.4119 25.6826 8.5942 18.5497 C 13.7766 11.4167 22.709 4.927 31.0942 2.2025 C 39.4795 -0.5221 50.5205 -0.5221 58.9058 2.2025 C 67.291 4.927 76.2234 11.4167 81.4058 18.5497 C 86.5881 25.6826 90 36.1832 90 45 C 90 53.8168 86.5881 64.3174 81.4058 71.4503" />
              </svg>
            </button>
          </div>
          <div class="case-slider__cards swiper-wrapper">
            <div class="case-slider__item swiper-slide">
              <span class="case-slider__item-bg"></span>
              <img class="case-slider__img" src="images/cases/Gulliver.jpg" alt="Gulliver">
            </div>
            <div class="case-slider__item swiper-slide">
              <span class="case-slider__item-bg"></span>
              <img class="case-slider__img" src="https://picsum.photos/id/237/1296/828" alt="Gulliver">
            </div>
            <div class="case-slider__item swiper-slide">
              <span class="case-slider__item-bg"></span>
              <img class="case-slider__img" src="https://picsum.photos/id/238/1296/828" alt="Gulliver">
            </div>
          </div>
        </div>
        <a href="javascript:void(0)" class="cases__link button button_primary">Всі кейси</a>
      </div>
    </div>
  </section>
  <section class="clients">
    <div class="clients__container">
      <div class="clients__inner">
        <div class="clients__heading section-heading">
          <h2 class="section-heading__title">Наші клієнти</h2>
          <span class="section-heading__sub-title">ідеї яких ми втілили в життя</span>
        </div>
        <div class="clients__grid">
          <div class="clients__grid-item">
            <img src="images/clients/gulliver.png" alt="Gulliver">
          </div>
          <div class="clients__grid-item">
            <img src="images/clients/zelena.png" alt="Zelena">
          </div>
          <div class="clients__grid-item">
            <img src="images/clients/sbinua.png" alt="Social business IN UA">
          </div>
          <div class="clients__grid-item">
            <img src="images/clients/veedoo.png" alt="Veedoo">
          </div>
          <div class="clients__grid-item">
            <img src="images/clients/olx.png" alt="OLX">
          </div>
          <div class="clients__grid-item">
            <img src="images/clients/clario.png" alt="Clario">
          </div>
          <div class="clients__grid-item">
            <img src="images/clients/agrigo.png" alt="AgriGo">
          </div>
          <div class="clients__grid-item">
            <img src="images/clients/vector.png" alt="Vector">
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="calc">
    <div class="calc__container">
      <div class="calc__inner">
        <div class="calc__block block-calc">
          <div class="block-calc__content">
            <h3 class="block-calc__title">Дізнайтеся, скільки коштуватиме ваш сайт</h3>
            <a href="javascript:void(0)" class="block-calc__link button button_underline">Дізнатися ціну</a>
          </div>
          <div class="block-calc__image">
            <img src="images/home/shell.png" alt="Shell">
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="from-blog">
    <div class="from-blog__container">
      <div class="from-blog__inner">
        <div class="from-blog__heading section-heading">
          <h2 class="section-heading__title">Корисне з блогу</h2>
          <span class="section-heading__sub-title">Цікаво та не завжди коротко про тренди, факапи і багато чого іншого</span>
        </div>
        <div class="from-blog__grid">
          <div class="from-blog__grid-item blog-item">
            <span class="blog-item__tag tag">Стаття</span>
            <a href="javascript:void(0)" class="blog-item__title">
              <h4>ТОП 10 причин, чому юристу потрібен надійний сайт</h4>
            </a>
            <span class="blog-item__date">30 вересня 2022</span>
          </div>
          <div class="from-blog__grid-item blog-item">
            <span class="blog-item__tag tag">Стаття</span>
            <a href="javascript:void(0)" class="blog-item__title">
              <h4>ТОП 10 причин, чому юристу потрібен надійний сайт</h4>
            </a>
            <span class="blog-item__date">30 вересня 2022</span>
          </div>
        </div>
        <a href="javascript:void(0)" class="from-blog__link button button_primary">Перейти до блогу</a>
      </div>
    </div>
  </section>
</main>

<!-- FOOTER -->
<?php include('inc/footer.php'); ?>
<!-- </div class="wrapper"></body> -->
<?php include('inc/body-close.php'); ?>
<!-- POPUP -->
<?php include('inc/popup.php'); ?>
<!-- SCRIPTS + HTML Close -->
<?php include('inc/scripts.php'); ?>