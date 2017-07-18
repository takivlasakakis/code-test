import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/index.js'
import Content from './components/Content/index.js'
import Footer from './components/Footer/index.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <div>
          <Content />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
