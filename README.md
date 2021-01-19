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
## 三、初步使用React和JSX语法 (13-19)
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
  * 配置webpack的js文件
```javaScript
{ test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/}
```
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
  * 方法二：使用**map()**，遍历时有返回值，就是返回对每一项操作后的结果.map有2个参数**item和index(可选)(元素和索引)**，index可以**标识key值唯一性**
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
4. [关于JavaScript语句后应不应该加分号(知乎URL)](https://www.zhihu.com/question/20298345)
  * 只要在` [ 、 ( 、 + 、 - `5种符号之前加分号就可以了
5. 为jsx中的元素添加class类名：需要使用**classlame** 来替代class；**htmlFor** 替换label的for 属性
* 在JSX创建DOM的时候，所有的节点，必须看**唯一的根元素进行包裹**；
* 在jsx语法中，标签必须**成对出现**，如果是**单标签**，则必须**自闭和**！
## 四、React中创建组件 (20-24)
### 4.1 创建组件的方式一
>方法一：使用function函数定义
1. 创建组件，`组件名称的首字母必须大写`
```javaScript
function Hello() {
  // return null    // 空组件
  // 必须返回一个合法的JSX虚拟DOM元素
  return <div>Hello组件</div>
}
```
2. 传递数据，父传子.通过组件的属性值传递数据，使用形参`props`接收.
* 结论：不论是vue还是React，子组件中的props永远都是**只读的**；不能在子组件中重新赋值
```javaScript
function Hello(props) {
  const cjsx = 
  <div>
    <h3>姓名：{props.data.name}</h3>
    <h4>信息：{props.data.message}</h4>
  </div>
  return cjsx
}

// 这是父组件的数据
const user = {
  message: 'Hello，React的组件!',
  name: 'Xiao',
}
<div>
  <Hello data={user}></Hello>
</div>
```
3. (优化2.)使用ES6的展开运算符传递props
```javaScript
// 子组件
const cjsx = 
<div>
  <h3>姓名：{props.name}</h3>
  <h4>信息：{props.message}</h4>
</div>
return cjsx
// 这是父组件的数据
<Hello {...user}></Hello>
```
>方法一(优化)：封装组件的.jsx文件
1. 新建components/Hello.jsx文件，导入**React**(必须命名为React)包，定义并**导出**组件
```jsx
import React from 'react'

// 方法一(优化)，封装jsx组件文件，用ES6导出导入使用
export default function Hello(props) {
  console.log(props)
 const cjsx = 
  <div>
    Hello组件
    <div>
      <h3>姓名：{props.name}</h3>
      <h4>信息：{props.message}</h4>
      <p>年龄：{props.age}, 住址：{props.address}</p>
    </div>
  </div>
  return cjsx
}
```
2. index.js导入并使用即可
```javaScript
import Hello from './components/Hello.jsx'
```
3. 导入时**省略后缀名**，在webpack配置文件中设置**resolve**节点的**extensions**数组,**修改配置,重新运行**
```javaScript
resolve:{
  extensions: ['.js', '.jsx']
}
```
4. 设置**路径别名**，设置**resolve**节点的**alias**属性
```javaScript
alias:{
  '@': path.join(__dirname, './src')
}
```
## 五、认识class类 (25-32)
### 5.1 类的基本使用
1. 对比2种定义类的方式
```javaScript
// 1.传统定义类的方法
function Person(name, age) {
  this.name = name
  this.age = age
}
const p1 = new Person('Peter', 21)
console.log(p1)
console.log(p1.name, p1.age)

// 2.使用class定义类，构造器，默认有一个
class Animal {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}
const a1 = new Animal('cat', 3)
console.log(a1)
console.log(a1.name, a1.age)
// 都是通过new的属性，是实例属性
```
2. 使用static静态属性
* 静态属性：通过构造函数，直接访问的属性.
```javaScript
// 通过类名新建的属性
Person.info = 'human'
console.log(Person.info)
// 在class里，在构造函数同级定义一个static变量
static info = 'not human'
console.log(Animal.info)
```
3. 定义实例方法和静态方法
```javaScript
Person.prototype.say = function () {
  console.log('这是Person的实例方法')
}
p1.say()
Person.show = function () {
  console.log('这是Person的静态方法')
}
Person.show()
// 类里定义
say1() {
  console.log('这是Animal的实例方法')
}
static show() {
  console.log('这是Animal的静态方法')
}
// 使用
a1.say1()
Animal.show()
```
4. 总结：在class的构造器只能定义**实例、静态属性和实例、静态方法**，class的实现方法跟传统的方法一样，这是定义类的语法糖
### 5.2 类的继承
* 使用extends实现继承，语法：class 子类 extends 父类 {}
1. 继承父类的构造函数，实例方法
```javaScript
constructor (name, age) {
  this.name = name
  this.age = age
}
sayHello() {
  console.log(this.name,':你好！')
}
```
2. 子类再定义构造函数时，应先执行一次**super()**
* super()是一个函数，是父类的构造器的引用，因此，形参也要**对应个数**,如果子类有**新的属性**，则对应赋值即可
```javaScript
// 子类的构造函数
constructor (name, age, id) {
  super(name, age)
  this.id = id
}
```
## 六、React使用class关键字创建组件 (33-36)
### 6.1 class组件的基本结构
* 一个class组件的基本结构，必须继承自**React.Component**,必须有一个**render函数**
* render函数是为了返回渲染当前组件对应的虚拟DOM
```jsx
class cpn extends React.Component {
  // 必须有一个render函数，返回一个jsx虚拟DOM结构
  render () {
    return <div>这是1个class组件</div>
  }
}
```
### 6.2 封装一个class组件
1. 新建./components/Movie.jsx，导入React，定义class组件
* class的组件中，外界传递的数据不用接收，直接使用this.props.XXX访问,可以定义私有数据
```javaScript
export default class Movie extends React.Component {
  render() {
    const f = this.props.film
    const cjsx = <div>这是Movie组件....</div>
    return cjsx
  }
}
```
2. 两种创建组件方式的对比
>使用function创建的组件，只有props，没有自己的**私有数据**和生命周期函数；  
>使用class 关键字创建的组件，有自己的私有数据和生命周期函数
* 私有数据可以定义在构造函数中
  * `this.state = {...}`,**可读可写**. 
  * `this.props`,外部传递的数据，**只读**
* 使用情景：
>有状态组件和无状态组件之间的本质区别就是：有无state属性和生命周期函数
  1. 用**构造函数**创建出来的组件：叫做“**无状态组件**”
  2. 用**class关键字**创建出来的组件：叫做“**有状态组件**”
  3. 如果`组件有自己的私有数据`推荐使用有状态组件，否则可以使用无状态组件.**无状态组件运行效率高一些**!
## 七、案例：评论列表 (37-47)
### 7.1 实现组件的功能和样式
1. 在index.js中先定一个**class父组件CmtList**，有**state数据CommentList**，然后它的render函数返回的是通过map遍历显示的**评论**
2. 抽离一个评论的**function子组件CmtItem**，父组件通过**展开属性**传递数据，子组件再通过**props形参**接收
3. 抽离2个组件，封装成**jsx文件**并导出，在index.js中导入使用
4. 使用行内样式style属性，2层大括号分别是`jsx语法`和`对象`，属性名的`-`变成**驼峰命名**，对象的值是**字符串或数字**形如：
```jsx
style={{color: 'red', fontSize: '35px', fontWeight: 200}}
```
5. 对行内样式封装过程：1.抽离成多个对象、2.抽离成一个大对象、3.将大对象封装成一个js文件
### 7.2 使用css样式美化组件
1. 下载样式的loader，指令：`cnpm i style-loader css-loader -D`，配置webpack的js文件
```javaScript
{test: /\.css$/, use: ['style-loader', 'css-loader']}
```
2. 导入列表组件需要的css样式表，
>问题：这个样式表，是只在List组件中生效嘛？
* 经过实验，发现，直接导入css样式表，默认是在全局上，整个项目都生效的！
>思考：Vue组件中的样式表，有没有冲突的问题？？？
* 答案: Vue组件中的样式表，也有冲突的问题，但是，可以使用`<style scoped></style>`
>疑问：React中，有没有类似于scoped这样的指呢？
* 答案：没有；因为在React中，根本就没有指令的概念；
>问题：React怎么使用组件内的样式？
解决办法：在webpack配置文件的样式适配规则加上**modules参数**:`use: ['style-loader', 'css-loader?modules']`
css模块化，只针对**类选择器**和**Id选择器**生效*/
CSS模块化不会将标签选择器模块化*/
3. 使用`localIdentName`自定义生成的类名格式，可选的参数有：
* `[path]`表示样式表相对于**项目根目录所在路径**
* `[name]`表示**样式表文件名称**
* `[local]`表示样式的**类名定义名称**
* `[hash:length]`表示32位的hash值，例子：
```javaScript
// 低版本css-loader参数
{
  ttest:/\.css$/,
  use:['style-loader','css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]']
}
// 高版本可能如下使用：(本项目："css-loader": "^5.0.1")
use: [
  {
    loader: 'style-loader'
  },
  {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: '[path][name]-[local]-[hash:5]'
      }
    }
  }
]
```
4. 使用`:local()`和`:global()`
* `:local()`包裹的类名，是被模块化的类名，只能通过`className={cssObj.类名}`来使用同时，
`:local`**默认可以不写**，这样，默认在样式表中定义的类名，都是被模块化的类名；
* `:global()`包裹的类名，是全局生效的，不会被`css-modules`控制，定义的类名是什么，就是使用定义的类名`className="类名"`
5. 注意：只有.title这样的**类样式(和ID)**选择器，才会被模块化控制，类似于body 这样的**标签**选择器，不会被模块化控制；
### 7.3 在项目中使用其他模块
1. 安装和使用bootstrap
* 安装bootstrap@3.3.7，指令:`cnpm i bootstrap@3.3.7 -S`
* 安装处理文件路径的2个loader，指令：`cnpm i url-loader -D`和`cnpm i file-loader -D`
* 为bootstrap的一些文件格式，配置webpack文件
```javaScript
{
  test:/\.ttf|woff|woff2|eot|svg$/,
  use: 'url-loader'
}
```
>如何将第三方css文件不模块化导出？
* 我们可以规定：第三方样式表都是以`.css`结尾的，我们只要将自己的样式格式改用相似的格式，如`.scss`和`.less`等即可.将我们的样式启用模块化，而对`.css`文件不启用模块化.
2. 使用.scss和.less样式文件
* 安装`.scss`文件的loader，指令：`cnpm i sass-loader node-sass -D`
* 安装和配置`.less`文件，指令：`npm i less less-loader -D`
* webpack配置代码：
```javaScript
{
  test: /\.scss$/,
  use: [
  'style-loader', 
  {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: '[name]-[local]-[hash:4]'
      }
    }
  }, 
  'sass-loader']
}
// .less规则同理，将'less-loader'放在最后，对css-loader配置模块化参数
```
## 八、React绑定事件 (48-)