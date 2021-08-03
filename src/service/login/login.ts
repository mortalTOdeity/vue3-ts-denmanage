import denRequest from '../index'
import { IAccount } from './types'

enum LoginAPI {
  AccountLogin = '/login'
}

export function accountLoginRequest(account: IAccount): any {
  return denRequest.post({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
