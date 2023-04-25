import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import '../css/app.css'; // Import the app.css file

function Main() {
    return (
        <div className="main-container">
            <Header />
        </div>
    );
}

export default Main;

ReactDOM.render(<Main />, document.getElementById('root'));
