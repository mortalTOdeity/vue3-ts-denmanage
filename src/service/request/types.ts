import type { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface DenRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}
export interface DenRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: DenRequestInterceptors<T>
  showLoading?: boolean
}
