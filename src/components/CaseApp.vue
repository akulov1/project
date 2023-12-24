
<template>

  <div id="blogger" class="container blog my-4">
    <h1 class="text-center mb-5">Последние кейсы</h1>
    <div class="row gy-4">
      <div class="blog-guts col-12 col-md-4">
        <div class="blog-body position-relative">
          <article>
            <a href="#">
              <div class="blogimage">
                <img src="@/assets/img/img_noyt4.jpg" class="img-fluid" alt="1" />
              </div>
              <div class="header-date px-3 py-4">
                <h5>
                  <b
                  >Настройка кэширования данных. Апгрейд сервера. Ускорение
                    работы сайта в 30 раз!</b
                  >
                </h5>
                <div class="blog-date">
                  <p>04.05.2020</p>
                </div>
                <div class="blog-desc mt-4">
                  <p>
                    Влияние скорости загрузки страниц сайта на отказы и
                    конверсии. Кейс ускорения...
                  </p>
                </div>
              </div>
            </a>
          </article>
        </div>
      </div>
      <div class="blog-guts col-12 col-md-8">
        <article>
          <a href="#">
            <div class="blog-body position-relative">
              <div class="blogimage-internalized imagemain">
                <img src="@/assets/img/img_case2.jpg" class="img-fluid" alt="2" />
              </div>
              <div class="header-date header-date-internalized px-3 py-4">
                <h5>
                  <b> Использование отчетов Ecommerce в Яндекс.Метрикеа</b>
                </h5>
              </div>
            </div>
          </a>
        </article>
      </div>
      <div class="blog-guts col-12 col-md-4">
        <article>
          <a href="#">
            <div class="cringe position-relative">
              <div class="blogimage-internalized">
                <img src="@/assets/img/img_case3.jpeg" class="img-fluid" alt="3" />
              </div>
              <div class="header-date header-date-internalized px-3 py-4">
                <h5>
                  <b>
                    Повышение конверсии страницы с формой заявки с применением
                    AB-тестирования Повышение конверсии страницы с формой заявки
                    с применением AB-тестирования</b
                  >
                </h5>
                <div class="blog-date">
                  <p>24.01.2020</p>
                </div>
              </div>
            </div>
          </a>
        </article>
      </div>
      <div class="blog-guts col-12 col-md-4">
        <article>
          <a href="#">
            <div class="cringe position-relative">
              <div class="blogimage-internalized">
                <img src="@/assets/img/img_case2.jpg" class="img-fluid" alt="4" />
              </div>
              <div class="header-date header-date-internalized px-3 py-4">
                <h5>
                  <b>
                    Drupal 7: ускорение времени генерации страниц
                    интернет-магазина на 32%
                  </b>
                </h5>
                <div class="blog-date">
                  <p>23.09.19</p>
                </div>
              </div>
            </div>
          </a>
        </article>
      </div>
      <div class="blog-guts col-12 col-md-4">
        <article>
          <a href="#">
            <div class="position-relative">
              <div class="blogimage">
                <img src="@/assets/img/img_case5.png" class="img-fluid" alt="5" />
              </div>
              <div class="header-date px-3 py-4">
                <h5>
                  Обмен товарами и заказами интернет-магазинов на Drupal 7 с 1С:
                  Предприятие, МойСклад, Класс365
                </h5>
                <div class="blog-date">
                  <p>22.08.2019</p>
                </div>
                <div class="blog-desc mt-4">
                  <p>Опубликован релиз модуля...</p>
                </div>
              </div>
            </div>
          </a>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>

/* cases*/

.blog {
  max-width: 960px;
  font-size: 16px;
}
.blogimage-internalized img {
  opacity: 0.8;
}
.blog-guts {
  height: 360px;
  cursor: pointer;
}
.blog-guts a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
}
.blog-guts a:hover h5:hover {
  text-decoration: underline;
}
.blog-guts h5,
.blog-guts p {
  font-size: 14px;
}
.blogimage img {
  height: 140px;
  object-fit: cover;
  border-radius: 6px;
}
.blogimage-internalized img {
  height: 360px;
  object-fit: cover;
  border-radius: 6px;
}
.header-date-internalized {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
.blog-desc p {
  color: black;
}
.header-date-internalized h5 {
  color: white;
}
.blog-date {
  color: lightgray;
}

@media screen and (min-width: 770px) {
  .blog-guts {
    height: 470px;
  }
  .blog-guts h5,
  .blog-guts p {
    font-size: 18px;
  }
  .blogimage-internalized img {
    height: 470px;
  }
  .blogimage img {
    height: 200px;
  }
}

@media (min-width: 767px) {
  .team-btn a {
    padding: 24px 75px;
  }
}

@media (min-width: 767px) {
  .container {
    max-width: 1170px;
    padding: 0;
  }
}

</style>
