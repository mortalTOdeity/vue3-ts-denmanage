export interface IAccount {
  name: string
  password: string
}

// export interface IUserInfo<T = any> {
//   code: number
//   data: T
// }

export interface IDateType<T = any> {
  code: number
  data: T
}

export interface ILoginResult {
  token: string
  id: number
  name: string
}
