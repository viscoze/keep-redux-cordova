import React, { Component } from 'react';
import Navbar from './Navbar.js';
import Notebar from './Notebar.js';
import ToDo from './ToDo.js';

class Main extends Component {
  constructor() {
    super();

    this.state = { filterText: "" }
  }

  handleSearch(event) {
    this.setState({ filterText: event.target.value });
  }

  render() {
    let filterText    = this.state.filterText;
    let handleSearch  = this.handleSearch.bind(this);
    let filteredItems = this.props.items.filter(
      (item) => {
        let content    = item.content.toLowerCase();
        let filterText = this.state.filterText.toLowerCase();
        return content.indexOf(filterText) !== -1
      }
    );

    filteredItems.sort((a,b) => a.position - b.position);
    filteredItems.sort((a,b) => a.checked  > b.checked);

    return (
      <div id="main">
        <Navbar filterText={filterText} handleSearch={handleSearch} />
        <ToDo items={filteredItems} deleteItem={this.props.deleteItem}
                                    checkItem={this.props.checkItem}
                                    editItem={this.props.editItem} />
        <Notebar addItem={this.props.addItem} />
      </div>
    );
  }
}

export default Main;
