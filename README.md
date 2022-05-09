此组件 是从element-plus上分离处理来的scrollbar
用法
1，将此文件放入自己的component文件夹，参数什么的完全跟element-plus的滚动条一样 可自行移步去看文档
https://element-plus.org/zh-CN/component/scrollbar.html#scrollbar-%E5%B1%9E%E6%80%A7
2，全局引用
在 main.js中
import './components/scrollbar/css/scrollbar.css';
import AScrollbar from './components/scrollbar';
app.use(AScrollbar)即可

<a-scrollbar>
    <div>内容</div>
</a-scrollbar>