<template>
  <the-header></the-header>
  <the-main></the-main>
</template>

<script>
// @ is an alias to /src
import TheHeader from '../components/TheHeader.vue'
import TheMain from '../components/TheMain.vue'

export default {
  name: 'Home',
  components: {
    TheHeader,
    TheMain
  }
}
</script>