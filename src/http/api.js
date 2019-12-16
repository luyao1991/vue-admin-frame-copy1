/* axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios'
import router from '@/router'
import HeyUI from 'heyui'

// 环境的切换
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = '/api'
} else if (process.env.NODE_ENV === 'debug') {
  axios.defaults.baseURL = ''
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'http://api.123dailu.com/'
}
// 请求超时时间
axios.defaults.timeout = 10000
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencodedcharset=UTF-8'
// 请求拦截器
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = 'afasdfsfads'
    token && (config.headers.Authorization = token)
    return config
  },
  error => {
    return Promise.error(error)
  })
// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 401:
          router.replace({
            path: '/login',
            query: { redirect: router.currentRoute.fullPath }
          })
          break
        case 403:
          this.$Message.info('登录过期，请重新登录')
          localStorage.removeItem('token')
          setTimeout(() => {
            router.replace({
              path: '/login',
              query: {
                redirect: router.currentRoute.fullPath
              }
            })
          }, 1000)
          break
        // 404请求不存在
        case 404:
          HeyUI.$Message.info('网络请求不存在')
          break
        default:
          this.$Message.info(error.response.data.message)
      }
      return Promise.reject(error.response)
    }
  }
)
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}

export default {get, post}
