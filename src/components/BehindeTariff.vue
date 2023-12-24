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
                  <img src = "../assets/img/druplar-logo.svg" alt = "druplar-logo" class = "position-absolute logoForOpacity mt-3"/>
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
                  <img src = "../assets/img/druplar-logo.svg" alt = "druplar-logo" class = "position-absolute logoForOpacity mt-3"/>
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
                  <img src = "../assets/img/druplar-logo.svg" alt = "druplar-logo" class = "position-absolute logoForOpacity mt-3"/>
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
.competencies
{
  padding: 150px 0;
}
.logoForOpacity{
  opacity: 15%;
  width: 8%;
  height: 8%
}
.competency{
  top: 20px;

}
.competency-title
{
  align-items: center;
  font-size: 42px;
  font-weight: 1000;
  margin-bottom: 20px;
}
.competency-body
{
  font-size: 15px;
  margin-top: 20px;
}
.time
{
  margin-bottom: 50px;
}

</style>