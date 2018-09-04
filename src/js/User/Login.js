import React, { Component } from 'react';
import '../../styles/Login.css';
import firebase from '../../config/firebase';
// import Facebook from '../../config/Facebook';
class Login extends Component {

    constructor(props) {
        super(props);
        this.onLoginClicked = this.onLoginClicked.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onCreateUser = this.onCreateUser.bind(this);
        this.datab = firebase.database();
        this.state = {
            showLogin: true,
            showRegister: false,
            email: '',
            password: '',
            passrepeat: ''
        };

    }

    componentWillMount() {
        firebase.database().ref('users/001').set({
            name: "ejemplo1",
            age: 21
        }).then(() => {
            console.log('inserted!');
        }).catch((error) => {
            console.error(error);
        });

        firebase.database().ref('users').once('value', (data)=>{
            console.log(data.toJSON());
        })
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
        const providerFace = new firebase.auth.FacebookAuthProvider()
        firebase.auth().signInWithPopup(providerFace).then(result => console.log("inicio facebook"))
            .catch(error => console.error(error));
    }
    loginWithTwitter() {
        console.log("Twitter");
        const providerTwit = new firebase.auth.TwitterAuthProvider()
        firebase.auth().signInWithPopup(providerTwit).then(result => console.log("inicio twitter"))
            .catch(error => console.error(error));

    }
    loginWithGoogle() {
        console.log("Google");
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider).then(result => console.log("inicio google"))
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


                                    <form id="login-form" className="form-container " onSubmit={this.onLoginClicked}>
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
                                                {/* <Facebook></Facebook> */}
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
                                <form className="form-container " onSubmit={this.onCreateUser}>
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
