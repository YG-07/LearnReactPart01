# LearnReactPart01
学习React框架
  
# 一、资料来源
B站UP主“满脑的思绪呀”搬运自黑马程序员教程
(1-p)视频URL：https://www.bilibili.com/video/BV11t411S7iG?p=1
  
# 二、本节知识总结
(数字表示视频分p)
## 一、认识React框架 (1-8)
### 1.1 React简介 
* React 起源于**Facebook**的内部项目，因为该公司对市场上所有JavaScript MVC框架，都不满意，就决定自己写一套，用来架设Instagram（照片交友）的网站。做出来以后，发现这套东西很好用，就在**2013年5月开源**了。
* 由于React的**设计思想极其独特**，属于革命性创新，性能出众，代码逻辑却非常简单。所以，越来越多的人开始关注和使用，认为它可能是将来Web开发的主流工具。
* 清楚2个概念：
  * library(库)：小而巧的是库，库只提供了特定的API，可以很方便的从一个库切换到另外一个库，代码修改量不大
  * Framework(框架)：大而全的是框架，框架提供了一整套的解决方案，切换框架代码就会全部修改

### 1.2 前端三大主流框架
* **Angular**.js：出来较早(2009年，Google)的前端框架，学习曲线比较陡，NG1学起来比较麻烦，NG2~NG5开始，进行了一系列的改革，也提供了组件化开发的概念；从NG2开始，也支持使用TS（TypeScript）进行编程；
* **Vue**.js：**最火**(关注的人比较多)的一门前端框架，它是中国人开发的，对我我们来说，文档要友好一些；
* **React**.js：**最流行**(用的人比较多)的一门框架，因为它的设计很优秀；

### 1.3 React与Vue的对比
#### 1.3.1组件化方面
1. 模块化：从**代码**逻辑的角度进行划分的，把一些可复用的代码，抽离为单个的模块；便于项目的维护和开发
2. 组件化：从**UI界面**的角度进行划分的，前端的组件化，方便UI组件的重用，方便通过现有的组件构建新的页面
3. Vue实现组件化：Vue.component()、Vue.extend()和components属性，或**.vue文件(template结构、script行为、style样式)**
4. React实现组件化：有组件化的概念，但没有.vue这种文件.一切都是以**js**来表现的，js基本语法要求：**ES6和ES7(async 和 await)**
### 1.3.2 开发团队方面
* React是由**FaceBook前端官方团队**进行维护和更新的；因此，React的维护开发团队，技术实力比较雄厚；
* Vue：第一版，主要是有作者**尤雨溪**专门进行维护的，当ue更新到2.x版本后，也有了一个以尤雨溪为主导的开源小团队，进行相关的开发和维护；
### 1.3.3 社区方面
* 在社区方面，React由于诞生的较早，所以社区比较强大，一些常见的问题、坑、最优解决方案，文档、博客在社区中都是可以很方便就能找到的；
* Vue是近两年才火起来的，所以，它的社区相对于React来说，要小一些，可能有的一些坑，没人踩过；
### 1.3.4 移动APP开发体验方面
* Vue，结合Weex这门技术，提供了迁移到移动端App开发的体验（Weex，目前只是一个小的玩具，并没有很成功的大察例；）
* React，结合ReactNative，也提供了无缝迁移到移动App的开发体验（RN用的最多，也是最火最流行的）；
### 1.4 为什么要学习React
1. 和Angular1相比，React设计很优秀，一切基于5并且实现了**组件化开发**的思想；
2. 开发团队**实力强悍，不断维护**，不必担心断更的情况；I
3. **社区强大**，很多问题都能找到对应的**解决方案**；
4. 提供了**无缝转到ReactNative**上的开发体验，让我们技术能力得到了**拓展**；增强了我们的核心竞争力；
5. 很多企业中，前端项目的技术选型采用的是React.js；
### 1.5 React中几个核心的概念
1. 虚拟DOM（Virtual Document Object Model）
* DOM的本质是什么：**文本对象模型**，**浏览器**中的概念，**js对象来表示页面上的元素，并提供了操作DOM对象的API**；
* 什么是React中的虚拟DOM：是**框架**中的概念，用JS对象未模拟页面上的DOM和DOM嵌套；
* 为什么要实现虚拟DOM（虚拟DOM的目的）：**为了实现页面中，DOM元素的高效更新**
* DOM树：DOM中将HTML文档视为树结构，被称之为文档树模型，把文档映射成树形结构，通过节点对象对其处理，处理的结果可以加入到当前的页面。
* DOM和虚拟DOM的区别：
  * DOM：浏览器获取了页面的HTML代码，渲染的一个DOM树来表示页面上的元素，并提供了操作元素的API
  * 虚拟DOM：是框架中的概念，用JS对象的形式，来**模拟**页面的DOM元素和嵌套关系，通2个DOM树对比进行更新.
    * 本质：用JS对象的形式，来模拟页面的DOM元素和嵌套关系
    * 目的：为了实现页面中元素的高效更新
