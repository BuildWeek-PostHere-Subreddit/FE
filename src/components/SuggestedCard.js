import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function SuggestedCard (props){
    return(
        
        
            <Card>
                {props.name} 
                    <CardContent> 
                        {props.url}
                        </CardContent>
                        <CardContent>
                         {props.description}
                    </CardContent> 
                    <CardContent>
                         {props.subscriptions}
                    </CardContent>               
            </Card>
        
        
    );
};

export default SuggestedCard;