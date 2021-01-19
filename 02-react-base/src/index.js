import React from 'react'
import ReactDOM from 'react-dom'

// 导入有状态父组件
// import CmtList from '@/components/Cmt1/CmtList'
import CmtList from '@/components/Cmt/CmtList'
// 导入样式的测试内容组件
import Test from '@/components/Test'

const jsx = 
<div>
  <Test></Test>
  <CmtList></CmtList>
</div>

ReactDOM.render(jsx, document.getElementById('app'))