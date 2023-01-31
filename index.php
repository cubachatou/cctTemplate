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
        <div class="services__heading">
          <h2 class="services__title">Наші послуги</h2>
          <span class="services__sub-title p6">Lorem ipsum</span>
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

</main>

<!-- FOOTER -->
<?php include('inc/footer.php'); ?>
<!-- </div class="wrapper"></body> -->
<?php include('inc/body-close.php'); ?>
<!-- POPUP -->
<?php include('inc/popup.php'); ?>
<!-- SCRIPTS + HTML Close -->
<?php include('inc/scripts.php'); ?>