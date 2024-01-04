
<template>

  <div id="blogger" class="container blog my-4">
    <h1 class="text-center mb-5 title_c">Последние кейсы</h1>
    <div class="row gy-4">
      <div class="blog-guts col-12 col-md-4">
        <div class="blog-body position-relative">
          <article>
            <a href="#">
              <div class="blog-image">
                <img src="@/assets/img/picture_2.webp" class="img-fluid" alt="1" />
              </div>
              <div class="header-date px-3 py-4">
                <h5>
                  <b>Настройка кэширования данных. Апгрейд сервера. Ускорение
                    работы сайта в 30 раз!</b>
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
              <div class="blog-image-internalized image-main">
                <img src="@/assets/img/img_case2.jpg" class="img-fluid" alt="2" width="875px" />
              </div>
              <div class="header-date header-date-internalized px-3 py-4">
                <h5>
                  <b> Использование отчетов<br>
                    Ecommerce в Яндекс.Метрике</b>
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
              <img class="img-fluid" src="@/assets/img/img_case3.jpeg" />
              <div class="paket"></div>
              <div class="header-date header-date-internalized px-3 py-4">
                <h5>
                  <b>
                    Повышение конверсии <br> страницы с формой заявки <br> с применением
                    AB- <br> тестирования </b>
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
              <div class="blog-image-internalized">
                <img src="@/assets/img/koleso.png" class="img-fluid" alt="4" />
              </div>
              <div class="header-date header-date-internalized px-3 py-4">
                <h5>
                  <b>
                    Drupal 7: ускорение <br> времени генерации<br> страниц
                    интернет-магазина <br> на 32%
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
              <div class="blog-image">
                <img src="@/assets/img/eeeew.png" class="img-fluid" alt="5" />
              </div>
              <div class="header-date px-3 py-4">
                <b>
                  Обмен товарами и заказами <br> интернет-магазинов на <br> Drupal 7 с 1С:
                  Предприятие,<br> МойСклад, Класс365
                </b>
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

.title_c{
  color: #050c33;
  font-weight: 700;
  font-size:42px;
}

.blog {
  max-width: 960px;
  font-size: 16px;

}

.blog-image  {

  z-index: 0;
  border-radius: 5px;
}

.blog-guts {
  height: 360px;
  cursor: pointer;


}
.blog-guts a, a:hover, a:focus, a:active {
  text-decoration: none;
  color: inherit;
}

.cringe {
  position: relative;
  border-radius: 5px;
}

.img-fluid {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}

.paket {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
  border-radius: 5px;
}

.header-date {
  z-index: 1;
}


.blog-guts a:hover h5:hover {
  text-decoration: underline;
}
.blog-guts h5, .blog-guts p {
  font-size: 14px;
}
.blog-image img {
  height: 220px;
  width: 400px;
  border-radius: 5px;
}

.blog-image-internalized img {
  height: 360px;
  object-fit: cover;
  border-radius: 6px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)); /* Градиент */
}

.img-fluid img{
  border-radius: 5px;
}





.header-date-internalized {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.blog-desc p {
  color: #050c33;

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
  .blog-image-internalized img {
    height: 470px;
  }
  .blog-image img {
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
