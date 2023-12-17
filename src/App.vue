<template>
  <div id="app">
    <AppHeader />
    <InformApp />
    <TeamApp />
    <


    <!-- Остальное содержимое вашего приложения -->
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import InformApp from './components/InformApp.vue';
import TeamApp from './components/TeamApp.vue';



export default {
  components: {
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
