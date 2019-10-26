import React, { useState, useEffect } from 'react';
import Search from './Search';
import About from './About';
import Nav from './Nav';
import Item from './Item';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Nav />
      <Route path='/about' component={About} />
      <Route path='/' exact component={Search} />
      <Route path='/p/:id' component={Item}/>
    </Router>
  )
}

export default App;