### 1.6 Diff算法
* 简书介绍diff算法的3种策略URL：https://www.jianshu.com/p/3ba0822018cf
* diff：different，diff算法的作用：计算出Virtual DOM中真正变化的部分，并只针对该部分进行原生DOM操作，而非重新渲染整个页面。
* React用 三大策略：**tree diff**、**component diff**、**element diff**(DOM层、组件之间、元素之间依次对比) 将O(n^3)复杂度 转化为 **O(n)复杂度**
## 二、创建项目并逐步配置webpack (9-12)
### 2.1 创建项目,逐步配置webpack4.x
1. 进入项目目录，使用指令：`npm init -y`，初始化**package**.json文件
2. 创建`src`、`dist`文件夹
3. 在src文件夹中创建`index.html`、`index.js`
4. 然后在项目里(--save-dev)安装webpack，指令：`cnpm i webpack@4.1.1 -D`.[npm指令简写](https://www.cnblogs.com/Chenzhifeng/p/11750422.html)
5. 安装webpack-cli(必须是3.x来配合webpack4.x)，指令：`cnpm i webpack-cli@3.1.2 -D`,配置指令映射`"dev":"webpack"`
6. 新建`webpack.config`.js向外暴露一个配置对象`module.exports`,输入`mode`属性(**development**开发时打包，**production**生产时打包)
* webpack4.x提供了**约定大于配置的概念**：为了尽量减少配置文件的体积:
  * 4.x添加了`mode`属性(必填)，可选值为：**development**和**production**
  * 默认打包入口(`entry`)文件是**src/index.js**
  * 默认打包输出(`output`)文件是**dist/main.js**
7. 安装webpack-dev-server实时打包，指令：`cnpm i webpack-dev-server@3.1.1 -D`，修改映射`"dev":"webpack-dev-server`
8. 引用根目录的内存的`main.js`，实现实时更新，关闭server按`Ctrl+C`
9. 增加和修改[DevServer配置项(博客URL)](https://www.cnblogs.com/tugenhua0707/p/9418526.html)，如：open(打开浏览器如chrome)、port(指定端口如3000)、hot(不刷新实时预览)、host(指定IP域名)
10. 打包index.html到内存，安装插件指令：`cnpm i html-webpack-plugin@3.0.6 -D`
11. 在webpack配置文件中导入插件并插件实例，再添加到plugin属性数组里.可删除index.html引入main.js的标签了,此插件会自动追加引入
## 三、初步使用React和JSX语法 (13-)
### 3.1 react和react-dom
1. 运行(--save)指令：`cnpm i react react-dom -S`安装react包
* react：专门用于**创建组件和虚拟DOM**的，同时**组件的生命周期**都在这个包中
* react-dom：专门进行**DOM操作**的，最主要的应用场景，就是`ReactooM.render()`
### 3.2 使用步骤
>方案一：(繁琐)
1. 导入2个包React和ReactDoM：
```javaScript
import React from 'react'
import ReactDoM from 'react-dom'
```
2. 创建React的虚拟DOM
```javaScript
const myh1 = React.createElement('h1', {id: 'myh1'}, '这是一个H1')
```
3. 在index.html页面中，创建容器：
```html
<div id="app"></div>
```
4. 通过ReactDOM把虚拟DOM渲染在页面上
```javaScript
ReactDOM.render(myh1, document.getElementById('app'))
```
>方案二(使用JSX语法)：
1. 启用**JSX语法**，安装babel插件,及识别react转换jsx语法的包如：babel-preset-react，运行：
  * 指令：`cnpm i babel-core babel-loader@7.1.5 babel-plugin-transform-runtime -D`
  * 指令：`cnpm i babel-preset-env babel-preset-stage-0 babel-preset-react -D`
  * 注意版本，(2021/01/17 该项目)版本一览：
```JSON
"babel-core": "^6.26.3",
"babel-loader": "^7.1.5",
"babel-plugin-transform-runtime": "^6.23.0",
"babel-preset-env": "^1.7.0",
"babel-preset-react": "^6.24.1",
"babel-preset-stage-0": "^6.24.1",
```
2. 配置webpack的**module**属性，其中的**rules**第三方匹配规则**数组**
```javaScript
{
  test: /\.js|jsx$/,
  use: 'babel-loader',
  exclude: /node_modules/
}
```
3. 在项目根目录创建`.babelrc`配置文件
```JSON
{
  "presets": ["env","stage-0","react"],
  "plugins": ["transform-runtime"]
}
```
4. 在index.js中使用jsx语法
```jsx
const mydiv2 = 
<div id='mydiv' title='div aaa'>
  这是第2个div
  <h1 id="myh1">这是一个div</h1>
</div>

ReactDOM.render(mydiv2, document.getElementById('app'))
```
### 3.3 认识JSX语法
1. jsx语法的本质：并不是直接把jsx渲染到页面上，而是内部先转换成了createElement 形式，再渲染的；
2. 在jsx中混合写入js表达式：在jsx语法中，要把JS代码写到`{ }`中,常见操作有：
* 渲染**数字**、**字符串**、**布尔值**、**绑定属性值**、渲染**jsx元素**、**jsx元素数组**
* 将普通**字符串数组**转为**jsx数组**并渲染到页面上【两种方案】
  * 方法一(不推荐)：使用forEach，没有返回值，只能创建一个新数组
  * 方法二：使用**map()**，遍历时有返回值，就是返回对每一项操作后的结果.map有2个参数**item和index(可选)(元素和索引)**，index可以标识key值
```jsx
<ul type='circle'>
{
  str_arr.map((item,index) => {
    return <li key={index}>{item}</li>
  })
}
</ul>
```
3. 在jsx中写注释`{/* 注释 */}`

