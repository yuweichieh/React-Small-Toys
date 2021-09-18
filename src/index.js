// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Create React Component
const App = () => { // () => equals to function()
    return (
        <div className = "ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author = "Sam"
                    timeAgo = "Today at 4:21PM"
                    comment = "Haha"
                    image = {faker.image.avatar()} 
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author = "Alex"
                    timeAgo = "Today at 2:00AM"
                    comment = "Yeah"
                    image = {faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author = "Jane"
                    timeAgo = "Yesterday at 8:30PM"
                    comment = "I did it!"
                    image = {faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

// Take the React Component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root') // the tag in index.html with id = root
);