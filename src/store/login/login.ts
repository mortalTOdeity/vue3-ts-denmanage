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
      console.log(loginResult)
      return commit
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行accountLoginAction', payload)
      return commit
    }
  },
  mutations: {},
  getters: {}
}
export default loginModule
