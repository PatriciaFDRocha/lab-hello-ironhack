import React from 'react';
import Declarative from './components/Declarative';
import Components from './components/Components';
import SingleWay from './components/Single-way';
import JSX from './components/JSX';

import './app.css';

function App() {
    return(
        <div className="main-app">
            <div className="comp1">
            <img src="/public/images/react-logo.svg" />
                {/* <header>
                    <div>  </div>
                </header> */}
                <h1>       
                    Say hello to
                    ReactJS
                </h1>
                <p>
                    You will learn how to use
                    the most popular frontend library,
                    and become a super Ninja developer
                </p>
                <div className="awesome" > Awesome! </div>
            </div>
            <div class="comp2">
                <Declarative />
                <Components />
                <SingleWay />
                <JSX />
            </div>
        </div>
    )
        
        
}

export default App;