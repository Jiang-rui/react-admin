/**
 * 通用的ajax请求方法
 */
import axios from 'axios'

// ajax的post请求方法
export default function ajax(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios({ url, data }).then(res => {
      if (res.status === 200) {
        resolve(res.data)
      } else {
        reject(res.err)
      }
    }).catch(err => reject(err))
  })
}



// 学徒、流星、彗星、行星、恒星