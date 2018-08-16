<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">{{ stock.namaBarang }} <small>(Price: {{ stock.hargaBarang }})</small> </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input type="number" class="form-control" placeholder="Quantity" v-model="quantity">
        </div>
        <div class="pull-right">
          <button class="btn btn-success" @click="buyStock" :disabled="insufficientFunds || quantity <= 0">{{ insufficientFunds ? 'X Funds' : 'Buy'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
    return {
      quantity: 0
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock._id,
        stockName: this.stock.namaBarang,
        stockPrice: this.stock.hargaBarang,
        quantity: Number(this.quantity)
      }
      // console.log(order);
      this.$store.dispatch('buyStock', order)
      this.quantity = 0
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds
    },
    insufficientFunds() {
      return this.quantity * this.stock.hargaBarang > this.funds
    }
  }
}
</script>

<style>
</style>
