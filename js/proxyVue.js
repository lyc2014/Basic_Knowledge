function watch (obj) {
    if (!isObject(obj)) {
       return obj
    }
  
    // 遍历所有的属性，进行Proxy处理
    Object.keys(obj).forEach(key => {
      obj[key] = watch(obj[key])
    })
   
    return defineReactive(obj)
  }
  
  function defineReactive(obj) {
    return new Proxy(obj, {
      get: (target, prop, receiver) => {
        console.log('get')
        return Reflect.get(target, prop, receiver)
      },
      set: (target, prop, value) => {    
        // TODO触发监听
        console.log('set==>', prop, value)
        return Reflect.set(target, prop, watch(value))
      }
    })
  }
  
  function isObject(obj) {
    return Object(obj) === obj
  }
  