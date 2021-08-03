import denRequest from '../index'
import { IAccount, IDateType, ILoginResult } from './types'

enum LoginAPI {
  AccountLogin = '/login'
}

export function accountLoginRequest(account: IAccount) {
  return denRequest.post<IDateType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
