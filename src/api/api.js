import http from 'common/js/http'

// get接口请求示例
const getExample = (data) => {
  return http.get('/get', data)
}

// post接口请求示例
const postExample = (data) => {
  return http.post('/post', data)
}

export {
  getExample,
  postExample,
}
