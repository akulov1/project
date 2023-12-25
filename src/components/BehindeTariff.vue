<script setup>

</script>

<template>
  <section>
<div class="competencies without-padding-bottom" >
  <div class="container">
    <div class="row">
      <div class = "col-md-10 time">
        <h1 class = "competency-title">Наши профессиональные разработчики выполняют быстро любые задачи</h1>
      </div>
      <div class="row row-flex competencies-row">
        <div class="col-sm-4 col-xs-12">
          <div class="competency">
            <div class="competency-wrapper">
              <div class="competency-header">
                <div class="competency-icon">
                 <!-- ::before -->
                  <img src = "../assets/img/druplar-logo.svg" alt = "druplar-logo" class = "position-absolute logoForOpacity1 mt-3"/>
                  <img src="../assets/img/competency-20.svg" class="img-responsive">
                </div>
              </div>
              <div class="competency-body">
                <div class="competency-time">от 1ч</div>
                 Настройка события GA
                <br>
                 в интернет-магазине
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4 col-xs-12">
          <div class="competency">
            <div class="competency-wrapper">
              <div class="competency-header">
                <div class="competency-icon">
                  <!-- ::before -->
                  <img src = "../assets/img/druplar-logo.svg" alt = "druplar-logo" class = "position-absolute logoForOpacity2 mt-3"/>
                  <img src="../assets/img/competency-21.svg" class="img-responsive">
                </div>
              </div>
              <div class="competency-body">
                <div class="competency-time">от 20ч</div>
                Разработка мобильной
                <br>
                версии сайта
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4 col-xs-12">
          <div class="competency">
            <div class="competency-wrapper">
              <div class="competency-header">
                <div class="competency-icon">
                  <!-- ::before -->
                  <img src = "../assets/img/druplar-logo.svg" alt = "druplar-logo" class = "position-absolute logoForOpacity3 mt-3"/>
                  <img src="../assets/img/competency-22.svg" class="img-responsive">
                </div>
              </div>
              <div class="competency-body">
                <div class="competency-time">от 8ч</div>
                Интеграция модуля
                <br>
                оплаты
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </section>

</template>

<style scoped>
html{
  font-size: 16px;
}
img{
  border: 0;
}

@media (max-width: 1300px)
{
  .container
  {
    position: relative;
    z-index: 15;

  }
}

.competency-icon{

}

.competencies
{
  padding: 120px 0;
  align-items: center;
}
.logoForOpacity1{
  opacity: 15%;
  width: 8%;
  height: 8%;
  margin: auto;
  left: 500px;
}
.logoForOpacity2{
  opacity: 15%;
  width: 8%;
  height: 8%;
  margin: auto;
  left: 940px;
}

.logoForOpacity3{
  opacity: 15%;
  width: 8%;
  height: 8%;
  margin: auto;
  left: 1370px;

}

.competency{
  top: 20px;
  align-items: center;
}
.competency-title
{
  font-size: 42px;
  font-weight: 1000;
  margin-bottom: 20px;
  width: 100%;
  text-align: center!important;
}
.img-responsive{
  align-items: center!important;
  margin: auto;
}


.competency-body
{
  font-size: 15px;
  margin-top: 20px;
  text-align: center!important;
}
.time
{
  margin-bottom: 50px;
}

</style>