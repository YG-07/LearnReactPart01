import React from 'react'
import ReactDOM from 'react-dom'

import Hello from '@/components/Hello'

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
  <Hello {...user}></Hello>
</div>
ReactDOM.render(jsx, document.getElementById('app'))