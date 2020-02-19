class EventHub {
  // 监听/注册事件
  cache = {}
  on(eventName, fn) {
    let array = this.cache[eventName]
    !array && (array = [])
    array.push(fn) // 监听注册过的事件
  }

  // 触发事件
  emit(eventName) {
    let array = this.cache[eventName]
    !array && (array = [])
    array.forEach(fn => fn()) // 执行注册过的事件
  }
}

export default EventHub