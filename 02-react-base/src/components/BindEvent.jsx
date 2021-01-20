import React from 'react'

export default class BindEvent extends React.Component {
  constructor() {
    super()
    this.state = {
      num: 0
    }
  }
  render() {
    return <div>
      <p>这是BindEvent组件</p>

      {/* 在React中绑定事件的属性名是驼峰命名 */}
      {/* <button onClick={() => console.log('点击了按钮')}>按钮</button> */}
      {/* <button onClick={this.myClick}>按钮</button> */}
      
      <button onClick={() => this.mySum(5, 4)}>计算</button>
      <p>5+4结果是：{this.state.num}</p>

    </div>
  }
  //#region  定义组件内实例方法，使用this关键字调用
  // myClick() {
  //   console.log('点击了按钮')
  // }
  //#endregion
  
  mySum = (num1, num2) => {
    console.log('点击了按钮，结果是：', num1 + num2)
    // 响应式setState，直接赋值不是响应式的
    this.setState({num: num1+num2}, () => console.log(this.state.num))
    console.log(this.state.num)
  }
}