class EventHub {
  // 监听/注册事件
  cache = {}
  private indexOf(array, item) {
    if (!array) return -1
    let index = -1
    for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
        index = i
        break
      }
    }
    return index
  }
  on(eventName, fn) {
    this.cache[eventName] = this.cache[eventName] || []
    this.cache[eventName].push(fn) // 监听注册过的事件
  }

  // 触发事件
  emit(eventName, data?) {
    (this.cache[eventName] || []).forEach(fn => fn(data)) // 执行注册过的事件
  }

  // 取消监听/注册事件
  off(eventName, fn) {
    const index = this.indexOf(this.cache[eventName], fn)
    if (index === -1) return
    this.cache[eventName].splice(index, 1)
  }
}

export default EventHub