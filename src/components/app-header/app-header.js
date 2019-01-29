import React from 'react';
import './app-header.css';

const AppHeader = ({ toDo, done }) => {
    return <div>
        <h1 className="head">TodoList</h1>
        <div className="after-head">
            <span >{toDo} more to do, {done} done</span>
        </div>
    </div>

};
export default AppHeader;