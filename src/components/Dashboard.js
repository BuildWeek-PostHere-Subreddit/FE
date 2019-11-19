import React from "react";
import SavedList from './SavedList';
import PostForm from './PostForm';
import SearchForm from './SearchForm';
import ResultCard from './ResultCard';
import SuggestedList from "./SuggestedList";

const Dashboard = () => {
    return(
        <div className="dashboard">
            <PostForm />
            <SuggestedList />
        </div>
    )
}

export default Dashboard;