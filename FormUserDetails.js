import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends React.Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        const { values } = this.props
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details" />
                    <TextField 
                        floatingLabelText="First Name"
                        onChange={this.props.handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br />
                    <TextField 
                        floatingLabelText="Last Name"
                        onChange={this.props.handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br />
                    <TextField 
                        floatingLabelText="E-mail"
                        onChange={this.props.handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br />
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin : 15
    }
}

export default FormUserDetails;