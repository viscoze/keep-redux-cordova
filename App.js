import React, { Component } from 'react';
import {render} from 'react-dom';
import KeepContainer from './KeepContainer.js';
import './style.scss';

class App extends Component {
  render(){
    return (
      <KeepContainer />
    );
  }
}

render(<App />, document.getElementById('root'));
