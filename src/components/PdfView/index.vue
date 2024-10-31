<script setup>
import VueOfficePdf from '@vue-office/pdf'

defineProps({
  url: {
    type: String,
    default: 'http://static.shanhuxueyuan.com/test.pdf'
  }
})

const renderedHandler = () => {
  console.log('rendered')
}
const errorHandler = (e) => {
  console.log(e)
}
</script>

<template>
  <vue-office-pdf
    :src="url"
    style="height: 100vh"
    @rendered="renderedHandler"
    @error="errorHandler"
  />
</template>

<style scoped></style>
