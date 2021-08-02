import axios, { AxiosRequestConfig } from 'axios'
import type { AxiosInstance } from 'axios'

class DenRequest {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }
}

export default DenRequest
