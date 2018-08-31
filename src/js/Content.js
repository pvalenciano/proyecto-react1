import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import '../styles/Content.css';
import items from '../data/menu';
import Navigation from './Navigation';
import firebase from '../config/firebase';
import Perfil from '../js/Perfil';
import 'firebase/database';
class Content extends Component {


    static propTypes = {
        body: PropTypes.object.isRequired
    };
    constructor(props){
        super(props);
        this.datab = firebase.database();
        this.database = this.datab.ref().child('notes');
    }
    logout() {
        alert("Saliendo...");
        firebase.auth().signOut();
    }
  
    render() {
        const { body } = this.props;
        const { tasks } = this.props;
        const {x} = this.props.userData;

        console.log('body: ', body);
        console.log('x: ', x);

        return (

            <div className="content">
                <Navigation userData={this.props.userData} title="Tasks app" logoutbtn={this.logout} items={items} taskCount={tasks}></Navigation>
                {body}
               
            </div>

        )
    }


}
export default Content;
