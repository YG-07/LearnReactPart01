import React from 'react'
import ReactDOM from 'react-dom'

// 导入有状态父组件
import CmtList from '@/components/CmtList'

const jsx = 
<div>
  <CmtList></CmtList>
</div>

ReactDOM.render(jsx, document.getElementById('app'))