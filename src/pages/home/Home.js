import React, { Component } from 'react';
import './Home.css';
import logo from '../../logo.svg';
import Navigation from '../../components/navigation/Navigation';

import { todos } from '../../todos.json';
import Content from '../../pages/content/Content'
import { PropTypes } from 'prop-types';
import items from '../../data/menu';
//firebase
import firebase from '../../config/firebase';
import TaskPage from '../../pages/task-page/TaskPage';
import AppRoutes from '../../routes';

class Home extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired,

    };
    constructor(props) {
        super(props);
        this.state = {
            todos,
        };
    }
    render() {
        const { children } = this.props;
        const taskCount = this.state.todos.length

        return (
            <div className="Home">
                <Navigation title="Tasks app" items={items} taskCount={taskCount} ></Navigation>
                <img src={logo} className="App-logo" alt="logo" />

                {/* <Content body={children}></Content> */}

                <p>Home!</p>
            </div>
        )
    }

}
export default Home;
