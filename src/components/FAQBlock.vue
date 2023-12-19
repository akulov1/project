<template>
  <div :class="open ? 'faq open' : 'faq'" @click="$emit('toggleOpen', index)">
    <div class="question">{{ faq.question }}</div>
    <div class="answer">{{ faq.answer }}</div>
  </div>
</template>

<script>
import FAQNew from "@/components/FAQNew.vue.vue";
export default {
  name: 'FAQBlock',
  props: ['faq', 'index', 'open']
}
</script>