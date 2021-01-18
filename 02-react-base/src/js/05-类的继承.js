
// 父类：人
// 父类可以理解成原型对象prototype
class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }
  sayHello() {
    console.log(this.name,':你好！')
  }
}

// 子类：学生和老师
// 使用extends实现继承，语法：class 子类 extends 父类 {}
class Student extends Person {
  // 如果子类继承了父类，再定义构造函数，应先执行一下super()
  constructor (name, age, id) {
    super(name, age)
    this.id = id
  }
}
class Teacher extends Person {
  constructor (name, age) {
    super(name, age)
  }
}


const s1 = new Student('张三', 21, 1003)
const t1 = new Teacher('李老师', 43)
console.log(s1,t1)
s1.sayHello()
t1.sayHello()
