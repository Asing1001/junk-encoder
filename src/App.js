import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  
  render() {
    return (
      <div class="container">
        <div>
          <span>編碼</span>
          <textarea type="text"/>
        </div>
        <div>
          <span>解碼</span>
          <textarea type="text"/>
        </div>
      </div>
    );
  }
}

export default App;
