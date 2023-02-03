<!-- HEAD + HTML Open -->
<?php include('inc/head.php'); ?>
<!-- <body><div class="wrapper"> -->
<?php include('inc/body-open.php'); ?>
<!-- HEADER -->
<?php include('inc/header.php'); ?>

<!-- MAIN -->
<main class="page page_contacts" data-barba="container" data-barba-namespace="contacts">
  <section class="page-heading">
    <div class="page-heading__container">
      <a href="javascript:void(0)" class="page-heading__button"></a>
      <h1 class="page-heading__title">Контакти</h1>
    </div>
  </section>
  <section class="contact-action">
    <div class="contact-action__container">
      <div class="contact-action__inner">
        <div class="contact-action__col contact-action__col_left contact-info">
          <div class="contact-info__row contact-info__row_first">
            <span class="contact-info__title p5">Замовити проект</span>
            <ul class="contact-info__link-list">
              <li class="contact-info__link-item">
                <a href="mailto:hi@mavericks.agency" class="contact-info__link">hi@mavericks.agency</a>
              </li>
              <li class="contact-info__link-item">
                <a href="tel:+380974355343" class="contact-info__link">+38 097 435 53 43</a>
              </li>
            </ul>
          </div>
          <div class="contact-info__row contact-info__row_second">
            <span class="contact-info__title p5">Наші офіси</span>
            <ul class="contact-info__link-list">
              <li class="contact-info__link-item">
                <a href="javascript:void(0)" class="contact-info__link">
                  Київ
                  <svg class="icon icon-map-pin">
                    <use xlink:href="/images/svgMap.svg#icon-map-pin"></use>
                  </svg>
                </a>
              </li>
              <li class="contact-info__link-item">
                <a href="javascript:void(0)" class="contact-info__link">
                  Прага
                  <svg class="icon icon-map-pin">
                    <use xlink:href="/images/svgMap.svg#icon-map-pin"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div class="contact-info__row contact-info__row_third">
            <span class="contact-info__title p5">Підписуйтеся на соцмережі</span>
            <ul class="contact-info__link-list">
              <li class="contact-info__link-item">
                <a href="javascript:void(0)" class="contact-info__link">
                  <svg class="icon icon-behance">
                    <use xlink:href="/images/svgMap.svg#icon-behance"></use>
                  </svg>
                  Behance
                </a>
              </li>
              <li class="contact-info__link-item">
                <a href="javascript:void(0)" class="contact-info__link">
                  <svg class="icon icon-facebook">
                    <use xlink:href="/images/svgMap.svg#icon-facebook"></use>
                  </svg>
                  Facebook
                </a>
              </li>
              <li class="contact-info__link-item">
                <a href="javascript:void(0)" class="contact-info__link">
                  <svg class="icon icon-linkedin">
                    <use xlink:href="/images/svgMap.svg#icon-linkedin"></use>
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li class="contact-info__link-item">
                <a href="javascript:void(0)" class="contact-info__link">
                  <svg class="icon icon-instagram">
                    <use xlink:href="/images/svgMap.svg#icon-instagram"></use>
                  </svg>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div class="contact-info__row">
            <span class="contact-info__row__title p2">Хочете отримати попередню пропозицію?</span>
            <span class="contact-info__row__sub-title p6">Дайте відповідь на декілька запитань і ми надішлемо вам розрахунок</span>
            <a href="javascript:void(0)" class="contact-info__row__button button button_primary">Заповнити бриф</a>
          </div>
        </div>
        <form action="#" method="post" class="contact-action__col contact-action__col_right form form_contact">
          <span class="form__heading p5">#</span>
          <fieldset class="form__fieldset">
            <div class="form__line">
              <label for="name" class="form__label">Ваше ім’я</label>
              <input id="name" autocomplete="off" type="text" name="form[name]" placeholder="Ім’я" class="form__input input">
            </div>
            <div class="form__row">
              <div class="form__line">
                <label for="email" class="form__label">Email</label>
                <input id="email" autocomplete="off" type="email" name="form[email]" placeholder="yorname@example.com" class="form__input input">
              </div>
              <div class="form__line">
                <label for="phone" class="form__label">Телефон</label>
                <input id="phone" autocomplete="off" type="number" name="form[phone]" placeholder="+380" class="form__input input">
              </div>
            </div>
            <div class="form__line">
              <label for="message" class="form__label">Повідомлення</label>
              <textarea id="message" autocomplete="off" name="form[message]" placeholder="Ваше питання або повідомлення" class="form__input input"></textarea>
            </div>
          </fieldset>
          <button type="submit" class="form__button button button_underline">Надіслати</button>
        </form>
      </div>
    </div>
  </section>
  <div class="fw-image">
    <img src="images/contacts/meeting.jpg" alt="Meeting">
  </div>
  <section class="short-us">
    <div class="short-us__container">
      <span class="short-us__title">Про нас</span>
      <div class="short-us__content">
        <span class="short-us__text">Ми допомагаємо стартапам і відомим компаніям розробляти нові цифрові продукти та оптимізувати існуючі онлайн-послуги, орієнтовані на клієнтів, досліджуючи та розробляючи чудовий і цінний досвід користувачів, а також розробляючи високоефективні веб-і мобільні додатки.</span>
        <a href="javascript:void(0)" class="short-us__link button button_primary">Більше про нас</a>
      </div>
    </div>
  </section>
  <section class="feedbacks">
    <div class="feedbacks__container">
      <div class="feedbacks__col feedbacks__col_left">
        <h2 class="feedbacks__title">Відгуки</h2>
      </div>
      <div class="feedbacks__col feedbacks__col_right">
        <div class="feedbacks__slider feedback-slider swiper">
          <div class="feedback-slider__wrapper swiper-wrapper">
            <div class="feedback-slider__slide feedback-slide swiper-slide">
              <span class="feedback-slide__rate">5.0</span>
              <span class="feedback-slide__text">The site has performed well, doubling traffic in just two months. Mavericks Agency delivered the site on time and provided regular progress reports. Their advice regarding specific features resulted in marked improvement. Communication was clear and direct.</span>
              <div class="feedback-slide__from">
                <span class="feedback-slide__from-name">Anton Tarasuik</span>
                <span class="feedback-slide__from-about">Managing Partner, Legal IT Group</span>
              </div>
            </div>
            <div class="feedback-slider__slide feedback-slide swiper-slide">
              <span class="feedback-slide__rate">5.0</span>
              <span class="feedback-slide__text">The site has performed well, doubling traffic in just two months. Mavericks Agency delivered the site on time and provided regular progress reports. Their advice regarding specific features resulted in marked improvement. Communication was clear and direct.</span>
              <div class="feedback-slide__from">
                <span class="feedback-slide__from-name">Anton Tarasuik</span>
                <span class="feedback-slide__from-about">Managing Partner, Legal IT Group</span>
              </div>
            </div>
            <div class="feedback-slider__slide feedback-slide swiper-slide">
              <span class="feedback-slide__rate">5.0</span>
              <span class="feedback-slide__text">The site has performed well, doubling traffic in just two months. Mavericks Agency delivered the site on time and provided regular progress reports. Their advice regarding specific features resulted in marked improvement. Communication was clear and direct.</span>
              <div class="feedback-slide__from">
                <span class="feedback-slide__from-name">Anton Tarasuik</span>
                <span class="feedback-slide__from-about">Managing Partner, Legal IT Group</span>
              </div>
            </div>
          </div>
          <div class="feedbacks__controls">
            <button type="button" class="feedbacks__button-prev">
              <svg class="icon icon-arrow">
                <use xlink:href="/images/svgMap.svg#icon-arrow"></use>
              </svg>
            </button>
            <button type="button" class="feedbacks__button-next">
              <svg class="icon icon-arrow rotate-180">
                <use xlink:href="/images/svgMap.svg#icon-arrow"></use>
              </svg>
            </button>
          </div>
        </div>
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