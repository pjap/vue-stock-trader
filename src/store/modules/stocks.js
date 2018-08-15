import database from '../../data/stocks'

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
    // console.log(JSON.stringify(state.stocks.name) + '         IYEUUUUUUUUUUUUUUUu');
  },
  'RND_STOCKS' (state) {

  }
}

const actions = {
  buyStock: ({ commit }, order) => {
    commit()
  },
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', database)
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
