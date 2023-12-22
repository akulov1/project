<template>
  <div id="app">
    <AppHeader />
    <InformApp />
    <TarifApp></TarifApp>
    <BehindeTariff />
    <TeamApp />
    <CaseApp/>

    <Slider />
    <FAQApp/>
    <FAQNew/>

    <!-- Остальное содержимое вашего приложения -->
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import InformApp from './components/InformApp.vue';
import TeamApp from './components/TeamApp.vue';
import BehindeTariff from './components/BehindeTariff.vue';
import Slider from './components/Slider.vue';
import TarifApp from "./components/TarifApp.vue";
import FAQApp from "./components/FAQApp.vue";
import FAQNew from "./components/FAQNew.vue";
import CaseApp from "@/components/CaseApp.vue";




export default {
  components: {
      BehindeTariff,
    AppHeader,
    InformApp,
    TeamApp,
    Slider,
    TarifApp,
    FAQApp,
    FAQNew,
    CaseApp

  },
};
</script>

<style>
* {
  font-family: 'Montserrat', sans-serif;
}
</style>
