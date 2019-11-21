import React from 'react';
import { connect } from 'react-redux';

export const SavedList = props => {

}

const mapStateToProps = state => {

    return {
        results: state.postReducer.results,
        idUser: state.loginReducer.idUser
    }
}

export default connect(
    mapStateToProps,
    {}
)(SavedList);