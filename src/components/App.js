import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {AppProvider} from './Context';
import Search from './Search';
import About from './About';
import Nav from './Nav';
import Item from './Item';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Search} />
          <Route path='/about' component={About} />
          <Route path='/item/:id' component={Item} />
        </Switch>
      </Router>
    </AppProvider>
  )
}

export default App;