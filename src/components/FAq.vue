<script>
import FaqApp from "../components/FaqApp.vue";

export default {
  name: "FAq",
  components: { FaqApp },
  data: () => {
    return {
      header1: "Кто непосредственно занимается поддержкой?",
      text1: "Сайты поддерживают штатные сотрудники ООО «Инитлаб», г. Краснодар, прошедшие специальное обучение и имеющие опыт работы с Друпал от 4 до 15 лет: 8 web-разработчиков, 2 специалиста по SEO, 4 системных администратора",

      header2: "Кто непосредственно занимается поддержкой?",
      text2: "Сайты поддерживают штатные сотрудники ООО «Инитлаб», г. Краснодар, прошедшие специальное обучение и имеющие опыт работы с Друпал от 4 до 15 лет: 8 web-разработчиков, 2 специалиста по SEO, 4 системных администратора",
      currentOpenBlock: null,
    }
  },
  methods: {
    setCurrentOpenBlock(index) {
      this.currentOpenBlock = this.currentOpenBlock === index ? null : index;
    },
  },
}
</script>

<template>
  <div class="support-main-block">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12">
          <h1 class="support-title text-center">
            FAQ
          </h1>
        </div>
      </div>
      <div class="flex-row">
        <ol>
          <FaqApp :header="header1" :text="text1" :isOpen="currentOpenBlock === 1" @toggle="setCurrentOpenBlock(1)"/>
          <FaqApp :header="header2" :text="text2" :isOpen="currentOpenBlock === 2" @toggle="setCurrentOpenBlock(2)"/>
          </ol>

      </div>
    </div>
  </div>
</template>

<style scoped>
.support-main-block {
  margin-bottom: 0;
  position: relative;
}

.flex-row {
  padding: 0;
  margin-bottom: 0;
}

.support-title {
  padding-top: 100px;
  margin-bottom: 20px;
  text-align: center;
  color: #050c33;
  font-weight: 700;
  font-size: 24px;
}

ol {
  padding-left: 0;
}

@media screen and (min-width: 768px) {
  .support-title {
    margin-bottom: 55px;
    font-size: 42px;
  }
}
</style>