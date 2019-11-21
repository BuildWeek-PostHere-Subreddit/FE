import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

function NavBar(props) {
    if (!localStorage.getItem("token")) {
        return (
            <Card className="nav">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </Card>
        );
    }
    else {
        return (
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/saved">Saved Results</Link>
                <Link onClick={() => { console.log("Deleting token and logging out"); localStorage.removeItem("token"); props.history.push("/login"); }}>Log Out</Link>
            </div>
        );
    }
}

export default withRouter(NavBar);