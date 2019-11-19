import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


export default function PostContent(props) {
    return(
        <Card>
                {props.title}
            <CardContent>
                {props.text}
            </CardContent>
        </Card>
    )
}