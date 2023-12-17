<template>
  <div class = "competency-region container-fluid">
    <div class = "competencies">
      <div class = "container">
        <div class = "row">
          <div class = "team">
            <div class = "container">
              <h2 class = "competency-title">Команда</h2>
            </div>
          </div>
        </div>
        <div class = "row competencies-row row-flex">
          <div class = "col-6 col-sm-4 ots1">
            <div class = "competency mb-3">
              <div class = "competency-wrapper">
                <div class = "competency-header">
                  <div class = "competency-icon">
                    <div class = "container">
                      <img src = "../assets/img/IMG_2472_0.jpg" alt = "IMG_2472_0" class = "img-responsive photo"/>
                    </div>
                  </div>
                </div>
                <div class = "container">
                  <h1>Сергей Синица</h1>
                  <div>Руководитель отдела веб-разработки, канд. тех. наук, заместитель директора</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class = "text-center mt-2">
      <div class = "container">
        <a  role = "button" class = "btn btn-outline-light button_team">вся команда</a>
        <!-- href = "#FooterApp" -->
      </div>
    </div>
  </div>
</template>

<script>
export default
{
  name: 'TeamApp'
}
</script>

<style>
h1{
  margin-top: 20px;
  font-size: 20px;
}
.photo{
  height: 300px;
}


</style>