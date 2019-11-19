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
    h2: {
        fontFamily: 'Raleway',
    },
    title: {
        height: 20,
        width: 330

    },
    text: {
        height: 100,
        width: 350

    },
}));

const PostForm = ({ status }) => {


    const classes = useStyles();



    return (
        <div className="postForm">
            <Card className={classes.card}>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Reddit_logo_new.svg/250px-Reddit_logo_new.svg.png"></img>
                <h2 className={classes.h2}>Get Started Finding Those Subreddits!</h2>
                <Form>
                    <Field className={classes.title} type="title" name="title" placeholder="Title" />
                    <br /><br />
                    <Field className={classes.text} as="textarea" type="text" name="text-area" placeholder="Enter Your Post Here!" />
                    <br /><br />
                    <Button className={classes.button} size="large" type="submit">Get Subreddits!</Button>
                </Form>
            </Card>
        </div>

    )
}
const FormikPostForm = withFormik({
    mapPropsToValues({ title, text }) {
        return {
            title: title || "",
            text: text || "",

        };
    },

}
)(PostForm)

export default FormikPostForm;