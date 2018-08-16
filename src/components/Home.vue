<template>
  <div>
    <h1>Trade or View Your Portofolio</h1>
    <h6>You May Save and Load Your Data</h6>
    <h6>Click On 'End Day' To Begin a New Day!</h6>
    <hr>
    <p>Your Funds : {{ funds | currency }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds
    }
  }
}
</script>

<style>
</style>
