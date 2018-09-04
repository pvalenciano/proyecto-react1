import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
import NoteForm from './NoteForm';
import '../../styles/Notes.css';
import firebase from '../../config/firebase';
import 'firebase/database';

class Notes extends Component {
    constructor(props) {
        super(props);

        this.addNote = this.addNote.bind(this);
        this.removeNote = this.removeNote.bind(this);
        this.borrar = false;
        this.datab = firebase.database();
        this.database = this.datab.ref().child('notes');

        this.state = {
            notes: [
                // { id: 1, noteContent: 'Note 1' },
                // { id: 2, noteContent: 'Note2' }
            ],
        }
        // {classSuccess: "alert alert-success", strong: "bien"},
        //     {classDanger: "alert alert-danger", strong: "mal"}
        // this.booleanAlert = {
        //     deleteBool: false,
        //     noDeleteBool: true
        // }
        this.decision = false;
        this.classes = {
            classDanger: {
                classN: "alert alert-danger",
                strong: "Borrar, ",
                info: "¿Seguro que quieres borrar?",
                deleteBool: false,
            }

        }
    }
    componentWillMount() {
        const previousNotes = this.state.notes;

        this.database.on('child_added', snap => {
            previousNotes.push({
                id: snap.key,
                noteContent: snap.val().noteContent,

            })

            this.setState({
                notes: previousNotes
            })
        })
        this.database.on('child_removed', snap => {
            for (let i = 0; i < previousNotes.length; i++) {
                //si es igual al valor del elemento de la base de datos
                if (previousNotes[i].id === snap.key) {
                    //splice borra 1 elementod el array
                    previousNotes.splice(i, 1);

                }

            }
            this.setState({
                notes: previousNotes
            })
        })
    }

    // addNote(note) {
    //     const previousNotes = this.state.notes;
    //     previousNotes.push({ id: previousNotes.length + 1, noteContent: note });
    //     this.setState({
    //         notes: previousNotes
    //     })
    // }

    //firebase
    addNote(note) {
        this.database.push().set({
            noteContent: note
        });
    }
    yesButtonClicked() {
        this.decision = true;

    }
    noButtonClicked() {
        this.decision = false;

    }
    removeNote(noteId) {
        console.log("from the parent: " + noteId);
        this.database.child(noteId).remove();
    }

    render() {
        return (
            <div className="Notes" >

                
                <div className="notesBody">

                    {this.state.notes.map((note) => {
                        return (
                            <Note noteContent={note.noteContent}
                                noteId={note.id}
                                key={note.id}
                                removeNote={this.removeNote}></Note>

                        )

                    })}
                </div>


                <div className="notesFooter">
                    <NoteForm addNote={this.addNote}></NoteForm>
                </div>
            </div>
        )
    }
}

export default Notes;