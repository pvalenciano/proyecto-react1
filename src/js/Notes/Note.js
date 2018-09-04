import React, { Component } from 'react';
import '../../styles/Note.css';
import PropTypes from 'prop-types';

class Note extends Component {
    constructor(props) {
        super(props);

        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
        this.handleRemoveNote = this.handleRemoveNote.bind(this);
    }
    handleRemoveNote(id) {
        this.props.removeNote(id);
        // if(){

        // }
    }
    render() {
        return (
            <div className="note fade-in">

                <button className="btn closeBtn"
                    onClick={() => this.handleRemoveNote(this.noteId)}>
                    &times;</button>
                <div className="note-container">
                    <p className="noteContent">{this.noteContent}  </p>

                </div>

            </div>
        )
    }
}
Note.propTypes = {
    noteContent: PropTypes.string
}
export default Note;