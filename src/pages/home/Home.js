import React, { Component } from 'react';
import './Home.css';
import logo from '../../logo.svg';

class Home extends Component {

    render() {

        return (
            <div className="Home">
                <img src={logo} className="App-logo" alt="logo" />

                <p>Home!</p>
            </div>
        )
    }

}
export default Home;
