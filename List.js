import React, { Component } from 'react';

import Item from './Item.js'

class List extends Component {
  render() {
    return (
      <div id="todo">
        {
          this.props.items.map(
            (item, index) => <Item key={item.content}
                                   id={item.id}
                                   content={item.content}
                                   checked={item.checked}
                                   deleteItem={this.props.deleteItem.bind(null, item.id)}
                                   checkItem={this.props.checkItem.bind(null, item.id)}
                                   editItem={this.props.editItem.bind(null, item.id)} />
          )
        }
      </div>
    );
  }
}

export default List;
