import { createStore } from 'vuex'
import { IRootState } from './types'
import login from './login/login'
const store = createStore<IRootState>({
  state: () => {
    return {
      name: 'chen',
      age: 198
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore(): any {
  store.dispatch('login/loadLocalLogin')
}

export default store
