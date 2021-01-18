import React from 'react'

export default class Movie extends React.Component {
  constructor() {
    super()
    // 这个this.state={}就相当于Vue中的data（）{return{}}
    this.state = {
      num: 10,
      msg: '这是Movie组件的state数据,使用{this.state.msg}'
    }
  }
  render() {
    // class的组件中，外界传递的数据不用接收，直接使用this.props.XXX访问
    console.log(this.props.film)
    const f = this.props.film

    this.state.num = 15
    const cjsx = 
    <div>
      <p>这是Movie组件</p>
      <p>{this.state.msg}</p>
      <p>修改后的state数据：{this.state.num}</p>
      <ul type='circle'>
        <li>标题：《{f.title}》</li>
        <li>导演：{f.director}</li>
        <li>发行时间：{f.year} 年</li>
        <li>片长：{f.length} 分钟</li>
        <li>评分：{f.score} 分</li>
      </ul>
    </div>
    return cjsx
  }
}