# 001-UIKit-CQDemo-React
UIKit、React



## 一、项目创建

终端执行命令顺序如下：

```
1、创建工程
create-react-app tsdemo_demo

2、进入工程
cd tsdemo_demo

3、启动工程
yarn start
```





## 二、添加路由

```
yarn add react-router-dom
```



```
// 最直接
onClick={()=>{this.props.history.push('./page1');}}

// 使用Util
onClick={()=>{DemoRouterUtil.push(this.props.history, './page1')}}>

// 使用History

```





## 三、测试CQDemoKit库

```
create-react-app tsdemokitdemo


```

