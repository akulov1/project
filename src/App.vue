<template>
  <div id="app">
    <AppHeader />
    <InformAdd />
    <!-- Остальное содержимое вашего приложения -->
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import InformApp from './components/InformAdd.vue';

export default {
  components: {
    AppHeader,
    InformAdd,
  },
};
</script>
