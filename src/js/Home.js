import React, { Component } from 'react';
import '../styles/Home.css';
import logo from '../logo.svg';



class Home extends Component {


    render() {


        return (

            <div className="Home">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="container">
                    <div className="content">
                        <h2 >Home!</h2>
                    </div>
                </div>
            </div>
        )
    }

}
export default Home;
