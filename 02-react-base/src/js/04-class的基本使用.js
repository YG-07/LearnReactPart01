
// 1.传统定义类的方法
function Person(name, age) {
  this.name = name
  this.age = age
}
const p1 = new Person('Peter', 21)
console.log(p1.name, p1.age)
Person.info = 'human'
console.log(Person.info)
Person.prototype.say = function () {
  console.log('这是Person的实例方法')
}
p1.say()
Person.show = function () {
  console.log('这是Person的静态方法')
}
Person.show()
console.log(p1)

// 2.使用class定义类，构造器，默认有一个
class Animal {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  static info = 'not human'
  say1() {
    console.log('这是Animal的实例方法')
  }
  static show() {
    console.log('这是Animal的静态方法')
  }
}
const a1 = new Animal('cat', 3)
console.log(a1)
console.log(a1.name, a1.age)
console.log(Animal.info)
a1.say1()
Animal.show()

/* 
总结：1.直接通过new的属性，是实例属性
  2. 通过类名新建的或static创建的，是静态属性
  3. 通过prototype原型添加或直接定义的方法，是实例方法
  4. 和静态属性同理，静态方法在构造器里
*/