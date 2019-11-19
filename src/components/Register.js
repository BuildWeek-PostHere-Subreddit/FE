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
      fontSize: 15,
      marginRight: 105,
    },
    button: {
        fontSize: 30,
      },
    card: {
        maxWidth: 500,
        background: 'linear-gradient(40deg, #FFCA00 30%, #FF4500 90%)',
    },
    h2:{
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
            
            <Card className={classes.card}>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Reddit_logo_new.svg/250px-Reddit_logo_new.svg.png"></img>
                    <h2 className={classes.h2}>Welcome New User, Register Here</h2>           
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