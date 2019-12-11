import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Components from './Components';
import Contact from './Contact';
import NoMatch from './NoMatch';
import NavigationBar from './components/NavigationBar';
import Hooks from './Hooks';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/component' component={Components}/>
          <Route path='/hooks' component={Hooks} />
          <Route path='/contact' component={Contact} />
          <Route component={NoMatch}/>
        </Switch>
        </Router>
      </React.Fragment>
    );
  }
}


export default App;


