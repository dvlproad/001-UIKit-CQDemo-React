import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import Page1 from "./DemoNormalPage";
import DemoTableHomePage from './DemoTableHomePage';
import DemoCollectionHomePage from './DemoCollectionHomePage';

const history =  createBrowserHistory({
    basename: 'demo',
});


// Demo 的主页
class Main extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#F5F5F5"}}>
                <div
                    style={{height: 60, marginTop:'40px', backgroundColor:"white"}}
                    onClick={()=>{this.props.history.push('page1')}}
                >page1</div>

                <div
                    style={{height: 60, marginTop:'40px', backgroundColor:"white"}}
                    onClick={()=>{this.props.history.push('demo_table')}}
                >Table 型首页</div>

                <div style={{height: 60, marginTop:'40px', backgroundColor:"white"}}
                     onClick={()=>{this.props.history.push('demo_collection')}}
                >Collection 型首页</div>
            </div>
        );
    }
}




export const DemoPages = [
    <Route path="/main" component={Main} key="/main" />,
    <Route path="/page1" component={Page1} key="/page1" />,
    <Route path="/demo_table" component={DemoTableHomePage} key="/demo_table" />,
    <Route path="/demo_collection" component={DemoCollectionHomePage} key="/demo_collection" />,
]


export default function APP() {
    return (
        <Router history={history}>
            <Switch>
                {DemoPages}
            </Switch>
        </Router>
    )
}