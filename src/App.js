import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Homescreen, About, Solutions } from './pages';
import './App.css';

export default function App() {
  return (
      
          <Switch>
            
                <Route exact path="/" component={Homescreen} />
              <Route path="/about" component={About} />
              <Route path="/solutions" component={Solutions} />
              </Switch>
    
  );
}


