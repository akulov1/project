<template>
  <div class="clients-block">
    <h1 class="text-center">С нами работают</h1>
    <h4 class="text-center">Десятки компаний доверяют нам самое ценное, что у них есть в интернете - свои сайты. Мы делаем всё, чтобы наше сотрудничество было долгим.</h4>
    <div class="slider">
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
    </div>
  </div>
</template>



<script>
import $ from 'jquery';
import 'slick-carousel';
export default {
  mounted() {
    $(document).ready(function(){
      $('#slick-slider').slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: false,
        responsive: 'none',
        variableWidth: true,
        centerMode: true,
        centerPadding: '60px',
        lazyLoad: 'ondemand',
        autoplaySpeed: 2000,
        vertical: false // Добавленная опция для горизонтальной прокрутки
      });
      $('#slick-slider2').slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: false,
        responsive: 'none',
        variableWidth: true,
        centerPadding: '60px',
        lazyLoad: 'ondemand',
        autoplaySpeed: 2000,
        vertical: false // Добавленная опция для горизонтальной прокрутки
      });
    });
  }
}
</script>


<style>

</style>