import { SET_ROUTERS } from "../mutation-types"
import { constantRouterMap } from "@/routers"

const AsyncRouter = {
  state: {
    allRouters: [],
    addRouters: []
  },
  mutations: {
    [SET_ROUTERS]: (state, asyncRouterMap) => {
      state.addRouters = asyncRouterMap
      state.addRouters = constantRouterMap.concat(asyncRouterMap)
    }
  },
  actions: {
    GenerateRoutes ({commit}, asyncRouterMap) {
      return new Promise(resolve => {
        commit('SET_ROUTERS', asyncRouterMap)
        resolve()
      })
    }
  }
}

export default AsyncRouter
