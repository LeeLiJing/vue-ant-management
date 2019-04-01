import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import asyncRouter from './modules/asyncRouter'

Vue.use(Vuex)

const Store = new Vuex.Store({
  modules: {
    asyncRouter
  },
  getters
})

export default Store
