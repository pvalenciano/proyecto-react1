import React, { Component } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

class Navigation extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired
    };
    constructor() {
        super();

    }


    render() {
        // const titles = [

        //     { title: 'Home', rout: 'jeje' },
        //     { title: 'Login', rout: 'jeje' },


        // ]
        // const listTitles = titles.map((t) =>
        //     <a className="text-white">{t.title}</a>)
        const { title, items } = this.props;
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
            <nav className="navbar navbar-expand-lg" >
                <div className="app-name">
                    <h1 >{this.props.title}</h1>
                </div>
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        {
                            items && items.map(
                                (item, key) =>
                                    <li key={key}>
                                        <Link to={item.url}>{item.title}</Link>
                                    </li>
                            )
                        }
                    </ul>
                </div>
            </nav>
        );
    }

}
export default Navigation;
