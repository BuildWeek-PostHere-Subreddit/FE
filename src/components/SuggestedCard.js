import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function SuggestedCard (props){
    return(
        
        
            <Card>
                {props.name} 
                    <CardContent> 
                        {props.url}
                         {props.description}
                    </CardContent>               
            </Card>
        
        
    );
};

export default SuggestedCard;