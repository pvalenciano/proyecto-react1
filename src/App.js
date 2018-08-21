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

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,

  };

  constructor() {
    super();
    this.state = {
      todos
    };

  }
  render() {
    const { children } = this.props;
    console.log("children: "+children);
    const taskCount = this.state.todos.length
    return (
      <div className="App">
        <Navigation title="Codejobs" items={items} taskCount={taskCount} ></Navigation>
        <Content body={children}></Content>
       
      </div>

    );

  }



}

export default App;
