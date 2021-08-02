// service 统一出口
import DenRequest from './request/index'
import { BASE_URL, TIME_OUT } from './request/config'

const denRequest = new DenRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

// export const denRequest2 = new DenRequest({})

export default denRequest
