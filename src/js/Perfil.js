import React, { Component } from 'react';
import '../styles/Perfil.css';
import logo from '../logo.svg';



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
    }
    handleChange(e) {
        //observable
        this.setState({
            [e.target.name]: e.target.value
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
                <div className="container">
                    <div className="content">
                        <div className="perfilContainer">
                            <div className="img-container">
                                <img className="img-perfil" />
                                <h2>Nombre usuario</h2>
                                {/* <img src={this.props.userData.photoURL} alt={this.props.userData.photo} className="rounded-circle"/> */}
                            </div>
                            <form className="form-container ">
                                <div className="form-group">
                                    <input disabled={this.state.disabledOn} value={this.state.name} onChange={this.handleChange} type="text" name="name" className="form-control" id="inputName" placeholder="Name" />
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
                                {/* <div className="form-group">
                                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="inputPass" placeholder="password" />
                                </div> */}
                                <div className="buttons-container">
                                    {this.state.showEdit ?
                                        <div className="edit-button">
                                            <button onClick={() => this.enableForm()} className="btn btn-edit">Edit</button>
                                        </div>
                                        : null
                                    }
                                    {this.state.showButtons ?

                                        <div className="savecancel-button">
                                            <button onClick={() => this.enableForm()} className="btn btn-save">
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
                </div>
            </div>
        )
    }
}
export default Perfil;
