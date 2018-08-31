import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/NoteForm.css';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newNoteContent: ''
        };
        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);

    }
    handleUserInput(e) {
        console.log(this)
        this.setState({
            newNoteContent: e.target.value
        })
    }
    writeNote() {
        this.props.addNote(this.state.newNoteContent);
        this.setState({
            newNoteContent:'',
        })
    }
    render() {
        return (
            <div className="formWrapper">

                <input value={this.state.newNoteContent} onChange={this.handleUserInput} className="noteInput" placeholder="Write a new note.." />
                <button onClick={this.writeNote} className="noteButton "><i className="far fa-plus-square"></i></button>


            </div>

        )
    }
}

export default NoteForm;