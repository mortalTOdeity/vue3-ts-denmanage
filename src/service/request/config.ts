// 方法1： 根据process.env.NODE_ENV
let BASE_URL = ''
let BASE_NAME = ''

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://chen.org/dev'
  BASE_NAME = 'CHEN'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://chen.org/prod'
  BASE_NAME = 'CHEN'
} else {
  BASE_URL = 'http://chen.org/test'
  BASE_NAME = 'CHEN'
}
export { BASE_URL, BASE_NAME }
