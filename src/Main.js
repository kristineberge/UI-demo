import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import {Page2} from './modules/Page2'
import {Home} from './modules/Home'
import {Page3} from './modules/Page3'


export class Main extends Component {
    render() {
        return (
            <main style={{ minWidth: 500, width: '-webkit-fill-available' }}>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={Home}
                    />
                    <Route
                        exact
                        path="/menu1"
                        component={Home}
                    />
                    <Route
                        exact
                        path="/menu2"
                        component={Page2}
                    />
                    <Route
                        path="/menu3"
                        component={Page3}
                    />
                    <Route exact path="/" component={Event} />
                </Switch>
            </main>
        )
    }
}
export default Main;
