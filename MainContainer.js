import React, { Component } from 'react';
import Main from './Main.js';

const _items_ = [
  { id: 1, content: "Make my life better", checked: false, position: 2 },
  { id: 2, content: "Monday",              checked: true,  position: 3 },
  { id: 3, content: "Make a cake",         checked: true,  position: 1 },
  { id: 4, content: "Tuesday",             checked: false, position: 4 },
];

class MainContainer extends Component {
  constructor() {
    super();
    this.state = { items: [] };
  }

  componentDidMount() {
    this.setState({ items: _items_ });
  }

  addItem(content) {
    let item = {
      id: Date.now(),
      content: content,
      checked: false,
      position: this.state.items.length + 1
    };
    this.setState({ items: this.state.items.concat([item]) });
  }

  deleteItem(itemId) {
    let items = this.state.items.slice();
    let index = items.findIndex((i) => i.id == itemId);
    items.splice(index, 1)
    this.setState({ items: items });
  }

  checkItem(itemId, checked) {
    let items = this.state.items.slice();
    let index = items.findIndex((i) => i.id == itemId);
    items[index].checked = checked;
    this.setState({ items: items });
  }

  editItem(itemId, content) {
    let items = this.state.items.slice();
    let index = items.findIndex((i) => i.id == itemId);
    let item  = items[index]
    if (content == item.content) return;
    item.content = content;
    this.setState({ items: items });
  }

  render() {
    return <Main items={this.state.items}
                 addItem={this.addItem.bind(this)}
                 deleteItem={this.deleteItem.bind(this)}
                 checkItem={this.checkItem.bind(this)}
                 editItem={this.editItem.bind(this)} />
  }
}

export default MainContainer;
