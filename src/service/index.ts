// service 统一出口
import DenRequest from './request/index'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'

const denRequest = new DenRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token 的拦截
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

// export const denRequest2 = new DenRequest({})

export default denRequest
