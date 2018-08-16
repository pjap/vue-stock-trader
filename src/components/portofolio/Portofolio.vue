<template>
  <div>
    <appStock v-for="stock in stocks" :stock="stock" :key="stock._id"></appStock>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Stock from './Stock.vue'

export default {
  computed: {
    ...mapGetters({
      stocks: 'stocksPortofolio'
    }),

  },
  components: {
    appStock: Stock
  }
}
</script>

<style>
</style>
