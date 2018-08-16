import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const state = {
  funds: 100000,
  stocksPorto: []
}

const getters = {
  stocksPortofolio(state, getters) {
    // console.log(JSON.stringify(state.stocksPorto) + 'FROM PORTOFOLIO MODULES');
    return state.stocksPorto.map(stock => {
      const record = getters.stocks.find(element => element.id == stock._id)
      // console.log(JSON.stringify(record) + ' IYEUUUUUUUUUUUUUUUUUUUUUUUUUUUuu');
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.namaBarang,
        price: record.hargaBarang
      }
      // console.log(state.stocksPorto + 'ADA SINI');
    })
  },
  funds(state) {
    return state.funds
  }
}

const mutations = {
  'BUY_STOCK' (state, { stockId, stockPrice,quantity,stockName }) {
    const record = state.stocksPorto.find(element => element.id == stockId)
    if (record) {
      record.quantity += quantity
    } else {
      state.stocksPorto.push({
        id: stockId,
        quantity: quantity,
        stockName: stockName,
        stockPrice: stockPrice
      })
    }
    state.funds -= stockPrice * quantity
  },
  'SELL_STOCK' (state, { stockId, stockPrice, quantity }) {
    console.log(JSON.stringify(state.stocksPorto) + 'XXXXXXXXXXXXXXXXXXXX SELL STOCK');
    // console.log(stockId + '>>>>>>>>> STOCK ID');
    const record = state.stocksPorto.find(element => element.id == stockId)
    console.log(JSON.stringify(record) + 'INI RECORD SELL STOCK');
    if (record.quantity > quantity) {
      record.quantity -= quantity
    } else {
      state.stocksPorto.splice(state.stocksPorto.indexOf(record), 1)
    }
    state.funds += stockPrice * quantity
  }
}

const actions = {
  sellStock({ commit }, order) {
    commit('SELL_STOCK', order)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
