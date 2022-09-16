import React, {Component} from 'react';
import RegisterScreenUI from './RegisterScreenUI';

export default class RegisterScreen extends Component {
  state = {
    userName: '',
    email: '',
    password: '',
    submitDisabled: true,
  };

  constructor(props) {
    super(props);
  }

  handleSubmit = () => {
    // Handle Submit
  };
  handleDisabled = () => {
    this.state.email && this.state.password && this.state.userName
      ? this.setState({submitDisabled: false})
      : this.setState({submitDisabled: true});
  };

  render() {
    return (
      <RegisterScreenUI
        handleSubmit={this.handleSubmit}
        submitDisabled={this.state.submitDisabled}
      />
    );
  }
}