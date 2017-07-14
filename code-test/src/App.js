import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/index.js'
import Content from './components/Content/index.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className="content">
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
