import React from 'react';
import './App.scss';
import NavigationBar from './components/NavigationBar/NavigationBar';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Add from './components/Add/Add';
import Update from './components/Update/Update'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <div className="body">
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/add" component={Add}/>
            <Route path="/update" component={Update}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
