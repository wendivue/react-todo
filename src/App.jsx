import React from 'react';
import PropTypes from 'prop-types';

import Header from './Components/Header';
import Todo from './Components/Todo';
import Form from './Components/Form';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.initialDate
        }

        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    nextId() {
        this._nextId = this._nextId || 4;
        return this._nextId++;
    }

    handleStatusChange(id) {
        let todos = this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        });

        this.setState({ todos });
    }

    handleAdd(title) {
        let todo = {
            id: this.nextId(),
            title,
            completed: false
        }

        let todos = [...this.state.todos, todo];

        this.setState({ todos });
    }

    handleEdit(id, title) {
        let todos = this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.title = title;
            }

            return todo;
        });

        this.setState({ todos });
    }

    handleDelete(id) {
        let todos = this.state.todos.filter(todo => todo.id !== id);

        this.setState({ todos });
    }

    render() {
        return(
            <main>
                <Header title={this.props.title} />
            
            <section className="todo-list">
                {this.state.todos.map(todo =>
                    <Todo 
                        key={todo.id} 
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onStatusChange={this.handleStatusChange}
                        onEdit={this.handleEdit}
                        onDelete={this.handleDelete}
                    />)
                }

            </section>

            <Form onAdd={this.handleAdd} />
            </main>
            
        )
    }
}

App.propTypes = {
    title: PropTypes.string
}

App.defaultProps = {
    title: 'React Todo'
};

export default App;