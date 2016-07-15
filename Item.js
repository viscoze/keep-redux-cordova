import React, { Component } from 'react';
import { DragSource, DragTarget } from 'react-dnd';

class Item extends Component {
  constructor() {
    super();

    this.state = { content: "" };
  }

  componentDidMount() {
    this.setState({ content: this.props.content });
  }

  handleDelete(event) {
    event.stopPropagation();
    this.props.deleteItem();
  }

  handleCheck(event) {
    event.stopPropagation();
    let checked = event.target.checked;
    this.props.checkItem(checked);
  }

  handleEdit(event) {
    this.setState({ content: event.target.value });
  }

  handleBlur(event) {
    let content = event.target.value;

    if (!content) {
      this.props.deleteItem();
      return;
    }

    this.props.editItem(content);
  }

  render() {
    return (
      <div className={"item " + (this.props.checked ? "checked" : "")}>
        <input type="checkbox" checked={this.props.checked}
               onChange={this.handleCheck.bind(this)} />
             <input type="text"     value={this.state.content}
               onChange={this.handleEdit.bind(this)}
               onBlur={this.handleBlur.bind(this)} />
        <input type="button"   value="&#215;"
               onClick={this.handleDelete.bind(this)} />
      </div>
    );
  }
}

export default Item;
