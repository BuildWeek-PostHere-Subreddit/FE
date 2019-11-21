import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import { connect } from "react-redux";
import axios from "axios";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { setUserID } from '../actions/loginActions';


const useStyles = makeStyles(theme => ({
    text: {
        fontSize: 15,
        marginRight: 105,
    },
    button: {
        fontSize: 25,

    },
    card: {
        maxWidth: 500,
        background: 'linear-gradient(40deg, #FFCA00 30%, #FF4500 90%)',
    },
    h1: {
        fontFamily: 'Ralewayy',
    }
}));


const Login = ({ status }) => {
    const classes = useStyles();

    const [user, setUser] = useState([]);
    useEffect(() => {
        if (status) {
            setUser([...user, status])
        }
    }, [status]);


    return (
        <div className="registerForm">
            <Card className={classes.card}>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Reddit_logo_new.svg/250px-Reddit_logo_new.svg.png"></img>
                <h2>Welcome Back, Returning User</h2>

                <Form>
                    <Typography className={classes.text} >
                        Username:
                             </Typography >
                    <Field type="username" name="username" placeholder="username" />
                </Form>
                <Form>
                    <Typography className={classes.text} >
                        Password:
                                </Typography>
                    <Field type="password" name="password" placeholder="password" />
                    <br /><br />
                    <Button className={classes.button} size="large" type="submit">Login</Button>
                </Form>
            </Card>
        </div>

    )
}
const FormikLogin = withFormik({
    mapPropsToValues({username, password}){
        return {
            username: username || "",
            password: password || "",

        };
    },

    handleSubmit(values, { setStatus, props }) {
        props.setUserID(values);
        props.history.push('/')
        
        // axios
        //     .post("https://backend-posthere-russ-and-mack.herokuapp.com/users/login", values)
        //     .then(response => {
        //         console.log("Axios Login Response:", response);
        //         setStatus(response.data);
        //         sessionStorage.setItem("token", response.data.token);
        //         props.setUserID(user)
        //         props.history.push('/');
        //     })
        //     .catch(error => console.log(error.response));
    }
})(Login)


// export default FormikLogin;

export default connect(
    null,
    {setUserID}
)(FormikLogin)