import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from 'components/Header';
import List from 'pages/List';
import Video from 'pages/Video';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="container">
//         <Header />
//         <List />
//       </div>
//     );
//   }
// }

const App = () =>
  <div className="container">
    <Router>
      <div>
        <Header />

        <hr />

        <Route exact path="/" component={List} />
        <Route path="/:id" component={Video} />
      </div>
    </Router>
  </div>;

export default App;
