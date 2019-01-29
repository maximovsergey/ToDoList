import React from 'react';
import './add-item.css';

export default class AddItem extends React.Component {
    state = {
        disabledButton: false,
        label: '',
    }
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value,
            disabledButton: e.target.value.length > 0,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddData(this.state.label);
        this.setState({ label: '' });
    }

    render() {
        return (
            <form className="input-row"
                onSubmit={this.onSubmit}>
                <input
                    value={this.state.label}
                    onChange={this.onLabelChange}
                    className="form-control-addItem"
                    placeholder="Наименование задачи"></input>
                <button
                    onClick={(e) => {
                        if (this.state.label.length > 0) {
                            this.onSubmit(e);
                            document.getElementsByClassName('form-control-addItem')[0].focus();
                        }
                    }}

                    type="button"
                    className={this.state.disabledButton ? "btn btn-outline-info" : "btn btn-outline-disabled"}>Add</button>
            </form>
        );
    };
}