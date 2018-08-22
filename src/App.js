import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/navigation/Navigation';
import Task from './components/task/Task';
import TodoForm from './components/form/TodoForm'

import { todos } from './todos.json';
import TaskPage from './pages/task-page/TaskPage';
import Content from './pages/content/Content';
import { PropTypes } from 'prop-types';
import items from './data/menu';
//firebase
import firebase from './config/firebase';
class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,

  };

  constructor(props) {
    super(props);
    this.state = {
      todos,
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

    const { children } = this.props;
    const taskCount = this.state.todos.length


    return (
      <div className="App">
        {}
        <Navigation title="Tasks app" items={items} taskCount={taskCount} ></Navigation>
        <Content body={children}></Content>
      </div>

    );

  }




}

export default App;
