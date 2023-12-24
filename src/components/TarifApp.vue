<template>
    <section id="block-tariffs"
        class="block block-block-content block-block-content44e135e8-5c7a-4c25-9a28-466de4b12816 clearfix">
        <h2 class="block-title">Тарифы</h2>
        <div class="field field--name-body field--type-text-with-summary field--label-hidden field--item">
            <div class="tariffs">
                <div class="container">
                    <div class="row row-flex tariffs-row">
                        <div class="col-sm-4 col-xs-12 col-flex">
                            <div class="tariff">
                                <div class="tariff-wrapper">
                                    <div class="tariff-header">
                                        <div class="tariff-title">СТАНДАРТ</div><br>
                                        <div class="tariff-price small">От 6 000 <span class="rub">₽</span>
                                        </div>
                                    </div>
                                    <div class="tariff-body">
                                        <div class="tarrif-body-item">Обновления сервера</div>
                                        <div class="tarrif-body-item">24/7 мониторинг</div>
                                        <div class="tarrif-body-item">Резервное копирование данных</div>
                                        <div class="tarrif-body-item">Ликвидация аварий – до 2 часов</div>
                                        <div class="tarrif-body-item">Реакция на тикет - как можно скорее</div>
                                        <div class="tarrif-body-item">Консультации и работы по SEO</div>
                                    </div>
                                    <div class="tariff-footer">
                                        <a href="#FooterApp" class="contact-form tariff-footer-btn">Свяжитесь с нами!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 col-flex col-xs-12">
                            <div class="tariff">
                                <div class="tariff-wrapper">
                                    <div class="tariff-header">
                                        <div class="tariff-title">БИЗНЕС</div><br>
                                        <div class="tariff-price small">От 30 000 <span class="rub">₽</span>
                                        </div>
                                    </div>
                                    <div class="tariff-body ">
                                        <div class="tarrif-body-item"><b>Включено 10 часов разработки</b></div>
                                        <div class="tarrif-body-item">Обновления сервера</div>
                                        <div class="tarrif-body-item">24/7 мониторинг</div>
                                        <div class="tarrif-body-item">Резервное копирование данных</div>
                                        <div class="tarrif-body-item">Ликвидация аварий – до 2 часов</div>
                                        <div class="tarrif-body-item">Дополнительный час работы</div>
                                        <div class="tarrif-body-item">Реакция на тикет – до 24 часов</div>
                                        <div class="tarrif-body-item">Консультации и работы по SEO</div>
                                    </div>
                                    <div class="tariff-footer">
                                        <a href="#FooterApp" class="contact-form tariff-footer-btn">Свяжитесь с нами!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 col-flex col-xs-12">
                            <div class="tariff">
                                <div class="tariff-wrapper">
                                    <div class="tariff-header">
                                        <div class="tariff-title">VIP</div><br>
                                        <div class="tariff-price small">От 300 000<span class="rub enterprise">₽</span>
                                        </div>
                                    </div>
                                    <div class="tariff-body">
                                        <div class="tarrif-body-item"><b>Включено 100 часов разработки</b></div>
                                        <div class="tarrif-body-item">Обновления сервера</div>
                                        <div class="tarrif-body-item">24/7 мониторинг</div>
                                        <div class="tarrif-body-item">Резервное копирование данных</div>
                                        <div class="tarrif-body-item">Ликвидация аварий – до 2 часов</div>
                                        <div class="tarrif-body-item">Дополнительный час работы</div>
                                        <div class="tarrif-body-item">Реакция на тикет – 1 час</div>
                                        <div class="tarrif-body-item">Консультации и работы по SEO</div>
                                    </div>
                                    <div class="tariff-footer">
                                        <a href="#FooterApp" class="contact-form tariff-footer-btn">Свяжитесь с нами!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12">
                            <div class="tariffs-ps">
                                Вам не подходят наши тарифы? Оставьте заявку и мы предложим вам индивидуальные
                                условия!
                                <a href="#FooterApp" class="contact-form tariffs-link">Получить
                                    индивидуальный тариф</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>


<script>

</script>


<style>
.row-flex {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 75px
}

.row {
    margin-left: -15px;
    margin-right: -15px
}


.row-flex:after,
.row-flex:before {
    width: 0
}

