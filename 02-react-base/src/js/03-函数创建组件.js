import React from 'react'
import ReactDOM from 'react-dom'

// 第一种创建组件方式，函数(类)
function Hello(props) {
  // return null    // 空组件
  // 必须返回一个合法的JSX虚拟DOM元素
  console.log(props)
  // 结论：不论是vue还是React，组件中的props永远都是只读的；不能被重新赋值
  /*
  const cjsx = 
  <div>
    Hello组件
    <div>
      <h3>姓名：{props.data.name}</h3>
      <h4>信息：{props.data.message}</h4>
      <p>年龄：{props.data.age}, 住址：{props.data.address}</p>
    </div>
  </div>
  */
 const cjsx = 
  <div>
    Hello组件
    <div>
      <h3>姓名：{props.name}</h3>
      <h4>信息：{props.message}</h4>
      <p>年龄：{props.age}, 住址：{props.address}</p>
    </div>
  </div>
  return cjsx
}

// 这是父组件的数据
const user = {
  id:1001,
  message: 'Hello，React的组件!',
  name: 'Xiao',
  age: 22,
  address: '中国'
}

const jsx = 
<div>
  {/* <Hello data={user}></Hello> */}
  <Hello {...user}></Hello>
</div>
ReactDOM.render(jsx, document.getElementById('app'))

// 方法一(优化)
// import Hello from '@/components/Hello'
/*
  使用时，复制粘贴到index.js
*/