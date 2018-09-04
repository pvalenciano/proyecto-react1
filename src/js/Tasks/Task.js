import React, { Component } from 'react';
import '../../styles/Task.css';
class Task extends Component {


    render() {
        return (
            <div className="col-md-4" key={this.props.i}>
                <div className="card mt-4">
                    <div style={this.props.color} className="card-header">
                        <button onClick={this.props.onDeleteTodo}>
                            <i className="fas fa-times"></i>
                        </button>
                        <h2> {this.props.todoTitle}</h2>
                        <span className="badge badge-pill badge-danger ml-2">
                            {this.props.todoPriority}
                        </span>
                    </div>
                    <div className="card-body">
                        <p>{this.props.todoDescription}</p>
                        <p><mark>{this.props.todoResponsible}</mark></p>
                    </div>

                </div>
            </div>

        )
    }

}
export default Task;
