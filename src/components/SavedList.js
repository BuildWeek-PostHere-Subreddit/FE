import React from 'react';
import { connect } from 'react-redux';
import { retrieveSavedList } from '../actions/savedListActions';

export const SavedList = props => {
    retrieveSavedList();
    return (
        <h1>Saved List</h1>
    )
    props.savedList.map(item => {
        return item
    })
}

const mapStateToProps = state => {

    return {
        savedList: state.savedListReducer.savedList
    }
}

export default connect(
    mapStateToProps,
    { retrieveSavedList }
)(SavedList);