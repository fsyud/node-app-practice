// 注意：Sub 仅仅继承了Base 在原型中定义的函数，
// 而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。
// 同时，在原型中定义的属性不会被 console.log 作 为对象的属性输出。
// 如果我们去掉 objSub.sayHello(); 这行的注释，将会看到：TypeError: objSub.sayHello is not a function

var util = require('util'); 
function Base() { 
  this.name = 'base'
  this.base = 1991; 
  this.sayHello = function() {
    console.log('Hello ' + this.name)
  }
}

Base.prototype.showName = function() {
    console.log(this.name)
}

function Sub() { 
    this.name = 'sub'
} 
util.inherits(Sub, Base)

var objBase = new Base()

objBase.showName()

objBase.sayHello()

console.log(objBase)

var objSub = new Sub()

objSub.showName()

// objSub.sayHello()
console.log(objSub)