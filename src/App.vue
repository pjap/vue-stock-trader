<template>
  <div class="container">
    <appHeader></appHeader>
    <div class="row">
      <div class="col-xs-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    appHeader: Header
  },
  created() {
    console.log('Created Di Panggil');
    this.$store.dispatch('initStocks')
  }
}
</script>

<style>
  body {
    padding: 30px;
  }
</style>
