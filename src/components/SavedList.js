import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { retrieveSavedList } from '../actions/savedListActions';
import axios from "axios";


export const SavedList = props => {
    const [list, setList] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        axios
            .get(`https://backend-posthere-russ-and-mack.herokuapp.com/post/${localStorage.getItem("user_id")}`)
            .then(response => {
                console.log("saved list response", response)
                setList(response.data);
            })
    }, [])

    const handleChange = event => {
        setSearchTerm({ ...searchTerm, [event.target.name]: event.target.value })
    };


    const submitSearch = e => {
        e.preventDefault();
        let filteredArray = []
        console.log("search term", searchTerm)

        list.forEach(item => {
            let returnThisItem = false
            console.log(item)
            const valuesArray = Object.values(item)
            console.log(valuesArray);

            valuesArray.forEach(value => {
                console.log(searchTerm)
                // console.log(value)
                console.log(value.toString())
                // console.log(value.toString().includes(searchTerm))
                if (value.toString().includes(searchTerm.search)) {
                    console.log("it's incluced")
                    returnThisItem = true
                } else {
                    console.log("it's not included")
                }
            })

            if (returnThisItem === true) {
                filteredArray.push(item)
            }

            // const filteredArray = valuesArray.filter(value => value.toString().includes(searchTerm.search))
            // console.log(filteredArray);
        })

        console.log("filtered array", filteredArray);
        setList(filteredArray);

        // list.filter(checkForSearchTerm)
    }
    // const search = (searchTerm, list) => {
    //     for (var i = 0; i < list.length; i++) {
    //         if (list[i].title === searchTerm) {
    //             return list[i];
    //         }
    //     }
    // }

    const deleteItem = item => {
        console.log(item.id);
        console.log(`https://backend-posthere-russ-and-mack.herokuapp.com/post/${localStorage.getItem("user_id")}/${item.id}`)
        axios
            .delete(`https://backend-posthere-russ-and-mack.herokuapp.com/post/${localStorage.getItem("user_id")}/${item.id}`)
    };

    return (
        <div>
            <h1>Saved List</h1>
            <form onSubmit={submitSearch}>
                <input type="text" name="search" onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
            {list.map(item => {
                return (
                    <div>
                        <button onClick={e => {
                            // e.stopPropagation();
                            deleteItem(item);
                        }
                        }>Delete</button>
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
        savedList: state.savedListReducer.savedList,
        idUser: state.loginReducer.idUser
    }
}

export default connect(
    mapStateToProps,
    {}
)(SavedList);