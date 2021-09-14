import axios from 'axios';
import React, { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';

const initialValue = {
    posts: [],
    error: '',
    isLoading: true
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SUCCESS":
            return { ...state, posts: action.data, isLoading: false };
        case "FAILED":
            return { ...state, posts: [], isLoading: false, error: 'an error throwed!' }
        default:
            throw new Error();
    }
}

const Posts = () => {

    const [state, dispatch] = useReducer(reducer, initialValue);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => dispatch({ type: "SUCCESS", data: response.data }))
            .catch((error) => dispatch({ type: "FAILED" }));
    }, []);

    const listPosts = state.posts.map((post) => {
        const url = `/post/${post.id}`;
        return <h2 key={post.id}><Link to={url}>{post.title}</Link></h2>;
    });

    return (
        <React.Fragment>
            {state.isLoading ? "Loading..." : listPosts}
            {state.error && state.error}
        </React.Fragment>
    );
};

export default Posts;