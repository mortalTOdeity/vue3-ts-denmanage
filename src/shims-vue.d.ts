/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare let $store: any

declare const VUE_APP_后面随便: string
declare const VUE_APP_MyName: string
