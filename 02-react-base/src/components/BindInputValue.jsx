import React from 'react'

export default class BindInputValue extends React.Component {
  constructor() {
    super()
    this.state = {
      msg: '哈哈哈，绑定input的值'
    }
  }
  render() {
    return <div>
      <p>这是BindInputValue组件</p>
      <button onClick={this.chgMsg}>修改msg</button>
      {/* 没有onChange()就是只读的，或者提供readOnly，无法修改文本框了 */}
      {/* <input type="text" value={this.state.msg} readOnly /> */}
      <input type="text" value={this.state.msg} onChange={(e) => this.inputChg(e)} ref='txt' />
      <p>{this.state.msg}</p>
    </div>
  }

  chgMsg = () => {
    // this.setState({msg: '改变后的msg值'}, () => console.log(this.state.msg))
    this.setState({msg: '改变后的msg值'})
  }
  inputChg = (e) => {
    // 方法一
    console.log(e.target.value)
    // 方法二
    // console.log(this.refs.txt.value)
    const chgValue = e.target.value
    this.setState({msg: chgValue})
  }
}