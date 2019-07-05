import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function Person(props) {
    return (
        <div className="person">
            <h1>{props.name}</h1>
            <p>{props.age}</p>
        </div>
    );
}

var app = (
    <div>
        <Person name="Lauda" age="29"/>
        <Person name="Jay" age="23"/>
    </div>
);

ReactDOM.render(app, document.querySelector('#app'));
//ReactDOM.render(<Person name="Jay" age="23"/>, document.querySelector('#p1'));
