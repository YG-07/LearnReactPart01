import React from 'react'
import ReactDOM from 'react-dom'

// 导入有状态父组件
// import CmtList from '@/components/Cmt1/CmtList'
import CmtList from '@/components/Cmt/CmtList'
import c2 from '@/css/other.css'
console.log(c2)

const jsx = 
<div>
  {/* <div className={c2.hello}>这是局部属性</div>
  <div className="hi">这是全局属性</div> */}

  <div className={c2.hello+' size'}>这是拼接1局部属性</div>
  <div className={[c2.hello, 'size'].join(' ')}>这是拼接2局部属性</div>
  <div className="hi size">这是拼接的全局属性</div>
  <CmtList></CmtList>
</div>

ReactDOM.render(jsx, document.getElementById('app'))