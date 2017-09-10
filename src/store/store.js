import Vuex from 'vuex'
import Vue from 'vue'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

let state = {
  blocks: [],
  active: {
    id: 'example',
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
