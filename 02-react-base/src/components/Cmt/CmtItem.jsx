import React from 'react'

import c2 from './scss/CmtItem.scss'
console.log("CmtItem.jsx打印",c2)

export default function Hello(props) {
  return <div className={c2.item}>
    <h2 className={c2.user}>评论人：{props.user}</h2>
    <p className={c2.review}>评论内容：{props.content}</p>
  </div>
}