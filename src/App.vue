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
    <FAq/>
    <FooterApp />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import InformApp from './components/InformApp.vue';
import TeamApp from './components/TeamApp.vue';
import BehindeTariff from './components/BehindeTariff.vue';
import Slider from './components/Slider.vue';
import PodderzhkaAndExpertiseApp from './components/PodderzhkaAndExpertiseApp.vue';
import TarifApp from "./components/TarifApp.vue";
import CaseApp from "@/components/CaseApp.vue";
import FooterApp from "@/components/FooterApp.vue";
import FAq from "@/components/FAq.vue";




export default {
  components: {
    FAq,
    BehindeTariff,
    AppHeader,
    InformApp,
    TeamApp,
    Slider,
    PodderzhkaAndExpertiseApp,
    TarifApp,
    CaseApp,
    FooterApp
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

* {
  font-family: 'Montserrat', sans-serif;
}
</style>
