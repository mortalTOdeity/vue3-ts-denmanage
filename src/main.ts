import { createApp, App } from 'vue'
import { globalRegister } from './global/index'

import './service/axios_demo'
import './service/index'
// import denRequest from './service/index'
import rootApp from './App.vue'
import router from './router'
import store from './store'

const app: App = createApp(rootApp)
//注册element+

globalRegister(app)
// app.use(globalRegister)
app.use(router)
app.use(store)
app.mount('#app')

console.log(process.env.VUE_APP_aazz)
console.log(process.env.VUE_APP_MyName)

// denRequest.request()
