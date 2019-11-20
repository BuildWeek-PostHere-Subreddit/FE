import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PostContent from "./PostContent"
import SuggestedList from "./SuggestedList"


export default function ResultCard(){

    return(
        <Card>
            <PostContent />
            <SuggestedList />
        </Card>
    )
}