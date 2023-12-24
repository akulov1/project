<script>
export default {
  name: "CaseBlockFullBig",
  props: {
    image: {
      String,
      required: true
    },
    header: {
      String,
      required: true
    }
  }
};
</script>

<template>
  <a href="" class="col-12 col-md-8 main-block">
    <div :style="{ backgroundPosition: 'center', backgroundImage: 'url(' + image + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }"
         class="advantage">
      <div class="overlay">
        <div class="header">
          {{ header }}
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

.advantage img {

  max-width: 100%;
  max-height: 100%;
}

.overlay {
  padding: 20px 15px 15px 15px;
  width: 100%;
  line-height: 1;
  position: absolute;
  bottom: 0;
}

.header {
  font-size: 14px;
  font-weight: 700;
  color: white;
  line-height: 1.22;
  margin-bottom: 5px;
}

.header:hover {
  text-decoration: underline;
}

@media screen and (min-width: 992px) {
  .main-block {
    height: 475px;
  }
}
</style>