class EventHub {
  // 监听/注册事件
  private cache: {
    [key: string]: Array<(data?: unknown) => void>
  } = {}
  private indexOf( // unknown 和 any 差不多，只不过 unknow 声明的变量不能改
    array: Array<(data?: unknown) => void>, 
    item: (data?: unknown) => void
  ): number {
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
  on(eventName: string, fn: (data?: unknown) => void): void {
    this.cache[eventName] = this.cache[eventName] || []
    this.cache[eventName].push(fn) // 监听注册过的事件
  }

  // 触发事件
  emit(eventName: string, data?: unknown): void {
    (this.cache[eventName] || []).forEach((fn : (data?: unknown) => void) => fn(data)) // 执行注册过的事件
  }

  // 取消监听/注册事件
  off(eventName: string, fn: (data?: unknown) => void) {
    const index = this.indexOf(this.cache[eventName], fn)
    if (index === -1) return
    this.cache[eventName].splice(index, 1)
  }
}

export default EventHub