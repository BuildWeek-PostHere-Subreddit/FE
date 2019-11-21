import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { retrieveSavedList } from '../actions/savedListActions';
import axios from "axios";


export const SavedList = props => {
    const [list, setList] = useState([])

    useEffect(() => {
        axios
            .get("https://backend-posthere-russ-and-mack.herokuapp.com/post")
            .then(response => {
                console.log("saved list response", response)
                setList(response.data);
            })
    }, [])




    return (
        <div>
            <h1>Saved List</h1>
            {list.map(item => {
                return (
                    <div>
                        <div>{item.title}</div>
                        <div>{item.content}</div>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {

    return {
        savedList: state.savedListReducer.savedList
    }
}

export default connect(
    mapStateToProps,
    {}
)(SavedList);