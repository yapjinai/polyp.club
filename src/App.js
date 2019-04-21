import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import '../css/App.css';

import Landing from "./pages/Landing";
import Whoracle from "./pages/Whoracle";
import ErrorPage from './pages/ErrorPage';

class App extends Component {
  render() {
    return (
      <Router>
          <div className='App'>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/whoracle" component={Whoracle} />
            <Route component={ErrorPage} />
          </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
