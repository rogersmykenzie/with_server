import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: "We didn't hit the server :("
    }
  }

  componentDidMount() {
    axios.get('/api/test').then(response => {
      this.setState({
        message: response.data.message
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
