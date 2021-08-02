// import axios, { AxiosResponse } from 'axios'
import axios from 'axios'

// axios的实例对象
// 模拟get请求
// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res)
// })
// // 模拟 post请求
// axios
//   .post('http://httpbin.org/post', {
//     data: {
//       nam: 12312
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

// Promise 本身是可以有类型的
// new Promise<string>((resolve) => {
//   resolve('item')
// }).then((res) => {
//   console.log(res)
// })

// axios的配置选项
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000
axios.defaults.headers = {}

// axios
//   .get('/get', {
//     params: {
//       name: 'chen'
//     },
//     timeout: 5000,
//     headers: {}
//   })
//   .then((res) => {
//     console.log(res)
//   })
// // 模拟 post请求
// axios
//   .post('/post', {
//     data: {
//       nam: 12312
//     }
//   })
//   .then((res) => {
//     console.log(res)
//   })

// axios.all -> 多个请求一起返回
axios
  .all([axios.get('/get', { params: { age: 18 } }), axios.post('/post', { data: { age: 19 } })])
  .then((res) => {
    console.log(res)
  })

// axios拦截器
// fn1: 请求发送成功会执行的函数
// fn2: 请求发送失败会执行的函数

// axios.interceptors.request.use(fn1, fn2)
axios.interceptors.request.use(
  (config) => {
    // config.url = '/post'
    // 做想做的操作
    // 1. 给请求添加token
    // 2. 做loading动画
    console.log('请求成功')
    return config
  },
  (err) => {
    console.log('发生错误')
    return err
  }
)
// fn1响应成功  fn2 响应失败
// axios.interceptors.response.use(fn1, fn2)
axios.interceptors.response.use(
  (res) => {
    console.log('响应成功')
    return res
  },
  (err) => {
    console.log('响应失败！')
    return err
  }
)
