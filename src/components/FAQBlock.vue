

<script>
import FAQNew from "../components/FAQNew.vue";
export default {
  name: "FAQBlock",
  components: { FAQNew },
  data: ()=>{
    return{
      header_1:"Кто непосредственно занимется поддержкой?",
      text_1:"Сайты поддерживают штатные сотрудники ООО «Инитлаб», г.\n" +
          "    Краснодар, прошедшие специальное обучение и имеющие опыт\n" +
          "    работы с Друпал от 4 до 15 лет: 8 web-разработчиков, 2\n" +
          "    специалиста по SEO, 4 системных администратора.",
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
          <FAQBlock :header="header_1" :text="text_1" :isOpen="currentOpenBlock === 1" @toggle="setCurrentOpenBlock(1)"/>
        </ol>
      </div>
    </div>
  </div>
</template>

<style>
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