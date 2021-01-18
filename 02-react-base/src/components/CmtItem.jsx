import React from 'react'

export default function Hello(props) {
  return <div>
    <h2>评论人：{props.user}</h2>
    <p>评论内容：{props.content}</p>
  </div>
}