import React from 'react'
import { Redirect } from 'react-router-dom'
import { Card } from '@dhis2/ui/core'
import { Title, Text, Heading, Divider } from '../../helpers'
import { Grid } from '@material-ui/core'
import { Button } from '@dhis2/ui/core'
import Checkboxes  from '../Checkboxes'
import Input  from '../Input'
import InputField from "@dhis2/ui/core/InputField"
import RadioDemo  from '../RadioDemo'


export class Page3 extends React.Component {
  state = {
      "fill": '',
      "fill2": '',
  }


  setValue = (name, value) => {
    console.log(name);
      this.setState({ [name]: value })
  }
    render() {

        return (
          <div style={{paddingRight:15}}>
            <Title>Menu item 3</Title>
            <Card>

              <div style={{ padding: 15 }}>
                <Grid container spacing={10}>

                    <Grid item xs={6}>
                      <Text> Checkboxes  </Text>
                      <Checkboxes/>
                    </Grid>

                    <Grid item xs={6}>
                        <Text> Textfield and button </Text>
                        <Grid container spacing={10}
                          direction="row"
                          alignItems="center">

                            <Input/>

                        </Grid>
                    </Grid>

                  </Grid>
                </div>
            </Card>
            <div style={{marginTop:10}}>
            <Card>
              <div style={{ padding: 15 }}>
                <Grid container spacing={24}>
                    <Grid item xs={6}>

                    <RadioDemo/>


                    </Grid>

                    <Grid item xs={6}>

                          <Text> Data </Text>

                          <InputField
                              name={"fill"}
                              label={"Name"}
                              value={this.state["fill"]}
                              onChange={this.setValue}
                              kind={'outlined'}
                              size="dense"
                              icon="face"
                          />
                        <div style={{marginTop:10}}>
                          <InputField
                              name={"fill2"}
                              label={"Adress"}
                              value={this.state["fill2"]}
                              onChange={this.setValue}
                              kind={'outlined'}
                              size="dense"
                              status="warning"
                          />
                          </div>

                    </Grid>

                  </Grid>
                </div>
            </Card>
            </div>

          </div>
        )
    }
}
export default Page3;
