import React, { Component } from 'react';
import '../../styles/Perfil.css';
import firebase from '../../config/firebase';


class Perfil extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            surnames: '',
            photo: '',
            email: '',
            address: '',
            disabledOn: true,
            showButtons: false,
            showEdit: true
            // password: '',
            // passrepeat: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        //observable
        this.setState({
            [e.target.name]: e.target.value
        });


    }
    componentDidMount() {
        this.authListener();
    }
    authListener() {

        var user = firebase.auth().currentUser;
        if (user) {
            this.setState({
                name: user.displayName,
                surnames: 'ejemplo apellidos',
                photo: user.photoURL,
                email: user.email,
                address: '',
                emailVerified: user.emailVerified,
                uid: user.uid
            });
        }

    }
    updateUserProfile(e) {
        console.log("si");
        e.preventDefault();
        var user = firebase.auth().currentUser;

        console.log("user: ", user);


        user.updateProfile({
            // displayName:" e.target.value",
            email: 'ojete@gmail.com',
            // photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(function () {
            // Update successful.
            console.log('ole', user.email);
        }).catch(function (error) {
            // An error happened.
            console.error(error);
        });
    }
    enableForm() {
        if (!this.state.showButtons) {
            this.setState({
                disabledOn: false,
                showButtons: true,
                showEdit: false
            })
        } else {
            this.setState({
                disabledOn: true,
                showButtons: false,
                showEdit: true
            })
        }

    }

    render() {
        return (
            <div className="Perfil">

                <div className="user-content">

                    <div className="img-container">
                        <img src={this.state.photo} className="img-perfil" />
                        <h2>Nombre usuario</h2>
                        {/* <img src={this.props.userData.photoURL} alt={this.props.userData.photo} className="rounded-circle"/> */}
                    </div>
                    <form className="form-container" onSubmit={this.updateUserProfile}>
                        <div className="form-group">
                            {/* <input disabled={this.state.disabledOn} value={this.state.name} onChange={this.handleChange} type="text" name="name" className="form-control" id="inputName" placeholder="Name" /> */}
                        </div>
                        <div className="form-group">
                            <input disabled={this.state.disabledOn} value={this.state.surnames} onChange={this.handleChange} type="text" name="surnames" className="form-control" id="inputSurnames" placeholder="Surnames" />
                        </div>
                        <div className="form-group">
                            <input disabled={this.state.disabledOn} value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input disabled={this.state.disabledOn} value={this.state.address} onChange={this.handleChange} type="text" name="address" className="form-control" id="inputAddress" placeholder="Address" />
                        </div>


                        <div className="buttons-container">
                            {this.state.showEdit ?
                                <div className="edit-button">
                                    <button onClick={() => this.enableForm()} className="btn btn-edit">Edit</button>
                                </div>
                                : null
                            }
                            {this.state.showButtons ?

                                <div className="savecancel-button">
                                    <button onClick={this.updateUserProfile} className="btn btn-save">
                                        Save
                                </button>
                                    <button onClick={() => this.enableForm()} className="btn btn-cancel">
                                        Cancel
                                </button>
                                </div>
                                : null
                            }
                        </div>
                    </form>


                </div>
            </div>
        )
    }
}
export default Perfil;
