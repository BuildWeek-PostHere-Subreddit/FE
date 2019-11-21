import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PostContent from "./PostContent"
import SuggestedList from "./SuggestedList"
import { makeStyles } from '@material-ui/core/styles';
import { saveResults } from '../actions/postFormActions';

const useStyles = makeStyles(theme => ({
    text: {
        fontSize: 20,
        marginRight: 100,
    },

    card: {
        maxWidth: 500,
        background: 'linear-gradient(40deg, #FFCA00 30%, #FF4500 90%)',
        borderRadius: 0,
        maxHeight: 900
    },
    h1: {
        fontFamily: 'Ralewayy',
    },
    results:{
        background: 'linear-gradient(40deg, #FFCA00 30%, #FF4500 90%)',
        borderColor: '#FFFFFF'
    }

}));




export function ResultCard(props) {
    const classes = useStyles();
    props.results.length = 3;

    const backendSubmit = event => {
        event.preventDefault();
        //user_id is hard coded to 6 right now. Need to fix a redux store issue where the user id is not being updated with the one given upon login
        const resultInfo = { user_id: 6, title: props.post.title, text: props.post.text, link: props.post.link, first: props.results[0].name, first_subscribers: props.results[0].subscribers, first_description: props.results[0].description, first_url: props.results[0].url, second: props.results[1].name, second_subscribers: props.results[1].subscribers, second_description: props.results[1].description, second_url: props.results[1].url, third: props.results[2].name, third_subscribers: props.results[2].subscribers, third_description: props.results[2].description, third_url: props.results[2].url }
        console.log("backend submit", resultInfo)
        props.saveResults(resultInfo)
    }

    return (
        <Card className={classes.card} flexDirection="row">
            <button onClick={backendSubmit}>Save</button>
            <h1 className={classes.titletext}>Title:{props.post.title}</h1>
            <p>Text: {props.post.text}</p>
            <br /><br />
            {props.results.map(result => {
                return (
                    
                        <Card border={5} className={classes.results}>
                            <h1 ><a href={result.url} target="_blank">{result.name}</a></h1>
                            <h3>{result.url}</h3>
                            <h3>Subscribers: {result.subscribers}</h3>
                            <h3>{result.description}</h3>
                        </Card>
                )
            })}
            
        </Card>
    )
}

const mapStateToProps = state => {

    return {
        results: state.postReducer.results,
        idUser: state.loginReducer.idUser
    }
}

export default connect(
    mapStateToProps,
    { saveResults }
)(ResultCard);