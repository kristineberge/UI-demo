import React, { Component } from 'react';
import './App.css';
import { Header } from './modules/Header';
import { Title, Heading, Text } from './helpers';
import { SidebarMenu } from './modules/SidebarMenu';
import {Col, Row } from './helpers';
import { Card } from '@dhis2/ui/core'
import { Button } from '@dhis2/ui/core'
import { Home } from './modules/Home'
import { BrowserRouter } from 'react-router-dom'
import { HashRouter, Redirect } from 'react-router-dom';
import { Main } from './Main';

class App extends Component {
  state = {
      val: null,
  }

  onClick = value => {
    this.setState({
      val: value
    })
  }

  render() {
    if (this.state.val){
      return <Redirect push to={this.state.val}/>
    }
    return (
      <BrowserRouter>
          <HashRouter>
          <div className="App">
            <Header/>
            <Row>
              <Col>
                <SidebarMenu onClick={this.onClick}/>
              </Col>
                <Main/>
            </Row>
          </div>
        </HashRouter>
      </BrowserRouter>
    );
  }
}

export default App;
