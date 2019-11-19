import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
    text: {
        fontSize: 20,
        marginRight: 86,
    },
    button: {
        fontSize: 25,

    },
    card: {
        maxWidth: 500,
        background: 'linear-gradient(40deg, #FFCA00300%, #FF4500 90%)',
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
            <h1 className={classes.h1}>Welcome New User, Register Here</h1>
            <Card className={classes.card}>

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
                    <Button className={classes.button} size="large" type="submit">Register</Button>
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

    handleSubmit(values, { setStatus }) {
        axios
            .post("https://backend-posthere-russ-and-mack.herokuapp.com/users/login", values)
            .then(response => {
                console.log("Axios Login Response:", response);
                setStatus(response.data);
                sessionStorage.setItem("token", response.data.tayload);
                // props.history.push('/')
            })
            .catch(error => console.log(error.response));
    }
})(Login)




export default FormikLogin;