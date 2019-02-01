import React from 'react'
import HeaderBar from '@dhis2/ui/widgets/HeaderBar'

export class Header extends React.Component {
    static id = 'headerbar'

    /* required: appName, change the appname to what you want*/
    render() {
      return <HeaderBar appName="Demo UI" />
    }
}
