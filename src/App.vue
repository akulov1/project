<template>
  <div id="app">
    <AppHeader />
    <InformApp />
    <PodderzhkaAndExpertiseApp />
    <TarifApp />
    <BehindeTariff />
    <TeamApp />
    <CaseApp />
    <Slider />








  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import InformApp from './components/InformApp.vue';
import TeamApp from './components/TeamApp.vue';
import BehindeTariff from './components/BehindeTariff.vue';
import Slider from './components/Slider.vue';
import PodderzhkaAndExpertiseApp from "./components/PodderzhkaAndExpertiseApp"
import TarifApp from "./components/TarifApp.vue";
import CaseApp from "@/components/CaseApp.vue";




export default {
  components: {


    BehindeTariff,
    AppHeader,
    InformApp,
    TeamApp,
    Slider,
    PodderzhkaAndExpertiseApp,
    TarifApp,
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
