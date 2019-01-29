import React from 'react';
import './todo-list-item.css';

export default class TodoListItem extends React.Component {

    render() {
        const { label, onDeleted, onToggleImportant, onToggleDone, done, important } = this.props;
        const style = {
            color: important ? 'tomato' : 'black',
            fontWeight: important ? 'bold' : 'normal',
            textDecorationLine: done ? 'line-through' : 'none',
        };
        return (
            <div className="todo-list-item">
                <span
                    onClick={onToggleDone}
                    className="span-text"
                    style={style}>{label}</span>
                <button
                    onClick={onDeleted}
                    className="btn btn-light trash-icon"
                    type="button">
                    <i className="fas fa-trash-alt"></i>
                </button>
                <button
                    onClick={onToggleImportant}
                    className="btn btn-light exclamation-icon"
                    type="button">
                    <i className="fas fa-exclamation-circle"></i>
                </button>
            </div>
        );
    };
}