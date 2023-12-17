<template>
  <div id="app">
    <AppHeader />
    <InformApp />
    <TeamApp />
    <BehindeTariff/>
    <SliderApp/>

    <!-- Остальное содержимое вашего приложения -->
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import InformApp from './components/InformApp.vue';
import TeamApp from './components/TeamApp.vue';
import BehindeTariff from './components/BehindeTariff.vue';
import SliderApp from './components/SliderApp.vue';



export default {
  components: {
    BehindeTariff,
    AppHeader,
    InformApp,
    TeamApp,
    SliderApp

  },
};
</script>

<style>

*{
  font-family: 'Montserrat', sans-serif;
}

</style>
