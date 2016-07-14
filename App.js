import React, { Component } from 'react';
import {render} from 'react-dom';
import MainContainer from './MainContainer.js';
import './style.scss';

class App extends Component {
  render(){
    return (
      <MainContainer />
    );
  }
}

render(<App />, document.getElementById('root'));
