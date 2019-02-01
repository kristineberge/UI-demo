import React from 'react'
import { Redirect } from 'react-router-dom'
import { Card, Checkbox } from '@dhis2/ui/core'
import { Col, Row, Title, Text, Heading } from '../../helpers'
import InputField from "@dhis2/ui/core/InputField"
import { Grid } from '@material-ui/core'
import { Button } from '@dhis2/ui/core'



export class Input extends React.Component {
    state = {
        value: '',
    }


    setValue = (name, value) => {
        this.setState({ value: value })
    }


    render() {

        return (
          <Grid container spacing={10}
            direction="row"
            alignItems="center">

              <Grid item>
                <InputField
                    name={"fill"}
                    label={"Text here"}
                    value={this.state.value}
                    onChange={this.setValue}
                    kind={'outlined'}
                    size="dense"
                />
                </Grid>

                <Grid item>
                <Button
                    variant="contained"
                    kind='basic'>
                    Save
                </Button>
                </Grid>

          </Grid>
        )
    }
}
export default Input;
