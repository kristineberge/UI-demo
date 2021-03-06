import React from 'react'
import {Switch} from '@dhis2/ui/core'

import { Text, Row, Col, Divider, RowW } from '../../helpers'

const types = [
    {
        label: 'Default',
    },
    {
        label: 'Checked',
    },
    {
        disabled: true,
        label: 'Disabled Switch',
    },
]

const states = [
    {
        required: true,
        label: 'Valid',
        status: 'valid',
    },
    {
        required: true,
        label: 'Warning',
        status: 'warning',
    },
    {
        required: true,
        label: 'Error',
        status: 'error',
    },
]

const wrapperStyle = {
    marginRight: 20,
    width: 150,
}

export class SwitchDemo extends React.Component {
    static id = 'input-switch'

    state = {
        't-Checked': true,
        's-Valid': true,
    }

    onChange = (name, value) => {
        this.setState({ [name]: value })
        console.log(`onChange ${name} to ${value}`)
    }

    render() {
        return (
            <div>
                <Text>Types</Text>
                <Row style={{ marginBottom: 20 }}>
                    {types.map(p => {
                        const k = `t-${p.label}`
                        return (
                            <div key={`sw-${p.label}`} style={{padding:10}} >
                                <Switch
                                    {...p}
                                    name={k}
                                    checked={this.state[k] || false}
                                    onChange={this.onChange}
                                />
                            </div>
                        )
                    })}
                </Row>

                <Text>States</Text>
                <RowW style={{ marginBottom: 20 }}>
                    {states.map(p => {
                        const k = `s-${p.label}`
                        return (
                            <div key={`sw-${p.label}`} style={{padding:10}}>
                                <Switch
                                    {...p}
                                    name={k}
                                    checked={this.state[k] || false}
                                    onChange={this.onChange}
                                />
                            </div>
                        )
                    })}
                </RowW>
            </div>
        )
    }
}

export default SwitchDemo;



// WEBPACK FOOTER //
// ./src/demos/Atoms/Input/Switch/index.js
