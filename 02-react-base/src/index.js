import React from 'react'
import ReactDOM from 'react-dom'

import BindEvent from '@/components/BindEvent'
import BindInputValue from '@/components/BindInputValue'



const jsx = 
<div>
  <BindEvent></BindEvent>
  <BindInputValue></BindInputValue>
</div>

ReactDOM.render(jsx, document.getElementById('app'))