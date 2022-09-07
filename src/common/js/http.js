import axios from 'axios'
import qs from 'qs'

// 默认配置
const defaultConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL ?? '',
  timeout: 5000,
}

// 创建axios实例，请求配置：https://axios-http.com/zh/docs/req_config
const axiosInstance = axios.create(defaultConfig)

// 请求拦截器
axiosInstance.interceptors.request.use(
  (request) => {
    if (
      request.method === 'post'
      && request.headers['Content-Type'] !== 'multipart/form-data'
    )
      request.data = qs.stringify(request.data)

    return request
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 更新原对象
const updateOriginalObj = (obj = {}, originalObj = {}) => {
  if (typeof originalObj === 'object') {
    for (const key in originalObj) {
      if (obj[key] in obj) {
        if (typeof originalObj[key] === 'object')
          originalObj[key] = this(obj[key], originalObj[key])
        else
          originalObj[key] = obj[key]
      }
    }
  }
  return originalObj
}

// 更新默认配置
const updateDefaultConfig = (config) => {
  axiosInstance.defaults = updateOriginalObj(config, axiosInstance.defaults)
}

// 统一处理请求
const request = (config) => {
  const { url = '', params = {}, method = 'get', options = {} } = config
  const data = method === 'get' ? { params } : { data: params }
  const requestConfig = { url, ...data, method, ...options }
  return new Promise((resolve, reject) => {
    axiosInstance.request(requestConfig).then((response) => {
      resolve(response)
    }).catch((error) => {
      reject(error)
    })
  })
}

// get请求，返回Promise
const get = (url, params, options) => {
  return request({ url, params, method: 'get', options })
}

// post请求，返回Promise
const post = (url, params, options) => {
  return request({ url, params, method: 'post', options })
}

export {
  updateDefaultConfig,
  get,
  post,
}

export default {
  updateDefaultConfig,
  get,
  post,
}
