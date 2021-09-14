import axios from 'axios';
import React, { useEffect, useReducer } from 'react';

const initialValue = {
    post: {},
    error: '',
    isLoading: true
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SUCCESS":
            return { ...state, post: action.data, isLoading: false };
        case "FAILED":
            return { ...state, post: {}, isLoading: false, error: 'an error throwed !' }
        default:
            throw new Error();
    }
}

const Post = (props) => {
    const [state, dispatch] = useReducer(reducer, initialValue);

    const handleBackUserClick = () => {
        props.history.push('/');
    }

    useEffect(() => {
        console.log(props);
        axios.get(`https://jsonplaceholder.typicode.com/posts/${props.match.params.id}`)
            .then((response) => dispatch({type: "SUCCESS", data: response.data}))
            .catch((error) => dispatch({type: "FAILED"}));
    }, []);

    const data = (
        <div>
            <h4>{state.post.id}</h4>
            <h3>{state.post.title}</h3>
            <p>{state.post.body}</p>
        </div>
    )

    return (
        <div>
            {state.isLoading ? "Loading..." : data}
            {state.error && state.error}
            <br />
            <button onClick={handleBackUserClick}>Back</button>
        </div>
    );
};

export default Post;