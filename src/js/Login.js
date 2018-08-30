import React, { Component } from 'react';
import '../styles/Login.css';
import firebase from '../config/firebase';
import TaskPage from './TaskPage';

class Login extends Component {

    constructor(props) {
        super(props);
        this.onLoginClicked = this.onLoginClicked.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onCreateUser = this.onCreateUser.bind(this);
        this.state = {
            showLogin: true,
            showRegister: false,
            email: '',
            password: '',
            passrepeat: ''
        };
    }

    screenOperations() {
        if (this.state.showLogin) {
            this.setState({
                showLogin: false,
                showRegister: true,

            })
        } else {
            alert("Sure?");
            this.setState({
                showLogin: true,
                showRegister: false,

            })

        }

    }
    handleChange(e) {
        //observable
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onLoginClicked(e) {
        //evita que se refresque
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error);
        })
    }
    onCreateUser(e) {
        //evita que se refresque
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                console.log(error);
            })
    }
    loginWithFacebook() {
        console.log("Facebook");
        firebase.auth.FacebookAuthProvider();
    }
    loginWithTwitter() {
        console.log("Twitter");

    }
    loginWithGoogle() {
        console.log("Google");
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider).then(result => console.log("inicio"))
        .catch(error => console.error(error));

    }
    render() {

        return (

            <div className="Login">
                <div className="container">
                    <div className="content">
                        {this.state.showLogin ?
                            <div className="screen1">
                                <h3 >LOGIN</h3>
                                <div className="inter-container">


                                    <form className="form-container ">
                                        <div className="form-group">
                                            <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="email" />
                                        </div>
                                        <div className="form-group">
                                            <input value={this.state.pass} onChange={this.handleChange} type="password" name="password" className="form-control" id="inputPassword" placeholder="password" />
                                        </div>
                                        <div className="login">
                                            <button id="btn-login" className="btn" type="submit" onClick={this.onLoginClicked}><i className="fas fa-sign-in-alt"></i></button>
                                        </div>


                                    </form>

                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <button onClick={this.loginWithFacebook} id="btn-facebook" className="btn"><i className="fab fa-facebook-f"></i> Facebook</button>

                                            </div>
                                            <div className="col-sm-4">
                                                <button onClick={this.loginWithTwitter} id="btn-twitter" className="btn"><i className="fab fa-twitter"></i> Twitter</button>

                                            </div>
                                            <div className="col-sm-4">
                                                <button onClick={this.loginWithGoogle} id="btn-google" className="btn"><i className="fab fa-google"></i> Google</button>
                                            </div>

                                        </div>
                                    </div>



                                    <div className="btns-acount">
                                        <a onClick={() => this.screenOperations()}>Don't have an acount?</a>

                                    </div>

                                </div>
                            </div>
                            : null
                        }
                        {this.state.showRegister ?
                            <div className="screen2">
                                <h3>REGISTER</h3>
                                <form className="form-container ">
                                    <div className="form-group">
                                        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="email" />
                                    </div>
                                    <div className="form-group">
                                        <input value={this.state.pass} onChange={this.handleChange} type="password" name="password" className="form-control" id="inputPassword" placeholder="password" />
                                    </div>
                                    <div className="form-group">
                                        <input value={this.state.passrepeat} type="password" name="passwordrepeat" className="form-control" id="inputPasswordRepeat" placeholder="Repeat Password" />
                                    </div>
                                    <div className="login">
                                        <button id="register" className="btn" onClick={this.onCreateUser}><i className="fas fa-check-circle"></i></button>
                                    </div>


                                </form>
                                <div className="btns-acount">
                                    <a onClick={() => this.screenOperations()}>I have an acount</a>

                                </div>

                            </div>
                            : null
                        }
                    </div>
                </div>
            </div>
        )
    }




}

export default Login;
