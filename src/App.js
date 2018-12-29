import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import MyWork from './MyWork';
import Footer from './Footer';
import Popup from './Popup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <MyWork />
        <Footer />
        {/*<Popup />*/}
      </div>
    );
  }
}

export default App;
