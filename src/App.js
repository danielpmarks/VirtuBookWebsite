import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Homescreen, About, Solutions, Demos } from './pages';
import './App.css';

function App() {
  return (
      
          <Switch>
              <Route exact path="/" component={Homescreen} />
          <Route path="/about" component={About} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/demos" component={Demos}/>
              </Switch>
    
  );
}

export default App;
