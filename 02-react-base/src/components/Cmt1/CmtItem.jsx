import React from 'react'

// 第一次封装 多个对象
// const item = {border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc'}
// const user = { fontSize: '20px'}
// const review = { fontSize: '16px'}

// 第二次封装 一个大的对象
// const styles = {
//   item: {border: '1px dashed #ccc', margin: '10px', padding: '10px', boxShadow: '0 0 10px #ccc'}, 
//   user: { fontSize: '20px'}, 
//   review: { fontSize: '16px'}
// }

// 第三次封装 封装成js，方法一
import styles from './itemStyles'

export default function Hello(props) {
  return <div style={styles.item}>
    <h2 style={styles.user}>评论人：{props.user}</h2>
    <p style={styles.review}>评论内容：{props.content}</p>
  </div>
}