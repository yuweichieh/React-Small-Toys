// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// (Function Base Component)
/*
const App = () => { // () => equals to function()
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position),
        (err) => console.log(err)
    );
    return (
        <div>
            <div className = "ui container comments">
                <ApprovalCard>
                    <CommentDetail 
                        author = "Sam"
                        timeAgo = "Today at 4:21PM"
                        comment = "Haha"
                        image = {faker.image.avatar()} 
                    />
                </ApprovalCard>
            </div>
        </div>
    );
};
*/

// (Class Base Component)
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lat: null };
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude });
            },
            (err) => console.log(err)
        );
    }

    // React requires to define a render function
    render() {
        return <div>Latitude: {this.state.lat}</div>
    }
}

// Take the React Component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root') // the tag in index.html with id = root
);