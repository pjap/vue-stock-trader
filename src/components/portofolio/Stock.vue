<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-danger">
      <div class="panel-heading">
        <h3 class="panel-title">{{ stock.name }} <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small> </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model="quantity" :class="{infoWrong: insufficientFunds}">
        </div>
        <div class="pull-right">
          <button class="btn btn-success" @click="sellStock" :disabled="insufficientFunds || quantity <= 0">{{ insufficientFunds ? 'To Much' : 'Sell'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    ...mapActions({
      sellingStock: 'sellStock'
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: Number(this.quantity)
      }
      // console.log(JSON.stringify(this.$store.getters.stocksPortofolio) + '>>>>>>> Database Stock Portofolio');
      // console.log(JSON.stringify(order) + ' >>>>>>>>>>>>>>>>>>>>>>> DARI STOCK PORTOFOLIO');
      this.sellingStock(order)
    }
  },
  computed: {
    insufficientFunds() {
      return this.quantity > this.stock.quantity
    }
  }
}
</script>

<style scoped>
  .infoWrong {
    border: 1px solid red;
  }
</style>
