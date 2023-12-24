<script>
import FaqApp from "../components/FaqApp.vue";

export default {
  name: "FAq",
  components: { FaqApp },
  data: () => {
    return {
      header1: "Кто непосредственно занимается поддержкой?",
      header2: "Как организована работа поддержки?",
      header3: "Что происходит, когда отработаны все предоплаченные часы за месяц?",
      header4: "Что происходит, когда не отработаны все предоплаченные часы за месяц?",
      header5: "Как происходит оценка и согласование планируемого времени на выполнение заявок?",
      header6: "Сколько программистов выделяется на проект?",
      header7: "Как подать заявку на внесение изменений на сайте?",
      header8: "Как подать заявку на добавление пользователя, изменение настроек веб-сервера и других задач по администрированию?",
      header9: "В течение какого времени начинается работа по заявке?",
      header10: "В какое время работает поддержка?",
      header11: "Подходят ли услуги поддержки, если необходимо произвести обновление ядра Drupal или модулей?",
      header12: "Можно ли пообщаться со специалистом голосом или в мессенждере?",
      text1: "Сайты поддерживают штатные сотрудники ООО «Инитлаб», г. Краснодар, прошедшие специальное обучение и имеющие опыт работы с Друпал от 4 до 15 лет: 8 web-разработчиков, 2 специалиста по SEO, 4 системных администратора",
      text2: "Работа поддержки организована в виде предоставления технической помощи, исправления ошибок, обновления контента и модулей, а также обеспечения безопасности сайта.",
      text3: "Если отработаны все предоплаченные часы за месяц, дополнительные часы могут быть оплачены дополнительно",
      text4:"Если не отработаны все предоплаченные часы за месяц, то они переносятся на следующий месяц.",
      text5:"Оценка и согласование планируемого времени на выполнение заявок обычно происходит через общение с менеджером проекта или ответственным за поддержку специалистом.",
      text6:"Количество программистов, выделенных на проект, также может различаться в зависимости от сложности и объема работ.",
      text7:"Заявку на внесение изменений на сайте обычно можно подать через специальную форму на сайте или через электронную почту.",
      text8:"Заявку на добавление пользователя, изменение настроек веб-сервера и другие задачи по администрированию можно подать через форму на сайте или по электронной почте.",
      text9:"Время начала работы по заявке обычно зависит от ее приоритета и загруженности команды по поддержке.",
      text10:"Время работы поддержки также может различаться, но обычно это стандартный рабочий день с возможностью круглосуточной поддержки в случае чрезвычайных ситуаций.",
      text11:"Услуги поддержки обычно включают в себя и обновление ядра Drupal и модулей.",
      text12:"Да, можно пообщаться со специалистом голосом или в мессенджере. Обычно для этого используются телефонные звонки, а также мессенджеры, такие как WhatsApp, Telegram, Skype и другие. Это позволяет заказчикам быстро и удобно общаться с командой поддержки для обсуждения вопросов и уточнения деталей.",
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
          <FaqApp :header="header3" :text="text3" :isOpen="currentOpenBlock === 3" @toggle="setCurrentOpenBlock(3)"/>
          <FaqApp :header="header4" :text="text4" :isOpen="currentOpenBlock === 4" @toggle="setCurrentOpenBlock(4)"/>
          <FaqApp :header="header5" :text="text5" :isOpen="currentOpenBlock === 5" @toggle="setCurrentOpenBlock(5)"/>
          <FaqApp :header="header6" :text="text6" :isOpen="currentOpenBlock === 6" @toggle="setCurrentOpenBlock(6)"/>
          <FaqApp :header="header7" :text="text7" :isOpen="currentOpenBlock === 7" @toggle="setCurrentOpenBlock(7)"/>
          <FaqApp :header="header8" :text="text8" :isOpen="currentOpenBlock === 8" @toggle="setCurrentOpenBlock(8)"/>
          <FaqApp :header="header9" :text="text9" :isOpen="currentOpenBlock === 9" @toggle="setCurrentOpenBlock(9)"/>
          <FaqApp :header="header10" :text="text10" :isOpen="currentOpenBlock === 10" @toggle="setCurrentOpenBlock(10)"/>
          <FaqApp :header="header11" :text="text11" :isOpen="currentOpenBlock === 11" @toggle="setCurrentOpenBlock(11)"/>
          <FaqApp :header="header12" :text="text12" :isOpen="currentOpenBlock === 12" @toggle="setCurrentOpenBlock(12)"/>
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