#block-tariffs {
    padding: 160px 0 90px;
    font-family: Montserrat;
    background: url("../assets/img/D-background-opacity.svg") no-repeat right top, #fff;
    background-size: 100%;
    width: 100%;
}

.bg-cubes {
    background: url("../assets/img/D-background-opacity.svg") no-repeat right top, #fff;
    background-size: 58%
}


#block-tariffs .block-title {
    margin-top: 0;
    margin-bottom: 65px;
    text-align: center;
    color: #000;
    font-weight: 700;
    font-size: 42px
}

.tariffs-row {
    display: block
}

.tariffs-row.row-flex {
    display: flex
}

.tariff {
    height: auto;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
    padding: 70px 20px 60px;
    background: #fff;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    transition: all .5s;
    transform-origin: center;
    margin-bottom: 30px;
    max-width: 500px;
    text-align: left;
    justify-content: center;
}

.tariffs-row.two-items .tariff {
    margin: auto auto 30px
}

.tariffs-row.two-items .tariff-wrapper {
    width: 400px
}

.tariffs .tariffs-row:hover .col-flex:nth-of-type(2n) .tariff {
    transform: initial;
    box-shadow: none
}

.tariffs .tariffs-row:hover .col-flex:nth-of-type(2n) .tariff .tariff-footer-btn {
    color: #f89c91;
    background: #fff
}

.tariff:hover,
.tariffs .tariffs-row:hover .col-flex:nth-of-type(2n) .tariff:hover {
    transform: scale(1.1);
    z-index: 15;
    box-shadow: 0px 4px 60px rgba(162, 162, 162, .25)
}

.tariff:hover .tariff-footer-btn,
.tariffs .tariffs-row:hover .col-flex:nth-of-type(2n) .tariff:hover .tariff-footer-btn {
    color: #fff;
    background: #f14d34
}

.tariff-wrapper {
    width: 300px;
    max-width: 100%;
    margin: 0 auto;
    height: 100%;
    position: relative;
    padding-bottom: 80px
}



.tariff-header {
    border-bottom: 2px solid #e5e5e5;
    margin-bottom: 50px
}

.tariff-title {
    font-weight: 700;
    font-size: 22px;
    font-weight: 700;
    color: #f14d32;
    line-height: 1.3
}

.tariff-price {
    font-size: 36px;
    font-weight: 700;
    color: #050c33;
    line-height: 1;
    white-space: nowrap
}

.tariff-price.small {
    font-size: 36px;
    margin-bottom: 10px
}

.tariff-price .rub {
    font-size: 28px;
    font-weight: 500;
    vertical-align: text-top;
    display: inline-block;
    margin-top: 10px
}

.tariff-price.small .rub {
    margin-top: 5px
}

.tariff-price-description {
    line-height: 1;
    color: #040c33;
    margin-bottom: 20px;
    font-weight: 500
}

.tarrif-body-item,
.tariff-body-item {
    margin-bottom: 18px;
    line-height: 1.2;
    font-size: 16px;
    position: relative;
    padding-left: 30px;
    color: #4e5972;
    font-weight: 500
}

.tarrif-body-item:before,
.tariff-body-item:before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 3px;
    left: 0;
    width: 13px;
    height: 10px;
    background: url("../assets/img/galka.svg") no-repeat center;
    background-size: contain
}

/* .tarrif-body-item.plus:before,
.tariff-body-item.plus:before {
    background: url(/themes/custom/bootstrap_dc/css/../images/plus.svg) no-repeat center;
    background-size: contain;
    height: 13px
}

.tarrif-body-item.minus:before,
.tariff-body-item.minus:before {
    background: url(/themes/custom/bootstrap_dc/css/../images/minus.svg) no-repeat center; 
    background-size: contain
} */

.tariff-footer-btn {
    text-decoration: none;
    display: block;
    border-radius: 5px;
    text-transform: uppercase;
    color: #f14d34;
    border: 1px solid #f14d34;
    text-align: center;
    transition: all .5s;
    padding: 20px 10px;
    line-height: 1;
    font-size: 12px;
    font-weight: 500;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0
}

.tariff-footer-btn:hover,
.tariff-footer-btn:active,
.tariff-footer-btn:focus {
    text-decoration: none;
    color: #fff;
    background: #f14d34
}

