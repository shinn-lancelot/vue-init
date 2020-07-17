import http from '../src/common/js/http'

test('httpGet', () => {
  expect(http.get('https://baidu.com')).not.toBeNull()
})

test('httpPost', () => {
  expect(http.post('', {})).not.toBeNull()
})