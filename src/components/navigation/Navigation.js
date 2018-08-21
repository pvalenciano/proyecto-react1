import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar">
                <a href="" className="text-white">
                    {this.props.title}
                    <span className="badge badge-pill badge-light ml-2">
                    {this.props.taskCount}
                    </span>
                </a>
                <h1 className="h4">titulo navegacion</h1>
            </nav>
        );
    }

}
export default Navigation;
