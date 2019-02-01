import React from 'react'
import { Redirect } from 'react-router-dom'
//import { EntityTable } from '../'
import { Col, Row, Title, Text, Heading } from '../../helpers'
import { Card } from '@dhis2/ui/core'
import { Button } from '@dhis2/ui/core'
import { Grid } from '@material-ui/core'

export class Buttons extends React.Component {

    render() {

        return (
          <Grid
            container
            direction="column"
            spacing={10}>

            <div style={{padding:2}}>
              <Grid item>
              <Button
                variant="contained"
                kind='primary'
                icon= 'done'
                > Test
              </Button>
              </Grid>
              </div>

              <div style={{padding:2}}>
              <Grid item>
                <Button
                variant="contained"
                kind='basic'
                icon= 'edit'
                > Test
                </Button>
              </Grid>
              </div>

              <div style={{padding:2}}>
              <Grid item>
              <Button
                variant="contained"
                kind='destructive'
                icon= 'delete'
                > Test
              </Button>
              </Grid>
              </div>

          </Grid>
        )
    }
}

export default Buttons;
