// 封装localstorage存储的方法

export default class Storage {
  static setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }
  static getItem(key) {
    return JSON.parse(localStorage.getItem(key)) || ''
  }
}