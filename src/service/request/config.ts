// 方法1： 根据process.env.NODE_ENV
let BASE_URL = ''
const item = 'http://152.136.185.210:5000'
let TIME_OUT = 100000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = item
  console.log('-----', BASE_URL)
  TIME_OUT = 100000
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://chen.org/prod'
  TIME_OUT = 100000
} else {
  BASE_URL = 'http://chen.org/test'
  TIME_OUT = 100000
}
export { BASE_URL, TIME_OUT }
