import React from 'react'
import { Redirect } from 'react-router-dom'
//import { EntityTable } from '../'
import { Col, Row, Title, Text, Heading } from '../../helpers'
import { Card } from '@dhis2/ui/core'
import { Button } from '@dhis2/ui/core'
import { Grid } from '@material-ui/core'
import Buttons from '../Buttons'

export class Home extends React.Component {

    render() {

        return (
          <div style={{paddingRight:15}}>
              <Title>Menu item 1</Title>
                <Card>
                <div style={{ padding: 15 }}>
                  <Text>
                    Card and buttons
                  </Text>

                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={10}>
                      <Grid item xs={10} alignItems="center">
                      <div style={{ padding: 15 }}>
                      <Card>
                        <Text>
                        Lorem ipsum dolor sit amet, vel habeo iudico principes
                        ad. Nostro suscipit legendos ne sea, cum graece impedit
                        feugait ea.
                        </Text>
                      </Card>
                      </div>
                      </Grid>
                      <Grid item xs={2} alignItems="center">
                        <Buttons/>
                      </Grid>

                  </Grid>
                  </div>
                </Card>
          </div>
        )
    }
}

export default Home;
