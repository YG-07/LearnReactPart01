// 1.导入React和ReactDOM 
import React from 'react'
import ReactDOM from 'react-dom'

// 方案一：
// 2.创建React实例，3个参数：元素类型、一个对象或null表示属性节点、子节点（其他虚拟DOM，如文本节点）、其他参数:子节点
// 如：<h1 id="myh1">这是一个H1</h1>

// const myh1 = React.createElement('h1', null, '这是一个H1')
const myh1 = React.createElement('h1', {id: 'myh1'}, '这是一个H1')

const mydiv1 = React.createElement('div',null,'这是一个div',myh1)

// 3.通过ReactDOM把虚拟DOM渲染在页面上,2参数：要渲染的虚拟DOM变量，页面上的DOM元素
// ReactDOM.render(myh1, document.getElementById('app'))
ReactDOM.render(mydiv1, document.getElementById('app'))

//方案二：
// 用HTML，这种混合语法叫JSX语法符合XML规范，可以使用babel来转换这些js标签，本质就是转换成方案一
const mydiv2 = 
<div id='mydiv' title='div aaa'>
  这是第2个div
  <h1 id="myh1">这是一个div</h1>
</div>

ReactDOM.render(mydiv2, document.getElementById('app'))


console.log('ok55555');
// webpack-dev-server打包的main.js是托管到内存的，在根目录硬盘中看不见

/*
  使用时，复制粘贴到index.js
*/