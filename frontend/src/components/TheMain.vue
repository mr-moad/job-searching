<template>
  <main>
      <the-search></the-search>
      <jobs-list></jobs-list>
  </main>
</template>

<script>
import JobsList from './JobsList.vue'
import TheSearch from './TheSearch.vue'
export default {
  components: { TheSearch, JobsList },

}
</script>
