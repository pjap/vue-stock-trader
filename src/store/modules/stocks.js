import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const state = {
  stocks: []
}

const getters = {
  stocks: state => {
    return state.stocks
  }
}

const mutations = {
  'SET_STOCKS' (state, database) {
    state.stocks = database
  },
  'RND_STOCKS' (state) {
    // console.log(JSON.stringify(state.stocks) + 'INI STOCKKKKSSS');
    state.stocks.forEach(stock => {
      stock.hargaBarang = Math.round(stock.hargaBarang * (1 + Math.random() - 0.5))
    })
  }
}

const actions = {
  buyStock: ({ commit }, order) => {
    // console.log(JSON.stringify(order) + ' FROM MODULES STOCKS');
    commit('BUY_STOCK', order)
  },
  initStocks: ({ commit }) => {
    // commit('SET_STOCKS', database)
    axios
       .get('http://localhost:3000/barang')
       .then(r => r.data)
       .then(database => {
       commit('SET_STOCKS', database)
       })
  },
  randomizeStocks: ({ commit }) => {
    commit('RND_STOCKS')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
