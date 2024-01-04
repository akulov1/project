<template>
  <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <form v-if="showForm" @submit.prevent="submitForm" id="Form">
      <div class="form-row">
        <div class="col-12">
          <input class="form-control opacity-75 p-4 form-control-md info"
                 type="text"
                 name="lastName"
                 placeholder="Ваше имя" autocomplete required>
        </div>
        <div class="col-12">
          <input class="form-control opacity-75 p-4 form-control-md info"
                 type="text"
                 name="userPhone"
                 placeholder="Телефон"
                 autocomplete
                 pattern="[0-9+]+"
                 required>
        </div>
        <div class="col-12">
          <input class="form-control opacity-75 p-4 form-control-md info"
                 type="email"
                 name="userEmail"
                 placeholder="E-mail"
                 required
                 autocomplete>
        </div>
        <div class="col-12">
              <textarea class="form-control opacity-75 p-4 form-control-md info"
                        name="userMsg"
                        placeholder="Ваш комментарий"
              ></textarea>
        </div>
        <div class="col-12">
          <input type="checkbox" id="check" required class="info">
          Согласен с
          <a class="form-politics" href="#" rel="nofollow">
            политикой обработки персональных данных
          </a>
        </div>
        <div class="col-12 mt-3">
          <button :disabled="isLoading" class="btn btn-footer" type="submit" id="Button">
            <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span v-else>Свяжитесь с нами!</span>
          </button>
        </div>
      </div>
    </form>
  </transition>
  <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  <div v-if="isFormSubmitted" class="col-12 mt-3 text-success">
    Форма успешно отправлена!
  </div>
</template>

<script >
import axios from 'axios';

export default {
  data() {
    return {
      showForm: true,
      isLoading: false,
      isFormSubmitted: false,
      errorMessage: '',
    };
  },
  mounted() {
    window.addEventListener('popstate', this.handlePopstate);
  },
  beforeUnmount() {
    window.removeEventListener('popstate', this.handlePopstate);
  },
  watch: {
    showForm(newVal) {
      if (newVal) {
        const newUrl = `${window.location.pathname}#form`;
        history.pushState({ path: newUrl }, '', newUrl);
      }
    },
  },
  methods: {
    async submitForm() {
      try {

        const newUrl = `${window.location.pathname}#form`;
        history.pushState({path: newUrl}, '', newUrl);
        this.isLoading = true;

        const formData = new FormData(document.getElementById('Form'));
        await axios.post('https://formcarry.com/s/hf6UnkWxsF', formData);

        this.isFormSubmitted = true;
        this.isLoading = false;
        this.showForm = false;

      } catch (error) {
        console.error('Ошибка:', error);
        this.isLoading = false;
        this.errorMessage = 'Ошибка при отправке формы. Пожалуйста, попробуйте еще раз.';
      }
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      let opacity = 0;
      const duration = 500;

      function animate() {
        opacity += 1 / (duration / 16);
        el.style.opacity = opacity;

        if (opacity < 1) {
          requestAnimationFrame(animate);
        } else {
          done();
        }
      }

      animate();
    },
    leave(el, done) {
      let opacity = 1;
      const duration = 500; // Длительность анимации в миллисекундах

      function animate() {
        opacity -= 1 / (duration / 16); // Изменение прозрачности
        el.style.opacity = opacity;

        if (opacity > 0) {
          requestAnimationFrame(animate);
        } else {
          done();
        }
      }

      animate();
    },
    handlePopstate() {
      // Handle the "popstate" event, close the form if it is open
      if (this.showForm) {
        this.showForm = false;
      }
    },
  },

};
</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 10px;
}
.btn-footer{
  background: #f14d34;
  color: #fff;
}
.btn-footer:hover{
  background: #d13018;
}
</style>