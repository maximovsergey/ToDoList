import React from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import AddItem from '../add-item/add-item';
import './app.css';
import ItemStatusFilter from '../item-status-filter/item-status-filter';

class App extends React.Component {
    maxId = 100;
    state = {
        term: '',
        filter: 'all', // All, Active, Done
        data: [
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Study React'),
            this.createTodoItem('Drink tea'),
            this.createTodoItem('Drink beer'),
        ],
    };

    createTodoItem(label) {
        // const maxId = this.state.data ? this.state.data.reduce((prev, cur) => {
        //     return cur.id > prev.id ? cur : prev;
        // }).id : 1;
        return { label, important: false, done: false, id: this.maxId++ }
    }

    // onFilter = (s) => {

    //     const filterData = this.state.data.filter((el) => {
    //         return el.label.toLowerCase().indexOf(s) > -1 ? el : null;
    //     });
    //     this.setState({ data: filterData });
    // }

    deleteItem = (id) => {

        this.setState(({ data }) => {
            const index = data.findIndex((el) => el.id === id);
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newData = [...before, ...after]
            return { data: newData };
        });
    };

    addItem = (s) => {
        this.setState(({ data }) => {
            const newItem = this.createTodoItem(s);
            const newArr = [...data, newItem];
            // data.push(newItem);
            return { data: newArr };
        })

    };

    toggleProperty(data, id, propName) {
        const index = data.findIndex((el) => el.id === id);
        const oldItem = data[index];
        // создаем константу в которой все тоже самое что и у oldItem
        // только меняем значение в поле done
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };
        const before = data.slice(0, index);
        const after = data.slice(index + 1);
        const newData = [...before, newItem, ...after];
        return newData;
    }

    onToggleImportant = (id) => {
        this.setState(({ data }) => {
            return { data: this.toggleProperty(data, id, 'important') };
        });
    };
    onToggleDone = (id) => {
        this.setState(({ data }) => {
            return { data: this.toggleProperty(data, id, 'done') };
        });
    };
    onSearchChange = (term) => {
        this.setState({ term })
    };

    onFilterChange = (filter) => {
        this.setState({ filter });
    }

    onSearch(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((elem) => {
            return elem.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }
    onFilter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((elem) => !elem.done);
            case 'done':
                return items.filter((elem) => elem.done);
            default:
                return items;
        }
    };



    render() {
        const { data, term, filter } = this.state;

        const visibleItems = this.onFilter(this.onSearch(data, term), filter);
        const doneCount = data.filter((el) => el.done).length;
        const todoCount = data.length - doneCount;
        return (
            <div>
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="panelSearch">
                    <SearchPanel
                        onSearch={this.onSearchChange}
                        onFilter={this.onFilterChange}
                    />
                    <ItemStatusFilter
                        filter={filter}
                        onFilterChange={this.onFilterChange} />
                </div>
                <TodoList
                    data={visibleItems}
                    onDeleteData={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <AddItem
                    onAddData={(s) => this.addItem(s)}
                />
            </div>
        )
    }
}
export default App;