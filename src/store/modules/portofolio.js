import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const state = {
  funds: 10000,
  stocksPorto: []
}

const getters = {
  stocksPortofolio(state, getters) {
    console.log(JSON.stringify(state.stocksPorto) + 'FROM PORTOFOLIO MODULES');
    return state.stocksPorto.map(stock => {
      // console.log(JSON.stringify(stock) + ' ini stockooooooooooooooooooooo');
      const record = getters.stocks.find(element => element._id == stock.id)
      // console.log(JSON.stringify(record) + ' IYEUUUUUUUUUUUUUUUUUUUUUUUUUUUuu');
      // console.log(element + ' INI ELEMEN');
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.namaBarang,
        price: record.hargaBarang
      }
    })
  },
  funds(state) {
    return state.funds
  }
}

const mutations = {
  'BUY_STOCK' (state, { stockId, stockPrice,quantity,stockName }) {
    // console.log(stockId + ' XXXXXXXXXXXX ' + stockPrice);
    // console.log(JSON.stringify(state.stocksPorto) + "mutations GET DATABASE");
    const record = state.stocksPorto.find(element => element.id == stockId)
    // console.log(record);
    if (record) {
      record.quantity += quantity
    } else {
      state.stocksPorto.push({
        id: stockId,
        quantity: quantity,
        name: stockName,
        price: stockPrice
      })
    }
    state.funds -= stockPrice * quantity
  },
  'SELL_STOCK' (state, { stockId, stockPrice, quantity }) {
    // console.log(JSON.stringify(state.stocksPorto) + 'XXXXXXXXXXXXXXXXXXXX SELL STOCK');
    // console.log(stockId + '>>>>>>>>> STOCK ID');
    const record = state.stocksPorto.find(element => element.id == stockId)
    // console.log(JSON.stringify(record) + 'INI RECORD SELL STOCK');
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
