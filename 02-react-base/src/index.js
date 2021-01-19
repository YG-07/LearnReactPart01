import React from 'react'
import ReactDOM from 'react-dom'

// 导入有状态父组件
// import CmtList from '@/components/Cmt1/CmtList'
import CmtList from '@/components/Cmt/CmtList'

const jsx = 
<div>
  <CmtList></CmtList>
</div>

ReactDOM.render(jsx, document.getElementById('app'))