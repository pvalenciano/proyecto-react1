import React, { Component } from 'react';
import './App.css';

import Navigation from './components/navigation/Navigation';

import { todos } from './todos.json';
import Content from './pages/content/Content';
import { PropTypes } from 'prop-types';
import items from './data/menu';
//firebase
import firebase from './config/firebase';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import TaskPage from './pages/task-page/TaskPage';

class App extends Component {

  // static propTypes = {
  //   children: PropTypes.object.isRequired,

  // };
  static propTypes = {
    children: PropTypes.object.isRequired,

  };
  constructor(props) {
    super(props);
    this.state = {
      // todos,
      user: {}
    };

  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({
          user
        });
        localStorage.setItem('user', user.uid);

      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render() {

    // const { children } = this.props;
    // const taskCount = this.state.todos.length


    return (
      <div className="App">


        {/* ?=true */}
        {this.state.user ? (<Home body={body}></Home>) : (<Login />)}

      </div>

    );

  }




}

export default App;
