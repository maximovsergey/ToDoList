import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';

const TodoList = ({ data, onDeleteData, onToggleImportant, onToggleDone }) => {
    const elements = data.map((item) => {
        const { id, ...itemProps } = item;
        // в itemProps лежат все свойства кроме указанныж ранее (все кроме id)
        // то есть мы разделили объект на 2 объекта
        return (
            // <li key={index}><TodoListItem
            //     label={item.label}
            //     important={item.important}
            // /></li>
            <li key={item.id} className="list-group-item">
                <TodoListItem {...itemProps}
                    onDeleted={() => onDeleteData(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleDone={() => onToggleDone(id)}
                />
            </li>
        );
    });
    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};
export default TodoList;