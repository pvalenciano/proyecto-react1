import React, { Component } from 'react';
// import logo from '../../';
import logo from '../logo.svg';

import '../styles/TaskPage.css';
import firebase from '../config/firebase';

import Task from './Task';

import TodoForm from './TodoForm';
import { todos } from '../todos.json';
class TaskPage extends Component {


    constructor() {
        //hereda todas las funcionalidades de react
        super();
        //estado de los datos en la app
        this.state = {
            todos
        };


        this.handlerAddTodo = this.handlerAddTodo.bind(this);

    }
    handlerAddTodo(todo) {
        this.setState({
            todos: [...this.state.todos, todo]
        })

    }

    handlerDeleteTodo(index) {
        console.log("index", index);
        //la tarea viene del propio ordenador
        if (window.confirm('Are you sure you want to delete it?')) {
            this.setState({
                todos: this.state.todos.filter((e, i) => {
                    return i !== index
                })
            });
        }


    }
    //como ngOnInit
    render() {

        console.log("tasks");
        const taskCount = this.state.todos.length;

        //recorre los todos y cada evz que recorra la tarea voy a crear una interfaz
        const todos = this.state.todos.map((todo, i) => {

            return (<Task i={i} onDeleteTodo={this.handlerDeleteTodo.bind(this, i)} todoTitle={todo.title} todoPriority={todo.priority}
                todoResponsible={todo.responsible} todoDescription={todo.description}></Task>)
        });



        return (
            <div className="TaskPage">
                <div className="container">
                    <div className="content">

                        <div className="row ">
                            <div className="col-md-3">
                                <img src={logo} className="App-logo" alt="logo" />
                                <TodoForm onAddTodo={this.handlerAddTodo} />
                            </div>
                            <div className="col-md-9">
                                <div className="row">
                                    {todos}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        );

    }



}

export default TaskPage;
