import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class FormUserDetails extends React.Component {
    render() {
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details" />
                    <br />
                    <h2>Submitted Successfully</h2>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormUserDetails;