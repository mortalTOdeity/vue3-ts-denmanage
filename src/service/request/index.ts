import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { DenRequestConfig, DenRequestInterceptors } from './types'
import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

const DEFAULT_LOADING = true
class DenRequest {
  instance: AxiosInstance
  interceptors?: DenRequestInterceptors
  showLoading: boolean
  loading?: ILoadingInstance

  constructor(config: DenRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    // 从config中取出的拦截器 是对应实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有的实例都有的拦截器：请求拦截成功')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在缓冲',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        return config
      },
      (err) => {
        console.log('所有的实例都有的拦截器：请求拦截失败')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有的实例都有的拦截器：响应拦截成功')
        // 将loading 移除
        setTimeout(() => {
          this.loading?.close()
        }, 1000)

        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败！')
        } else {
          return data
        }
      },
      (err) => {
        console.log('所有的实例都有的拦截器：响应拦截失败')
        setTimeout(() => {
          this.loading?.close()
        }, 1000)
        // 判断httpErrorCode显示不同的错误信息
        if (err.response.status === 404) {
          console.log('404 错误！')
        }
        return err
      }
    )
  }
  request<T>(config: DenRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            // res = config.interceptors.responseInterceptor(res)
          }
          console.log(res)
          // 2. 设置showLoading 不会影响下一个请求
          this.showLoading = DEFAULT_LOADING
          // 3. 将结果resolve 出去
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }
  get<T>(config: DenRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }
  post<T>(config: DenRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: DenRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: DenRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default DenRequest
