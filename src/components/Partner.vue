<script>
/* eslint-disable */
export default {
  name: "Partner",
  props: {
    image: {
      String,
      required: true
    }
  }
};
</script>

<template>
  <div class="main-block">
    <div class="image-container">
      <img v-bind:src="image" alt="image" width="290" height="155" class="img-responsive">
    </div>
  </div>
</template>

<style scoped>

.image-container {
  background: #fff;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: #DDD;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 90px;
  overflow: hidden;
}

.image-container img {
  margin: 0 auto;
  max-width: 60%;
  height: auto;
}

@media screen and (min-width: 768px) {
  .image-container {
    width: 225px;
    height: 115px;
  }
}
</style>
