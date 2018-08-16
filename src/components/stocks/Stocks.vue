<template>
  <div>
    <appStock v-for="stock in stocks" :key="stock._id" :stock="stock"></appStock>
  </div>
</template>

<script>
import Stock from './Stock.vue'

export default {
  components: {
    appStock: Stock
  },
  computed: {
    stocks() {
      // console.log(this.$store.getters.stocks)
      return this.$store.getters.stocks
    }
  }
}
</script>

<style>
</style>
