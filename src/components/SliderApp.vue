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

$(document).ready(function() {
  $('.slider').slick({
    infinite: true,
    autoplay: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  });
})
</script>


<style>
.slider .slick-dots{
  padding:0;
}
.slider .slick-dots li{
  position:relative;
  display:inline-block;
  width:19%;
  height:15px;
  margin:0 2px 0 0;
  padding:0;
  cursor:pointer;
  background-color:#ccbdb6;
  background-size:100% 100%;
  background-image:-webkit-gradient(linear, left, right, color-stop(1, rgb(16,56,16)), color-stop(1, transparent));
  background-image:-o-linear-gradient(left, rgb(16,56,16) 100%, transparent);
  background-image:-moz-linear-gradient(left, rgb(16,56,16) 100%, transparent);
  background-image:-webkit-linear-gradient(left, rgb(16,56,16) 100%, transparent);
  background-image:linear-gradient(to right,rgb(16,56,16) 100%,transparent 100%);
  background-repeat:no-repeat;
}
</style>