import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './routes/Home/Home.jsx'
import Constructor from './routes/Constructor/Constructor.jsx'
import Calculator from './routes/Calculator/Calculator.jsx'


function App() {
  return (
    <div>
    	<div>Hello</div>
    	<Switch>
    		<Route path='/' exact component={Home} />
    		<Route path='/constructor' component={Constructor} />
    		<Route path='/calculator' component={Calculator} />
    	</Switch>
    </div>
  );
}

export default App;
