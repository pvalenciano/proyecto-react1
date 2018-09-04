import React, { Component } from 'react';
import './App.css';
import { todos } from './todos.json';
import Content from './js/Content';
import { PropTypes } from 'prop-types';
import items from './data/menu';
//firebase
import firebase from './config/firebase';
import Login from './js/User/Login';
import Home from './js/Home';
import Facebook from './config/Facebook';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
      todos,
      user: {},
      userData: {
        email: '',
        name: '',
        photo: ''
      }
    };

  }


  screenOperations() {
    if (this.state.showLogin) {
      this.setState({
        showLogin: false,
        showRegister: true
      })
    } else {
      alert("Sure?");
      this.setState({
        showLogin: true,
        showRegister: false
      })
    }

  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({
          user,
          isLoggedIn: true
        });
        localStorage.setItem('user', user.uid);
        // console.log("user name: ", user.displayName);
        // console.log("user email: ", user.email);

      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render() {

    const { children } = this.props;
    const { todos } = this.state;
    const taskCount = this.state.todos.length;

    if (this.state.isLoggedIn) {
      this.state.userData = {
        email: this.state.user.email,
        name: this.state.user.displayName,
        photo: this.state.user.photoURL
      }
    }


    // const userEmail = this.state.user.email ;
    // const userName = this.state.user.displayName;
    return (

      <div className="App">
        {this.state.isLoggedIn ?
          (<Content userData={this.state.userData} body={children} tasks={taskCount}></Content>) : (<Login></Login>)}
      </div>

    );

  }




}

export default App;
