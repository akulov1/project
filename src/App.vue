<template>
  <div id="app">
    <AppHeader />
    <InformApp />
    <TeamApp />
    <BehindeTariff />
    <TarifApp></TarifApp>
    <Slider />
    <FAQApp/>

    <!-- Остальное содержимое вашего приложения -->
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import InformApp from './components/InformApp.vue';
import TeamApp from './components/TeamApp.vue';
import BehindeTariff from './components/BehindeTariff.vue';
import Slider from './components/Slider.vue';
import TarifApp from "./components/TarifApp.vue"
import FAQApp from "./components/FAQApp.vue"




export default {
  components: {
    BehindeTariff,
    AppHeader,
    InformApp,
    TeamApp,
    Slider,
    TarifApp,
    FAQApp,

  },
};
</script>

<style>
* {
  font-family: 'Montserrat', sans-serif;
}
</style>
