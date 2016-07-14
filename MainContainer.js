import React, { Component } from 'react';
import Main from './Main.js';

const _items_ = [
  { content: "Make my life better", checked: false },
  { content: "Monday", checked: true },
  { content: "Make a cake", checked: true },
  { content: "Tuesday", checked: false },
  { content: "Train", checked: true },
  { content: "Cake", checked: false },
  { content: "Vlad", checked: true },
  { content: "Vladimir", checked: false },
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
    let item = { content: content, checked: false };
    this.setState({ items: this.state.items.concat([item]) });
  }

  deleteItem(item, index) {
    let items = this.state.items.slice();
    items.splice(index, 1)
    this.setState({ items: items });
  }

  checkItem(index, checked) {
    let items = this.state.items.slice();
    items[index].checked = checked;
    this.setState({ items: items });
  }

  editItem(index, content) {
    let items = this.state.items.slice();
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
