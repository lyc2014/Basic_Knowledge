function isObject(data) {
  if(!data || typeof data !== 'object'){
    return false
  }
  return true
}
function watch(data) {
  if(!isObject) {
    return data
  }
  Object.keys(data).forEach(function(key){
    data[key] = watch(data[key])
  })
  return defineReactive(data)
}
function defineReactive(obj) {
  return new Proxy(obj, {
    get: (target, prop, receiver) => {
      return Reflect.get(target, prop, receiver)
    },
    set: (target, prop, receiver) => {
      console.log('set==>', prop, value)
      return Reflect.set(target, prop, watch(value))
    }
  })
}