import React from 'react'
// 导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'
// 导入自己的scss样式，用对象接收
import c2 from '@/scss/other.scss'
console.log("Test.jsx打印", c2)

export default function Test() {
 const cjsx = 
  <div>
    {/* <div className={c2.hello}>这是局部属性</div>
    <div className="hi">这是全局属性</div> */}
    <div className={c2.hello+' size'}>这是拼接1局部属性</div>
    <div className={[c2.hello, 'size'].join(' ')}>这是拼接2局部属性</div>
    <div className="hi size">这是拼接的全局属性</div>
    {/* <button className={[bootcss.btn, bootcss['btn-primary']].join(' ')}>按钮</button> */}
    <button className="btn btn-primary">按钮</button>
    <div className="panel panel-primary"></div>
  </div>
  return cjsx
}

