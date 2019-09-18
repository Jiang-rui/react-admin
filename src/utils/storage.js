// 封装localstorage存储的方法

export default class Storage {
  /**
   * 设置缓存
   * @param {string} key 
   * @param {any} value 
   */
  static setItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }
  /**
   * 读取缓存
   * @param {string} key 
   */
  static getItem(key) {
    return JSON.parse(localStorage.getItem(key)) || ''
  }
  /**
   * 移除缓存
   * @param {string} key 
   */
  static removeItem(key) {
    localStorage.removeItem(key)
  }
  /**
   * 移除所有缓存
   */
  static removeAll() {
    localStorage.clear();
  }
  /**
   * 获取所有key值
   */
  static keys() {
    return Object.keys(localStorage)
  }
}