.col-flex:nth-of-type(2n) .tariff {
    transform: scale(1.1);
    z-index: 10;
    box-shadow: 0px 4px 60px rgba(162, 162, 162, .25)
}

.col-flex:nth-of-type(2n) .tariff .tariff-footer-btn {
    color: #fff;
    background: #f14d34
}



.tariffs-ps {
    text-align: center;
    line-height: 1.3;
    font-weight: 500;
    color: #828a9b;
    width: 475px;
    max-width: 100%;
    margin: 0 auto
}



.tariffs-link {
    display: block;
    margin-top: 26px;
    font-size: 12px;
    text-transform: uppercase;
    color: #050c33;
    text-decoration: underline;
    transition: all .3s
}

.tariffs-link:hover {
    text-decoration: none;
    color: #f14d32
}

@media (max-width: 991px) {
    .tariff {
        padding: 35px 20px
    }

    .tarrif-body-item,
    .tariff-body-item {
        font-size: 14px
    }

    .tariff-price {
        font-size: 32px
    }

    .tariff-price.small {
        font-size: 32px
    }

    @media (max-width: 370px) {
        .services-audit .tariff-price-free {
            font-size: 28px
        }

        .tariff-price {
            font-size: 46px
        }
    }

    .region-header {
        padding-top: 150px
    }

    .support-main,
    .block-main {
        padding-top: 170px
    }

    .support-main-btn,
    .block-main-btn {
        margin-bottom: 80px
    }

    .support-achievement {
        margin-bottom: 30px
    }

    .support-achievement-wrapper {
        width: 160px;
        max-width: 100%
    }

    .block-form-description {
        margin-bottom: 30px
    }

    .block-form-title,
    .competencies h2,
    .expertise h2,
    .section-title,
    .dc-section h2,
    #block-tariffs .block-title,
    #block-views-block-team-new .block-title,
    .team-grid .block-title,
    #block-views-block-our-clients .block-title,
    #block-views-block-testimonials-block-1 .block-title,
    #block-views-block-keys-block .block-title,
    #block-views-block-blog-block-1 .block-title,
    .advantages h2,
    .drupal-community .block-title {
        font-size: 32px
    }

    #block-views-block-team-new .block-title,
    .team-grid .block-title,
    .section-title,
    .dc-section h2 {
        margin-top: 20px
    }

    .field--name-field-block-with-form-value form {
        margin-top: 0
    }

    footer {
        background-size: cover, 235px, 230px
    }

    .expertise {
        padding: 230px 0 0
    }

    .expertise-img {
        position: relative;
        width: 70%
    }

    #block-views-block-testimonials-block-1 {
        margin-bottom: 110px;
        padding-top: 35px
    }

    #block-views-block-testimonials-block-1 .view-content {
        margin-top: 48px
    }

    #block-views-block-testimonials-block-1 .view-content:after {
        left: 68px;
        right: 68px;
        top: -48px
    }

    #block-views-block-testimonials-block-1 .view-content:before {
        left: 34px;
        right: 34px;
        top: -25px
    }

    #block-views-block-testimonials-block-1 .slick {
        display: block;
        padding: 15px
    }

    #block-views-block-testimonials-block-1 .slick-slider,
    #block-views-block-testimonials-block-1 .slick__arrow {
        width: 100%;
        float: none;
        display: block;
        padding: 20px 15px;
        border: none
    }

    #block-views-block-testimonials-block-1 .slick__arrow {
        text-align: center;
        border-top: 1px solid #cdcdcd
    }

    #block-views-block-testimonials-block-1 .slick__arrow-wrapper {
        display: inline-block
    }

    #block-views-block-keys-block .more-link a,
    #block-views-block-team-new .more-link a,
    .team-grid .more-link a,
    #block-views-block-blog-block-1 .more-link a {
        padding: 10px 30px
    }

    .view:not(.inverse) .blog.keys-1:nth-of-type(4n+1) .keys-1__picture,
    .inverse .blog.keys-1:nth-of-type(4n+2) .keys-1__picture,
    .view:not(.inverse) .blog.keys-1:nth-of-type(4n+1) .keys-1__picture picture img,
    .inverse .blog.keys-1:nth-of-type(4n+2) .keys-1__picture picture img {
        height: 140px
    }
}</style>