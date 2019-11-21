import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  
   
    card: {
        maxWidth: 500,
        background: '#2E3B55',
        borderRadius: 0,
        height: 20,
        spacing: 12
    },
    link: {
       color: '#FFFFFF',
       fontSize: 20
    },

}));

function NavBar(props) {

    const classes = useStyles();
    if (!localStorage.getItem("token")) {
        return (

            <Card className={classes.card}>
                <Link className={classes.link} to="/login">Login</Link>
                "                                                     "
                <Link className={classes.link} to="/register">Register</Link>
            </Card>
        );
    }
    else {
        return (
            <Card className={classes.card}>
                <div>
                <Link className={classes.link} to="/">Home</Link>
                "                         "
                <Link className={classes.link} to="/saved">Saved Results</Link>
                "                         "
                <Link className={classes.link} onClick={() => { console.log("Deleting token and logging out"); localStorage.removeItem("token"); props.history.push("/login"); }}>Log Out</Link>
                </div>
            </Card>
        );
    }
}

export default withRouter(NavBar);