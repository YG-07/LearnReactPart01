import React from 'react'

export default class BindEvent extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return <div>
      <p>这是BindEvent组件</p>

      {/* 在React中绑定事件的属性名是驼峰命名 */}
      {/* <button onClick={() => console.log('点击了按钮')}>按钮</button> */}
      {/* <button onClick={this.myClick}>按钮</button> */}
      
      <button onClick={() => this.mySum(5, 4)}>按钮</button>


    </div>
  }
  // 定义组件内实例方法，使用this关键字调用
  // myClick() {
  //   console.log('点击了按钮')
  // }

  // mySum(num1, num2) {
  //   console.log('点击了按钮，结果是：', num1 + num2)
  //   return num1 + num2
  // }
  mySum = (num1, num2) => {
    console.log('点击了按钮，结果是：', num1 + num2)
    return num1 + num2
  }
}