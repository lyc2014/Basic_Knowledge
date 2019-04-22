function Observer (data) {
  this.walk(data)
}
Observer.prototype = {
  walk: function (data) {
    Object.keys(data).forEach(function(key){
      this.defineReacted(data, key, data[key])
    })
  },
  defineReacted: function (data, key, value) {
    observer(value)
    var dep = new Dep()
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get: function (){
        //To do add dep
        if (Dep.watcher) {
          dep.addDep(Dep.watcher)
        }
        return value
      },
      set: function (newValue) {
        if (value === newValue) {
          return
        }
        value = newValue
        //To do trigger update
        dep.notify()
      }
    })
  }
}
function observer () {
  if (!data || typeof data !== 'object') {
    return
  }
  return new Observer(value);
}
function Dep () {
  this.depArray = []
}
Dep.prototype = {
  addDep: function (dep){
    this.depArray.push(dep)
  },
  notify: function () {
    this.deArray.forEach(function(dep) {
      dep.updated()
    })
  }
}
Dep.watcher = null

function Watch (vm, exp, cb) {
  this.vm = vm
  this.exp = exp
  this.cb = cb
  this.value = this.get()
}
Watch.prototype = {
  get: function () {
    Dep.watcher = this
    var value = this.vm[this.exp]
    Dep.watcher = null
    return value
  },
  update: function () {
    var oldValue = this.value
    var newValue = this.vm[this.exp]
    if (oldValue !== newValue) {
      this.value = newValue
      this.cb()
    }
  }
}

let target = {
  a : 1,
  b : 2,
  c : 3,
  d: {d2: 3}
}

let proxy = new Proxy(target, {
  set(target, key, value, receiver){
    console.log('检测到了set的key为 -> ' + key);
    return Reflect.set(target, key, value, receiver);
  }
})

proxy.a = '1'; 
proxy.b = '2';
proxy.c = '3'; 
proxy.d.d2 = '4'