import React, { Component } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import EncodeForm from './components/encodeForm'
import DecodeForm from './components/decodeForm'
class App extends Component {
  constructor(props){
    super(props)
    this.state= {
      activeIndex: 0
    }
  }

  handleClick = (activeIndex) =>{
    this.setState({activeIndex})
  }

  render() {
    const { activeIndex } = this.state
    return (
      <div className="container">
        <nav className="nav nav-pills nav-justified" style={{padding:'1em'}}>
          <a className={`nav-item nav-link ${activeIndex===0? 'active' :''}`} href="javascript:void(0)" onClick={() => this.handleClick(0)}>編碼</a>
          <a className={`nav-item nav-link ${activeIndex===1? 'active' :''}`} href="javascript:void(0)" onClick={() => this.handleClick(1)}>解碼</a>
        </nav>
        {activeIndex === 0?
          (<EncodeForm></EncodeForm>):(<DecodeForm></DecodeForm>)
        }
      </div>
    );
  }
}

export default App;
