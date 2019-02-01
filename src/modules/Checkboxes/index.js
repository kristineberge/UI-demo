import React from 'react'
import { Redirect } from 'react-router-dom'
import { Checkbox } from '@dhis2/ui/core'
import {Title, Text, Heading } from '../../helpers'
import { Grid } from '@material-ui/core'


export class Checkboxes extends React.Component {
    state = {
        'check': false,
        'warn' : false,
        'err'  : false,
    }

    onChange = (name, value) => {
        this.setState({ [name]: value })
    }

    render() {
        return (
              <div>
                <Checkbox
                    name={"check"}
                    onChange={this.onChange}
                    checked={this.state["check"]}
                    label={"Check"}
                  />
                  <Checkbox
                      name={"warn"}
                      onChange={this.onChange}
                      checked={this.state["warn"]}
                      label={"Warning"}
                      status={"warning"}
                    />
                    <Checkbox
                        name={"err"}
                        onChange={this.onChange}
                        checked={this.state["err"]}
                        label={"Error"}
                        status={"error"}
                      />

                </div>
        )
    }
}
export default Checkboxes;
