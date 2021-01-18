import React from 'react'
import ReactDOM from 'react-dom'

// 使用变量时使用一个{}，里面还能基本运算
// 使用render函数渲染，jsx语法更加严格如：<hr/>
const a = 10
const str = '你好，JSX'
const boo = false
const title = 'tag_p'
const child_jsx = <h2>这是嵌套的jsx</h2>
const jsx_arr = [
  <h2>这是jsx的数组</h2>,
  <h3>第一项</h3>,
  <h4>第二项</h4>,
  <h5>第二项</h5>
]
const str_arr = ['js','jQuery','Vue','uni-app','JSX','React']

// 方法一 使用forEach
const marge_arr1 = []
str_arr.forEach(item => {
  const temp = <li>{item}</li>
  marge_arr1.push(temp)
})
// 方法二 使用map
const marge_arr2 = <ul type='circle'>
{
  str_arr.map((item,index) => {
    return <li key={index}>{item}</li>
  })
}
</ul>

const jsx = 
<div>
  <h2>这是jsx的内容</h2><hr/>
  <p>{a + 5}, {str}</p>
  <p>{boo ? boo.toString(): '为假'}</p>
  <div title = {title}>这是带属性的p标签</div>
  {child_jsx}
  {/* {jsx_arr}   需要变量，使用key值标识唯一性 */}
  <h2>变量字符串数组：</h2>
  <h3>方法一:forEach没有返回值</h3>
  {/* <ul type='circle'>
    {marge_arr1}
  </ul> */}
  <h3>方法二:map有返回值</h3>
  {marge_arr2}

  <div className="mydiv">用className替换class</div>
  <label htmlFor="user">
    姓名：<input id="user" type="input" />
  </label>
</div>

// ReactDOM.render(<div>{a + 2}</div>, document.getElementById('app'))
ReactDOM.render(jsx, document.getElementById('app'))

/*
  使用时，复制粘贴到index.js
*/