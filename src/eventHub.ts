class EventHub {
  // 监听/注册事件
  cache = {}
  on(eventName, fn) {
    this.cache[eventName] = this.cache[eventName] || []
    this.cache[eventName].push(fn) // 监听注册过的事件
  }

  // 触发事件
  emit(eventName, data?) {
    (this.cache[eventName] || []).forEach(fn => fn(data)) // 执行注册过的事件
  }
}

export default EventHub