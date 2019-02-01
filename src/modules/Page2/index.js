import React from 'react'
import { Redirect } from 'react-router-dom'
import { Card } from '@dhis2/ui/core'
import { Col, Row, Title, Text, Heading } from '../../helpers'
import SwitchDemo  from '../SwitchDemo'

export class Page2 extends React.Component {
    state = {
        entityClicked: null,
    }

    onClick = row => {
        this.setState({ entityClicked: row[3] })
    }

    render() {
        return (
          <div style={{paddingRight:15}}>
          <Title>Menu item 2</Title>
            <Card>
              <div style={{ padding: 15 }}>
              <Text style={{fontSize:'bold'}}> Test page </Text>
              <div style={{paddingLeft: 20}}>
                <SwitchDemo/>
              </div>
              </div>
            </Card>
          </div>
        )
    }
}
export default Page2;
