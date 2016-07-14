import React, { Component } from 'react';
import Item from './Item.js'

class ToDo extends Component {
  render() {
    return (
      <div id="todo">
        {
          this.props.items.map(
            (item, index) => <Item key={item.content+index}
                                   content={item.content}
                                   checked={item.checked}
                                   deleteItem={this.props.deleteItem.bind(null, item, index)}
                                   checkItem={this.props.checkItem.bind(null, index)}
                                   editItem={this.props.editItem.bind(null, index)} />
          )
        }
      </div>
    );
  }
}

export default ToDo;
