<template>
  <div id="app">
    <AppHeader />
    <InformApp />
    <TeamApp />
    <BehindeTariff/>

    <Slider/>

    <!-- Остальное содержимое вашего приложения -->
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import InformApp from './components/InformApp.vue';
import TeamApp from './components/TeamApp.vue';
import BehindeTariff from './components/BehindeTariff.vue';
import Slider from './components/Slider.vue';



export default {
  components: {
    BehindeTariff,
    AppHeader,
    InformApp,
    TeamApp,
    Slider

  },
};
</script>

<style>

*{
  font-family: 'Montserrat', sans-serif;
}

</style>
