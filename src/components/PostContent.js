import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


function PostContent(props) {
    return(
        // <Card>
        //         {props.postFormSubmission.title}
        //     <CardContent>
        //         {props.postFormSubmission.text}
        //     </CardContent>
        // </Card>
        <div>
            <h1>Post Content</h1>
            <p>{props.postFormSubmission.title}</p>
            <p>{props.postFormSubmission.text}</p>
        </div>
    )
}

export default connect(state => {
    return state;
})(PostContent);