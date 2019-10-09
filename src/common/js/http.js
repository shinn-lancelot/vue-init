import axios from 'axios'

// 默认值
axios.defaults.baseURL = ''
axios.defaults.timeout = 5000

// 请求拦截器
axios.interceptors.request.use(
	request => {
		return request
	},
	error => {
		return Promise.reject(error)
	}
)

// 相应拦截器
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
			.get(url, params)
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
