import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import PostForm from './components/PostForm'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Header />
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;