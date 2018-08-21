import React, { Component } from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            pririty: 'low'
        };
        //handlerinput pertenece a este componente
        this.handlerInput = this.handlerInput.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);

    }
    handlerInput(e) {
        //para saber que se esta escribiendo y en que input
        // console.log(e.target.value, e.target.name);
        const { value, name } = e.target;
        //cambiar los datos

        this.setState({
            [name]: value
        })
        console.log(this.state);

    }
    handlerSubmit(e){
        //evita que se refresque
        e.preventDefault();
        console.log("enviando...");
        this.props.onAddTodo(this.state);

    }
    render() {
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handlerSubmit}>
                    <div className="form-group" >
                        <input type="text" name="title" onChange={this.handlerInput} className="form-control" placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="resposible" onChange={this.handlerInput} className="form-control" placeholder="Responsible" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="description" onChange={this.handlerInput} className="form-control" placeholder="Description" />
                    </div>
                    <div className="form-group">
                    <select name="priority" className="form-control" onChange={this.handlerInput} >
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>

                    </select >
                    </div>

                    <button type="submit" className="btn btn-primary" >Save</button>
                </form>
            </div>
        )
    }

}
export default TodoForm;
