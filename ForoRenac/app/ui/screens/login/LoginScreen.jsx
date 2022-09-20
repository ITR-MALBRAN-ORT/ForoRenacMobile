import React, {Component} from 'react';
import LoginScreenUI from './LoginScreenUI';
import {
  LOGIN_STACK
} from '../../../navigation/NavigationConstants';

export default class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
    submitDisabled: true,
  };

  constructor(props) {
    super(props);
  }

  navigateTo = ({action, componentName}) => {
    //See componentNames list in navigation/MainStack.jsx
    
    this.props.navigation[action](componentName);
  };
  handleSubmit = () => {
    if (this.state.email && this.state.password && !this.state.submitDisabled) {
      console.log('submitted',`${this.state.email}-${this.state.password}`);
      //TODO encrypt password and save credentials in db
      //NavigateTo --> landing
      this.navigateTo({action: "push", componentName: LOGIN_STACK.REGISTER_SCREEN})
    }
  };
  handleDisabled = () => {
    this.state.email && this.state.password
      ? this.setState({submitDisabled: false})
      : this.setState({submitDisabled: true});
  };
  saveEmail = (email) => {
    console.log('email saved', email);
    this.setState({email});
    this.handleDisabled();
  };
  savePassword = (password) => {
    console.log('password saved', password);
    this.setState({password});
    this.handleDisabled();
  };

  render() {
    return (
      <LoginScreenUI
        saveEmail={this.saveEmail}
        savePassword={this.savePassword}
        handleSubmit={this.handleSubmit}
        submitDisabled={this.state.submitDisabled}
      />
    );
  }
}
