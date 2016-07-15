import React, { Component } from 'react';
import CheckedItem from './CheckedItem.js'

class CheckedList extends Component {
  render() {
    return (
      <div id={ !!this.props.items.length ? "checked-list" : ""}>
        {
          this.props.items.map(
            (item, index) => <CheckedItem key={item.content}
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

export default CheckedList;
