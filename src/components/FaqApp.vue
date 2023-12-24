<script>
export default {
  name: "FaqApp",
  props: {
    header: {
      String,
      required: true,
    },
    text: {
      String,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isClosed: true,
    };
  },
  watch: {
    isOpen(newValue) {
      this.isClosed = !newValue;
    },
  },
  methods: {
    switchBlock() {
      this.$emit("toggle");
    },
  },
};
</script>

<template>
  <button v-on:click="switchBlock" v-bind:class="{ 'button': isClosed, 'button opened': !isClosed }">
    <div class="advantage_f">
      <li>
        <div v-bind:class="{ 'header': isClosed, 'header header-opened': !isClosed }">
          {{ header }}
        </div>
        <div v-bind:class="{ 'text': isClosed, 'text text-opened': !isClosed }">
          {{ text }}
        </div>
      </li>
    </div>
  </button>
</template>

<style scoped>
li {
  font-size: 12px;
  color: #4e5a73;
}

.button {
  border-width: 3px;
  border-style: solid;
  border-color: white;
  background-color: white;
  line-height: 1.5;
  padding: 10px 30px;
  width: 100%;
  transition: all 0.4s ease;
}

.opened {
  border-color: #f14d34;

  margin-bottom: 10px;
}

.advantage_f {
  text-align: left;
  min-height: 1px;
  max-height: 100%;
}

.header {
  font-size: 18px;
  font-weight: 700;
  color: #050c33;
  line-height: 1.22;
  transition: all 0.4s ease;
  margin-bottom: 15px;
}

.header-opened {
  color: #f14d34;
}

.text {
  font-size: 16px;
  line-height: 1.37;
  color: #4e5a73;
  display: none;
}

.text-opened {
  display: block;
  font-size: 1rem;
  color: #212529;
}

@media screen and (min-width: 768px) {
  .advantage {
    margin: 0;
  }
}
</style>