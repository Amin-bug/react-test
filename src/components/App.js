import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Post from './Post';
import Posts from './Posts';


const App = () => {
    return (
        <React.StrictMode>
            <Switch>
                <Route path="/post/:id" component={Post}/>
                <Route path="/" component={Posts}/>
            </Switch>
        </React.StrictMode>
    )
};

export default App;