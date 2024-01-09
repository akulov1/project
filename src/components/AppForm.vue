<template>
  <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <form @submit.prevent="submitForm" id="Form">
      <div class="form-row">
        <div class="col-12">
          <input v-model="formData.lastName" class="form-control opacity-75 p-4 form-control-md info"
                 type="text"
                 name="lastName"
                 placeholder="Ваше имя" autocomplete required>
          <div v-if="!isFieldValid('lastName')" class="error-message">Пожалуйста, введите ваше имя.</div>
        </div>
        <div class="col-12">
          <input v-model="formData.userPhone" class="form-control opacity-75 p-4 form-control-md info"
                 type="text"
                 name="userPhone"
                 placeholder="Телефон"
                 autocomplete
                 pattern="[0-9+]+"
                 required>
          <div v-if="!isFieldValid('userPhone')" class="error-message">Введите правильный номер телефона.</div>
        </div>
        <div class="col-12">
          <input v-model="formData.userEmail" class="form-control opacity-75 p-4 form-control-md info"
                 type="email"
                 name="userEmail"
                 placeholder="E-mail"
                 required>
          <div v-if="!isFieldValid('userEmail')" class="error-message">Введите правильный адрес электронной почты.</div>
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
        <div class="col-12">
          <button :disabled="isLoading || !isFormValid" class="btn btn-footer" type="submit" id="Button">
            <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            <span v-else-if="!isFormValid">Форма заполнена не полностью!</span>
            <span v-else>Свяжитесь с нами!</span>
          </button>
        </div>
      </div>
    </form>
  </transition>
  <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <div v-if="isFormSubmitted" class="col-12 mt-3 text-success">
      Форма успешно отправлена!
    </div>
    <div v-else-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </transition>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData:{
        lastName: '',
        userPhone: '',
        userEmail: '',
      },
      isLoading: false,
      isFormSubmitted: false,
      errorMessage: '',
    };
  },
  computed: {
    isFormValid() {
      // Добавьте логику для проверки валидности всей формы
      return (
          this.isFieldValid('lastName') &&
          this.isFieldValid('userPhone') &&
          this.isFieldValid('userEmail')
          // Дополните для других полей
      );
    },
  },
  methods: {
    isFieldValid(fieldName) {
      const value = this.formData[fieldName].trim();

      if (fieldName === 'userPhone') {
        //должно содержать только цифры и символ '+'
        return /^[0-9+]+$/.test(value);
      } else if (fieldName === 'userEmail') {
        //валидация адреса электронной почты
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      }

      return value !== '';
    },

    saveFormDataToLocalStorage(formData) {
      localStorage.setItem('formData', JSON.stringify(formData));
    },

    loadFormDataFromLocalStorage() {
      const savedFormData = localStorage.getItem('formData');
      if (savedFormData) {
        return JSON.parse(savedFormData);
      }
      return null;
    },

    async submitForm() {
      try {
        this.isLoading = true;

        const formData = new FormData(document.getElementById('Form'));
        await axios.post('https://formcarry.com/s/hf6UnkWxsF', formData);

        this.isFormSubmitted = true;
        this.isLoading = false;

        localStorage.removeItem('formData');
      } catch (error) {
        console.error('Ошибка:', error);
        this.isLoading = false;
        this.errorMessage =
            'Ошибка при отправке формы. Пожалуйста, попробуйте еще раз.';

        const formData = new FormData(document.getElementById('Form'));
        this.saveFormDataToLocalStorage(Object.fromEntries(formData));
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
      const duration = 500;

      function animate() {
        opacity -= 1 / (duration / 16);
        el.style.opacity = opacity;

        if (opacity > 0) {
          requestAnimationFrame(animate);
        } else {
          done();
        }
      }
      animate();
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