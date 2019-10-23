import axios from 'axios'
import qs from 'qs'

// 默认值
axios.defaults.baseURL = ''
axios.defaults.timeout = 5000

// 请求拦截器
axios.interceptors.request.use(
	request => {
		if (request.method === 'post') {
			request.data = qs.stringify(request.data)
		}
		return request
	},
	error => {
		return Promise.reject(error)
	}
)

// 响应拦截器
axios.interceptors.response.use(
	response => {
		return response
	},
	error => {
		return Promise.reject(error)
	}
)

// get请求，返回Promise
let get = (url, params) => {
	return new Promise((resolve, reject) => {
		axios
			.get(url, { params: params })
			.then(
				response => {
					resolve(response)
				},
				err => {
					reject(err)
				}
			)
			.catch(error => {
				reject(error)
			})
	})
}

// post请求，返回Promise
let post = (url, params) => {
	return new Promise((resolve, reject) => {
		axios
			.post(url, params)
			.then(
				response => {
					resolve(response)
				},
				err => {
					reject(err)
				}
			)
			.catch(error => {
				reject(error)
			})
	})
}

export { get, post }

export default {
	get,
	post
}
