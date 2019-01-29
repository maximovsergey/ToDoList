import React from 'react';
import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component {

    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' },
    ];
    state = {
        activeBtnClassName: "btn btn-info",
        passiveBtnClassName: "btn btn-outline-info",
        isActive: true,
    }
    render() {
        console.log('//////////  this.props ', this.props);
        const { filter, onFilterChange } = this.props;
        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = filter === name;
            return <button key={name}
                type="button"
                className={isActive ? "btn btn-info" : "btn btn-outline-info"}
                onClick={() => {
                    onFilterChange(name);
                }}
            >{label}</button>
        })
        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                {buttons}
            </div>
        );
    };
}