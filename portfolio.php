<!-- HEAD + HTML Open -->
<?php include('inc/head.php'); ?>
<!-- <body><div class="wrapper"> -->
<?php include('inc/body-open.php'); ?>
<!-- HEADER -->
<?php include('inc/header.php'); ?>

<!-- MAIN -->
<main class="page page_portfolio" data-barba="container" data-barba-namespace="contacts">
  <section class="page-heading">
    <div class="page-heading__container">
      <a href="javascript:void(0)" class="page-heading__button">
        <span class="icon-wrapper">
          <svg class="icon icon-arrow-upleft">
            <use xlink:href="/images/svgMap.svg#icon-arrow-upleft"></use>
          </svg>
        </span>
        Назад</a>
      <h1 class="page-heading__title">Наше портфоліо</h1>
    </div>
  </section>
  <div class="folio-grid">
    <div class="folio-grid__item folio-item">
      <div class="folio-item__image -ibg_contain">
        <img src="images/cases/Gulliver.jpg" alt="Gulliver">
      </div>
      <div class="folio-item__content">
        <h2 class="folio-item__title h4">Gulliver</h2>
        <span class="folio-item__sub-title capt-1">Дизайн сайту для торгово-розважального і бізнес-центру Gulliver</span>
      </div>
    </div>
  </div>
  <nav class="paggination">
    <button type="button" class="paggination__arrow paggination__arrow__prev icon-wrapper">
      <svg class="icon icon-arrow">
        <use xlink:href="/images/svgMap.svg#icon-arrow"></use>
      </svg>
    </button>
    <ul class="paggination__list">
      <li class="paggination__item">
        <a href="javascript:void(0)" class="paggination__link">1</a>
      </li>
      <li class="paggination__item">
        <a href="javascript:void(0)" class="paggination__link">2</a>
      </li>
      <li class="paggination__item">
        <a href="javascript:void(0)" class="paggination__link">3</a>
      </li>
      <li class="paggination__item">
        <a href="javascript:void(0)" class="paggination__link">4</a>
      </li>
      <li class="paggination__item">
        <a href="javascript:void(0)" class="paggination__link">5</a>
      </li>
    </ul>
    <button type="button" class="paggination__arrow paggination__arrow__next icon-wrapper">
      <svg class="icon icon-arrow rotate-180">
        <use xlink:href="/images/svgMap.svg#icon-arrow"></use>
      </svg>
    </button>
  </nav>
</main>

<!-- FOOTER -->
<?php include('inc/footer.php'); ?>
<!-- </div class="wrapper"></body> -->
<?php include('inc/body-close.php'); ?>
<!-- POPUP -->
<?php include('inc/popup.php'); ?>
<!-- SCRIPTS + HTML Close -->
<?php include('inc/scripts.php'); ?>