import denRequest from '../index'
import { IAccount, IDateType, ILoginResult } from './types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // /users/1
  UserMenus = '/role/' //用法 role/:id/menu
}

export function accountLoginRequest(account: IAccount): any {
  return denRequest.post<IDateType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number): any {
  return denRequest.get<IDateType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number): any {
  return denRequest.get<IDateType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}
