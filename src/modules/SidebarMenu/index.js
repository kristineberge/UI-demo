import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Menu } from '@dhis2/ui/core'

export class SidebarMenu extends Component {
    state = { path: null }

    menuItems = [
        {
            label: 'Menu item 1',
            value: '/menu1',
            icon: 'people',
        },
        {
            label: 'Menu item 2',
            value: '/menu2',
            icon: 'help_outline',
        },
        {
            label: 'Menu item 3',
            value: '/menu3',
            icon: 'highlight_off',
        },
        {
            label: 'Menu item 4',
            value: '/menu4',
            icon: 'check_circle_outline',
        },
    ]

    onClick = path => {
      //this.props.onClick(path);
      this.setState({
        path: path
      })
    }

    render() {
        return (
            <div style={{ margin: 16 }}>
              <Menu list={this.menuItems} onClick={this.onClick} />
              {this.state.path ? <Redirect push to={this.state.path} /> : null}
            </div>
        )
    }
}
