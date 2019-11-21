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
import { submitPost, saveResults } from '../actions/postFormActions';

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

const PostForm = (props) => {

    console.log("this is the results", props.results);
    const [post, setPost] = useState({ title: "", text: "", link: false });
    const classes = useStyles();

    const handleChange = event => {
        setPost({ ...post, [event.target.name]: event.target.value })
    };

    const handleSubmit = event => {
        event.preventDefault();
        // postAxios(post);
        props.submitPost(post)
        console.log("post", post)
        console.log("redux state", props.postFormSubmission)
    }

    return (
        <div className="postForm">
            <Card className={classes.card}>
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Reddit_logo_new.svg/250px-Reddit_logo_new.svg.png"></img>
                <h2 className={classes.h2}>Get Started Finding Those Subreddits!</h2>
                <form onSubmit={handleSubmit}>
                    <input className={classes.title} type="title" name="title" placeholder="Title" onChange={handleChange} />
                    <br /><br />
                    <input className={classes.text} as="textarea" type="text" name="text" placeholder="Enter Your Post Here!" onChange={handleChange} />
                    <br /><br />
                    <Button className={classes.button} size="large" type="submit">Get Subreddits!</Button>
                </form>
            </Card>
            <ResultCard post={post} />
        </div>

    )
}

const mapStateToProps = state => {
    console.log("in post form", state)
    console.log("in post form", state.postReducer)
    return {
        results: state.postReducer.results
    }
}

export default connect(
    mapStateToProps,
    { submitPost, saveResults }
)(PostForm);