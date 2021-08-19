import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState } from './types'
import { sb } from './types'
import login from './login/login'

// console.log(sb)

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

export function useStore(): Store<sb> {
  return useVuexStore()
}

export default store
