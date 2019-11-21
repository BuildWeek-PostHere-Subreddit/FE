import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import PostForm from './components/PostForm'
import Header from './components/Header'
import SuggestedList from './components/SuggestedList'
import ResultCard from './components/ResultCard'
import NavBar from './components/NavBar';
import SavedList from './components/SavedList';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Header />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/results">
          <ResultCard />
        </PrivateRoute>
        <PrivateRoute exact path="/">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute exact path="/saved">
          <SavedList />
        </PrivateRoute>
      </div>
    </Router>

  );
}

export default App;