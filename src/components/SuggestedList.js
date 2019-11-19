import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SuggestedCard from './SuggestedCard'

function SuggestedList(){
    const [data, setData] = useState([]);
    
        useEffect(() =>{
            axios
            .get("https://davidanagy-posthere-flask.herokuapp.com/subreddit")
            .then(response =>{
                setData(response.data.results);
                console.log(response)
            })
        },[])
        return(

            <div>
            
                {data.map((data)=>{
                    return(
                        <div> 
                        <SuggestedCard  
                            name = {data.name}
                            url= {data.url}
                            description= {data.description}
                        />
                        </div>
                    )}
                )}
             
            </div> 
        );
    };
    export default SuggestedList;