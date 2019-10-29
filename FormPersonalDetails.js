import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends React.Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const { values } = this.props
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal Details" />
                    <TextField 
                        floatingLabelText="Occupation"
                        onChange={this.props.handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                    <br />
                    <TextField 
                        floatingLabelText="City"
                        onChange={this.props.handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br />
                    <TextField 
                        floatingLabelText="Bio"
                        onChange={this.props.handleChange('bio')}
                        defaultValue={values.bio}
                    />
                    <br />
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton 
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
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

export default FormPersonalDetails;