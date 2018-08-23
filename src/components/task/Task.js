import React, { Component } from 'react';
import './Task.css';
class Task extends Component {


    render() {
        return (
            <div className="col-md-4" >
                <div className="card mt-4">
                    <div className="card-header">
                        <button onClick={this.props.onDeleteTodo}>
                            <i className="fas fa-times"></i>
                        </button>
                        <h3>{this.props.todoTitle}</h3>

                        <span className="badge badge-pill badge-danger ml-2">
                            {this.props.todoPriority}
                        </span>
                    </div>
                    <div className="card-body">
                        <p>{this.props.todoDescription}</p>
                        <p><mark>{this.props.responsible}</mark></p>
                    </div>

                </div>
            </div>

        )
    }

}
export default Task;
