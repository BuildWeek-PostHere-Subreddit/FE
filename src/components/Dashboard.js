import React from "react";
import SavedList from './SavedList';
import PostForm from './PostForm';
import SearchForm from './SearchForm';
import ResultCard from './ResultCard';
import SuggestedList from "./SuggestedList";
import TestPostForm from './TestPostForm';

const Dashboard = () => {
    return(
        <div className="dashboard">
            <TestPostForm />
            {/* <ResultCard /> */}
            <SuggestedList />
        </div>
    )
}

export default Dashboard;