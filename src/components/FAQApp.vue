<template>
  <h2 class="block-title">FAQ</h2>
  <div class="faq-container">
    <details> <!-- вставить details -->
      <summary>
        <span class="faq-title">
          1. Кто непосредственно занимется поддержкой?
        </span>
        </summary>
      <div class="faq-content">
        Сайт поддерживают .....
      </div>
    </details>
    <details> <!-- вставить details -->
      <summary>
        <span class="faq-title">
          Кто непосредственно занимется поддержкой?
        </span>
        </summary>
      <div class="faq-content">
        Сайт поддерживают .....
      </div>
    </details>
  </div>

</template>

<script setup>/*
class Accordion{
  constructor(el) {
    this.el=el;
    this.summary=el.querySelector('summary');
    this.contant=el.querySelector(".faq-content");
    this.extandIcon=this.summary.querySelector(".expand-icon");
    this.animation=null;
    this.isClosing=false;
    this.isExpanding=false;
    this.summary.addEventListener('click', (e) => this.onClick(e));

  }

  onClick(e){
    e.preventDefault();
    this.el.style.overflow='hidden';

    if(this.isClosing || !this.el.open){
      this.open();
    } else if( this.isExpanding || this.el.open){
      this.shrink();
    }
  }
  shrink(){
    this.isClosing = true;


  }
}*/
</script>

<style>
.faq-container{
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 12em;
}

summary{
  user-select: none;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  list-style: none;
  padding: 1em;
  align-items: center;

}

details{
  font-size: 1rem;
  margin: 0 auto;
  width: 100%;
  background: white;
  border-radius: 1px;
  position: relative;
  max-width: 600px;
  border: 0px solid #ffff;
  transition: all 0.3s ease-in-out;
}
details:hover{
  border: 3px solid #e04331;
}
summary:hover .faq-title{
  opacity: 1;
}
summary::-webkit-details-marker{
  display: none;
}
summary:focus{outline: none}

.faq-title{
  color: rgb(128, 128, 128);
  width: 90%;
  opacity: 0.65;
  transition: all 250ms ease-in-out;
}

.faq-content{
  color: black;
  padding: 0.2em 1em 1em 1em;
  font-weight: 300;
  line-height: 2;
}
</style>