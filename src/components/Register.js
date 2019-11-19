import React, {useState, useEffect} from "react";
import {withFormik, Form, Field} from "formik";
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
        fontSize: 30,
      },
    card: {
        maxWidth: 500,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    h1:{
        fontFamily: 'Raleway',
    }
  }));
  

const Register = ({status}) => {

    const [user, setUser] = useState([]);
    const classes = useStyles();
    useEffect(() =>{
        if (status) {
            setUser([...user, status])
        }
    }, [status]);

   
    return(
        <div className="registerForm">
            <h1 className={classes.h1}>Welcome New User, Register Here</h1>
            <Card className={classes.card}>
                               
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

    )}
const FormikRegister = withFormik({
    mapPropsToValues({username, password}){
        return{
            username: username || "",
            password: password || "",
            
        };
    },

    handleSubmit(values, {setStatus}){
        console.log(values);
        axios
            .post("https://backend-posthere-russ-and-mack.herokuapp.com/users/register", values)
            .then(response =>{
                console.log(response);
                setStatus(response.data);
            })
            .catch(error => console.log(error.response));
    }
})(Register)




export default FormikRegister;