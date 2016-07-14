import React, { Component } from 'react';

class Notebar extends Component {
  handleClick(event) {
    let content = this.refs.takeNote.value;
    this.refs.takeNote.value = "";
    if (!content) return;
    this.props.addItem(content);
  }

  render() {
    return (
      <div id="notebar">
        <input type="text" placeholder="Take a note..." ref="takeNote" />
        <input type="button" value="&#43;"
               onClick={this.handleClick.bind(this)} />
      </div>
    );
  }
}

export default Notebar;
