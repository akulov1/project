<template>
  <div id="app">
    <AppHeader />
    <InformApp />
    <!-- Остальное содержимое вашего приложения -->
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import InformApp from './components/InformApp.vue';

export default {
  components: {
    AppHeader,
    InformApp,
  },
};
</script>
