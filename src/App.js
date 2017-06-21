import React, { Component } from 'react';
// import { Router, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/Header';
import Video from 'pages/Video';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Video />
      </div>
    );
  }
}

export default App;
