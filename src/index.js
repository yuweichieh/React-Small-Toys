// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create React Component
const App = () => { // () => equals to function()
    return (
        <div>
            <label class = "label" for = "name">Enter Name: </label>
            <input id = "name" type = "text"></input>
            <button style = {{backgroundColor: 'blue', color: 'white'}}>Submit</button>
        </div>
    );
};

// Take the React Component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root') // the tag in index.html with id = root
);