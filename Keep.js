import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Notebar from './Notebar.js';
import List from './List.js';
import CheckedList from './CheckedList.js';

class Keep extends Component {
  constructor() {
    super();

    this.state = { filterText: "" }
  }

  handleSearch(event) {
    this.setState({ filterText: event.target.value });
  }

  render() {
    let filterText    = this.state.filterText;
    let onSortEnd     = !!filterText ? null : this.props.updateItemPosition;
    let handleSearch  = this.handleSearch.bind(this);
    let filteredItems = this.props.items.filter(
      (item) => {
        let content    = item.content.toLowerCase();
        let filterText = this.state.filterText.toLowerCase();
        return content.indexOf(filterText) !== -1
      }
    );

    let checkedList   = filteredItems.filter((item) => item.checked);
    let uncheckedList = filteredItems.filter((item) => !item.checked);

    return (
      <div id="main">
        <Navbar filterText={filterText} handleSearch={handleSearch} />
        <List items={uncheckedList} deleteItem={this.props.deleteItem}
                                    checkItem={this.props.checkItem}
                                    editItem={this.props.editItem}
                                    onSortEnd={onSortEnd} />
        <CheckedList items={checkedList}   deleteItem={this.props.deleteItem}
                                    checkItem={this.props.checkItem}
                                    editItem={this.props.editItem} />
        <Notebar addItem={this.props.addItem} />
      </div>
    );
  }
}

export default Keep;
