import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    boardClicks: []
  },
  mutations: {
    change(state, boardClicks) {
      state.boardClicks = boardClicks
    }
  },
  getters: {
    boardClicks: state => state.boardClicks
  }
})