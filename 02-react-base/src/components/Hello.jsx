import React from 'react'

// 方法二，封装jsx组件文件，用ES6导出导入使用
export default function Hello(props) {
  console.log(props)
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

