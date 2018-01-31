import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from '../components';
import { emailChanged, passwordChanged, validateUser } from '../actions';

class LoginForm extends Component { 

    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress() {
       const { email, password } = this.props;
       this.props.validateUser({email,password});
    }

    buttonOrSpinnerToggle() {
        console.log('In Function');
        if(!this.props.loading) {
        console.log('Loading false');
            
            return (
                    <Button onPress = {this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                    );
        }else{
        console.log('Loading true');
            
            return (
                <Spinner />

            );
        }

    }


    render() {

        return(
            <Card>
                <CardSection>
                    <Input label="Email"
                            placeholder="example@gmail.com" 
                            onChangeText = {this.onEmailChange.bind(this)} >
                    </Input>
                </CardSection>

                <CardSection>
                    <Input label="Password" 
                            secureTextEntry 
                            placeholder="Password"
                            onChangeText = {this.onPasswordChange.bind(this)}>
                    </Input>
                    
                </CardSection>

                <CardSection>
                    {this.buttonOrSpinnerToggle()}
                </CardSection>
                
            </Card>
        );
    }

}

const mapStateToProps = state => {
   return {
        email: state.auth.email,
        password: state.auth.password,
        loading: state.auth.loading,
        user: state.auth.user
   };
   
    
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, validateUser})(LoginForm);