import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// import DemoRouterUtil from "./DemoRouterUtil";
// import { createBrowserHistory } from 'history';
// const history =  createBrowserHistory({
//     basename: '/demo',
// });

import history from "./DemoAppHistory";
import AppNavigationBar from "../react-router/DemoAppNavigationBar";

class Home extends Component {
    render() {
        return (
            <div style={{backgroundColor: '#F5F5F5'}}>
                <AppNavigationBar navigationTitle={"首页"}/>
                <div style={{marginTop: '64px', backgroundColor:'white'}}>
                    1、测试 class 形式的页面的跳转(Home)
                    <div style={{marginTop: '20px'}}>
                        <Link to="/Page1">
                            ①、跳到 Page1 的方式1(Link)
                        </Link>
                    </div>
                    <div style={{marginTop: '20px'}}
                         onClick={()=>{this.props.history.push('./page1');}}
                         // onClick={()=>{DemoRouterUtil.push(this.props.history, './page1')}}
                    >
                        ②、跳到 Page1 的方式2(history)
                    </div>
                </div>



                <div style={{marginTop: '100px', backgroundColor:'white'}}>
                    <Link to="/Page2">
                        2、进入测试 function 形式的页面的跳转(Page2)
                    </Link>
                </div>

                <div style={{marginTop: '100px', backgroundColor:'white'}}>
                    <a className="App-link"
                       href="https://reactjs.org"
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </div>

            </div>
        );
    }
}

function Page1() {
    return (
        <div style={{backgroundColor: 'red'}}>
            <AppNavigationBar navigationTitle={"Page1"}/>
            <div>我是 Page1 页面</div>
            <div><Link to="/home">返回 Home</Link></div>
            <div><Link to="/page2">进入下一页 Page2</Link></div>
        </div>
    )
}

function Page2() {
    return (
        <div style={{backgroundColor: 'green'}}>
            <AppNavigationBar navigationTitle={"Page2"}/>
            <div>我是 Page2</div>
            <div><Link to="/home">返回 Home</Link></div>
            <div><Link to="/page1">返回上一页 Page1</Link></div>
            <div
                onClick={()=>{
                    this.props.history.back();
                }}
            >
                返回上一页 Page1
            </div>
        </div>
    )
}



export default function APP() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/page1" component={Page1} />
                <Route path="/page2" component={Page2} />
            </Switch>
        </Router>
    )
}