import React, { Component } from 'react';
import '../styles/Navigation.css';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import firebase from '../config/firebase';

class Navigation extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
    }

    exitApp() {
        console.log("Exit..");
    }

    render() {

        const { title, items } = this.props;
        console.log("eheo: ", this.props.userData);
        // const { }

        return (

            // <nav className = "navbar navbar-expand-lg" >

            //     <div className="container-fluid">
            //         <ul className="navbar-nav">
            //             <li className="nav-item active">
            //                 <a href="" className="text-white">Tasks
            //                 <span className="badge badge-pill badge-light ml-2">{this.props.taskCount}</span>
            //                 </a>
            //             </li>
            //             <li className="nav-item">{listTitles}</li>
            //         </ul>

            //     </div>
            //     <h1 className="h4">React App</h1>

            // </nav >

            <div className="Navigation">
                <nav className="navbar navbar-expand-lg" >
                    <div className="app-name">
                        <h1>{this.props.title}</h1>
                    </div>
                    <div className="container-fluid">

                        <ul id="ulnav" className="navbar-nav">
                            {
                                items && items.map(
                                    (item, key) =>
                                        <li key={key}>
                                            {key == "1" ?
                                                (<p>  <Link to={item.url}>{item.title}</Link>  <span id="badgeTasks" className="badge badge-pill badge-light ml-2">{this.props.taskCount}</span></p>) : <Link to={item.url}>{item.title}</Link>}

                                        </li>
                                )
                            }



                        </ul>
                        <ul id="uldata" className="navbar-nav">
                            <li className="userData">
                                <Link to="/perfil">{this.props.userData.name}</Link>
                            </li>
                            <li>
                                <a href="/" onClick={this.props.logoutbtn}>Exit</a>
                            </li>
                            <li className="img-rounded">
                                <img src={this.props.userData.photo} alt={this.props.userData.photo} className="rounded-circle" />

                            </li>
                        </ul>

                    </div>
                </nav>
            </div>



        );
    }

}
export default Navigation;
