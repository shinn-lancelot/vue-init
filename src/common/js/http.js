import axios from 'axios'
import qs from 'qs'

// 默认配置
let defaultConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL ?? '',
  timeout: 5000,
}

// 创建axios实例，请求配置：https://axios-http.com/zh/docs/req_config
let axiosInstance = axios.create(defaultConfig)

// 请求拦截器
axiosInstance.interceptors.request.use(
  request => {
    if (
			request.method === 'post' &&
			request.headers['Content-Type'] != 'multipart/form-data'
		) {
			request.data = qs.stringify(request.data)
		}
    return request
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
axiosInstance.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

// 更新默认配置
let updateDefaultConfig = (config) => {
  axiosInstance.defaults = updateOriginalObj(config, axiosInstance.defaults)
}

// 统一处理请求
let request = (config) => {
  let { url = '', params = {}, method = 'get', options = {} } = config
  let data = method === 'get' ? { params } : { data: params }
  let requestConfig = { url, ...data, method, ...options }
  return new Promise((resolve, reject) => {
    axiosInstance.request(requestConfig).then(response => {
      resolve(response)
    }).catch(error => {
      reject(error)
    })
  })
}

// get请求，返回Promise
let get = (url, params, options) => {
  return request({ url, params, method: 'get', options})
}

// post请求，返回Promise
let post = (url, params) => {
  return request({ url, params, method: 'post', options})
}

// 更新原对象
let updateOriginalObj = (obj = {}, originalObj = {}) => {
	if (typeof originalObj === Object) {
		for (let key in originalObj) {
			if (obj[key] in obj) {
				if (typeof originalObj[key] === Object) {
					originalObj[key] = this(obj[key], originalObj[key])
				} else {
					originalObj[key] = obj[key]
				}
			}
		}
	}
	return originalObj
}

export {
  updateDefaultConfig,
  get,
  post
}

export default {
  updateDefaultConfig,
  get,
  post
}