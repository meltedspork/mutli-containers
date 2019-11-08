import React from 'react';
import './App.css';
import logo from './logo.svg';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  console.log('Fib Calculator version 5.0, 👍');

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Fib Calculator version 5.0</h1>
        </header>
        <center>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </center>
        <br /><br />
        <div>
          <Route exact path="/" component={Fib} />
          <Route exact path="/otherpage" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
