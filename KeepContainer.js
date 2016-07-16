import React, { Component } from 'react';
import { arrayMove } from 'react-sortable-hoc';
import Keep from './Keep.js';

const _items_ = [
  { id: 1, content: "Make my life better", checked: false, position: 1 },
  { id: 2, content: "Monday",              checked: true,  position: null },
  { id: 3, content: "Make a cake",         checked: true,  position: null },
  { id: 4, content: "Tuesday",             checked: false, position: 2 },
];

class KeepContainer extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    let items = _items_;
    this.setState({ items: items });
  }

  addItem(content) {
    let item = {
      id: Date.now(),
      content: content,
      checked: false,
      position: this.state.items.filter(x => !x.checked).length + 1
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
    let item  = items[index];

    item.checked  = checked;
    item.position = checked ? null : items.filter(i => !i.checked).length;

    let uncheckedList = items.filter((i) => !i.checked && i.content !== item.content);
    let checkedList = items.filter((i) => i.checked && i.content !== item.content);
    let newItems = uncheckedList.concat([item]).concat(checkedList);

    this.setState({ items: newItems });
    console.log(newItems);
  }

  editItem(itemId, content) {
    let items = this.state.items.slice();
    let index = items.findIndex((i) => i.id == itemId);
    let item  = items[index];
    if (content == item.content) return;
    item.content = content;
    this.setState({ items: items });
  }

  updateItemPosition({oldIndex, newIndex}) {
    let items = this.state.items.slice();

    let checkedList   = items.filter((item) => item.checked);
    let uncheckedList = items.filter((item) => !item.checked);

    let newItems = arrayMove(uncheckedList, oldIndex, newIndex).map(
      (item, index) => Object.assign({}, item, { position: index + 1 })
    );

    this.setState({ items: newItems.concat(checkedList) });
  }

  render() {
    return <Keep items={this.state.items}
                 addItem={this.addItem.bind(this)}
                 deleteItem={this.deleteItem.bind(this)}
                 checkItem={this.checkItem.bind(this)}
                 editItem={this.editItem.bind(this)}
                 updateItemPosition={this.updateItemPosition.bind(this)} />
  }
}

export default KeepContainer;
