<template>
  <div id="app">
    <AppHeader />
    <InformApp />
    <TeamApp />
    <BehindeTariff/>

    <!-- Остальное содержимое вашего приложения -->
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import InformApp from './components/InformApp.vue';
import TeamApp from './components/TeamApp.vue';
import BehindeTariff from './components/BehindeTariff.vue';



export default {
  components: {
    BehindeTariff,
    AppHeader,
    InformApp,
    TeamApp,

  },
};
</script>

<style>

*{
  font-family: 'Montserrat', sans-serif;
}

</style>
