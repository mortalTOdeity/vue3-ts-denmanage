import { Module } from 'vuex'
import { ILoginState } from './types'
import { IAccount } from '@/service/login/types'
import { IRootState } from '../types'
import { accountLoginRequest } from '@/service/login/login'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 实现账户登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      console.log(id)
      return commit
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行accountLoginAction', payload)
      return commit
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    }
  },
  getters: {}
}
export default loginModule
