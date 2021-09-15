// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

// Create React Component
const App = () => { // () => equals to function()
    return (
        <div className = "ui container comments">
            <CommentDetail />
        </div>
    );
};

// Take the React Component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root') // the tag in index.html with id = root
);