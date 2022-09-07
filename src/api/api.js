import http from 'common/js/http'

// get接口请求示例
const getExample = (data, options) => {
  return http.get('/get', data, options)
}

// post接口请求示例
const postExample = (data, options) => {
  return http.post('/post', data, options)
}

export {
  getExample,
  postExample,
}
