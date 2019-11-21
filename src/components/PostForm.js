import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PostContent from './PostContent'
import ResultCard from './ResultCard';
import { submitPost, postSend } from '../actions/postFormActions';

const useStyles = makeStyles(theme => ({
    text: {
        fontSize: 15,
        marginRight: 105,
    },
    button: {
            fontSize: 30,
            background: 'linear-gradient(45deg, #2E3B55 30%, #2E3B55 90%)',
            color: '#FFFFFF'
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

const PostForm = ({ status, values }, props) => {

    
    console.log("this is the results", props);
    const [post, setPost] = useState([]);
    const classes = useStyles();


    useEffect(() =>{
        if (status) {
            setPost([...post, status])
        }
    }, [status]);

    return (
        <div className="postForm">
            <Card className={classes.card}>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Reddit_logo_new.svg/250px-Reddit_logo_new.svg.png"></img>
                <h2 className={classes.h2}>Get Started Finding Those Subreddits!</h2>
                <Form>
                    <Field className={classes.title} type="title" name="title" placeholder="Title" />
                    <br /><br />
                    <Field className={classes.text} as="textarea" type="text" name="text" placeholder="Enter Your Post Here!" />
                    <br /><br />
                    <Button className={classes.button} size="large" type="submit">Get Subreddits!</Button>
                </Form>
            </Card>
            {/* {props.results.map(post => (
                <PostContent 
                title = {post.title}
                text= {post.text}
            />
            ))} */}
        </div>

    )
}
const FormikPostForm = withFormik({
    mapPropsToValues({ title, text, link }) {
        return {
            title: title || "",
            text: text || "",
            link: link || false,
        };
    },

    handleSubmit(values, {setStatus, props}){
        props.submitPost(values)
        // props.dispatch(postSend(values));
    }
}
)(PostForm)

// export default FormikPostForm;

const mapStateToProps = state => {
    console.log("in post form", state)
    console.log("in post form", state.postReducer)
    return {
        results: state.postReducer.results
    }
}

export default connect(
    mapStateToProps,
    {submitPost}
)(FormikPostForm);