import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// source of truth for application wide state

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