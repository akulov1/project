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
    <FAQBlock/>

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
import CaseApp from "@/components/CaseApp.vue";
import FAQBlock from "@/components/FAQBlock.vue";




export default {
  components: {
    FAQBlock,
    BehindeTariff,
    AppHeader,
    InformApp,
    TeamApp,
    Slider,
    TarifApp,
    FAQApp,
    CaseApp

  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
* {
  font-family: 'Montserrat', sans-serif;
}
</style>
