<script>
export default {
  name: "CaseBlockHalf",
  props: {
    image: {
      String,
      required: true
    },
    header: {
      String,
      required: true
    },
    text: {
      String,
      required: true
    },
    date: {
      String,
      required: true
    },
  }
};
</script>

<template>
  <a href="" title="" class="col-12 col-md-4 main-block">
    <div class="advantage">
      <div class="image-wrapper">
        <img v-bind:src="image" alt="image" class="img-responsive">
      </div>
      <div class="overlay justify-content-center">
        <div class="header">
          {{ header }}
        </div>
        <div class="number">
          {{ date }}
        </div>
        <div class="main-text">
          {{ text }}
        </div>
      </div>
    </div>
  </a>
</template>

<style scoped>
.main-block {
  height: 360px;
  padding: 0 10px 0 10px;
  margin-bottom: 10px;
  text-decoration: none;
}

.advantage {
  border-radius: 5px;
  position: relative;
  height: 100%;
}

.overlay {
  padding: 50px 50px 15px 50px;
  width: 100%;
  bottom: 0;
}

.number {
  margin-bottom: 20px;
  font-size: 12px;
  color: #828a9b;
}

.header {
  font-size: 16px;
  font-weight: 700;
  color: #050c33;
  line-height: 1.22;
  margin-bottom: 5px;
}

.header:hover {
  text-decoration: underline;
}

.main-text {
  font-size: 12px;
  color: #4e5a73;
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-wrapper img {
  border-radius: 5px;
  max-width: 100%;
  max-height: 200px;
  width: 100%;
  height: auto;
}

@media screen and (min-width: 768px) {
  .image-wrapper img {
    border-radius: 5px;
    max-width: 100%;
    height: auto;
  }
}

@media screen and (min-width: 992px) {
  .main-block {
    height: 475px;
  }
}
</style>