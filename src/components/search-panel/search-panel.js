import React from 'react';
// import ItemStatusFilter from '../item-status-filter/item-status-filter';
import './search-panel.css';

export default class SearchPanel extends React.Component {
    state = {
        term: '',
    };

    onSearch = (e) => {
        const term = e.target.value;
        this.setState({ term: term })
        this.props.onSearch(term);
    }

    render() {
        return (
            <div className="search-panel" >
                <div className="input">
                    <input
                        value={this.state.term}
                        type="text"
                        className="form-control"
                        placeholder="Поиск"
                        autoFocus={true}
                        onChange={this.onSearch}
                    ></input>
                </div>
                {/* <ItemStatusFilter /> */}
            </div>
        )
    }
}