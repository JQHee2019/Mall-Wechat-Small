import { HTTP, API } from '../index.js'
const _HTTP = new HTTP()

class HomeModel {
  // 商铺列表
  dataList(page, rows) {
    return _HTTP.request({
      method: 'POST',
      url: API.host + API.home,
      data: {
        'version': 'v1',
        'cityid': '101120201',
        rows
      }
    })
  }
}
export default HomeModel