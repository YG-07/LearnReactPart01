import React from 'react'
import ReactDOM from 'react-dom'

// import '@/js/04-class的基本使用'
// import '@/js/05-类的继承'
import Movie from '@/components/Movie'

const data = {
  title: "千与千寻",
  director: "宫崎骏",
  year: 2001,
  score: 9.4,
  length: 125
}

const jsx = 
<div>
  <Movie film={data}></Movie>
</div>
ReactDOM.render(jsx, document.getElementById('app'))