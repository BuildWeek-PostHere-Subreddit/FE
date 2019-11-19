import React from "react";
import SavedList from './SavedList';
import PostForm from './PostForm';
import SearchForm from './SearchForm';
import ResultCard from './ResultCard';

const Dashboard = () => {
    return(
        <div className="dashboard">
            <PostForm />
            <ResultCard />
            <SearchForm />
            <SavedList />
        </div>
    )
}

export default Dashboard;