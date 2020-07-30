import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>Webapp</h1>
      <p>message from service: <span>{props.message}</span></p>
    </div>
  );
}

let hoc = (WrappedComponent) => {
  return class EnhancedComponent extends Component {
    constructor(props) {
      super(props);
      this.state = { message: '' };
    }

    async componentDidMount() {
      let response = await axios.get(`/api/message`);
      let message = response.data.message;
      this.setState({ message });

    }

    render() {
      return <WrappedComponent message={this.state.message} />
    }
  }
};

export default hoc(App);