<template>
  <div id="app">
    <DefaultLayout />
  </div>
</template>

<script>
import DefaultLayout from './components/layout/DefaultLayout.vue'

export default {
  name: 'App',
  components: {
    DefaultLayout,
  },
  data() {
    return {
    };
  },
  watch: {
    
  }
}
</script>

<style>
  @import "./assets/css/style.css";
</style>
