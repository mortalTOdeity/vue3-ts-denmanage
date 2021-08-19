import { ILoginState } from './login/types'
export interface IRootState {
  name: string
  age: number
}
export interface IRootWithModule {
  login: ILoginState
}

// export const sb = 'asd'
export type sb = IRootState & IRootWithModule
//  default IStoreType
