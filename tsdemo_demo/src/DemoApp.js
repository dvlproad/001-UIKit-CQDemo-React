import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import DemoTableHomePage from "./DemoTableHomePage";
import Page1 from "./App";

const history =  createBrowserHistory({
    basename: 'demo',
});


export const DemoPages = [
    <Route path="/home" component={DemoTableHomePage} />,
    <Route path="/page1" component={Page1} />
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