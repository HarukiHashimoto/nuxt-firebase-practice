<template lang="pug">
  div.home
    Navigation
</template>
<script>
import Navigation from "@/components/Navigation.vue";
export default {
  components: {
    Navigation,
  }
}
</script>
<style lang="stylus" scoped>
.home
  width 100%
  max-width 800px
  margin auto
</style>