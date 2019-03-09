import React, { Component } from 'react';
import nouns from "../data/nouns.js";
import verbs from "../data/verbs.js";
const base64 = require('hi-base64');

class EncodeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      base64Text: '',
      plainText: '',
      encodedText: ''
    }
  }

  handleEncodedTextChange = (evt) => {
    this.setState({ encodedText: evt.target.value })
  }

  handleClick = (evt) => {
    this.setState({ plainText: this.decode(this.state.encodedText) })
  }

  decode = (text) => {
    const cleanText = text.replace(/，|。/g, '')
    const arrCleanText = cleanText.split('')
    let result = ''
    let subject
    let keyword
    for(let i =0 ; i< cleanText.length/2; i++){
      keyword = arrCleanText.splice(0,2).join('')
      subject = i%3 === 1? verbs: nouns
      result += subject.find(({key}) => key == keyword).value 
    }
    this.setState({base64Text:result})
    return base64.decode(result)
  }

  render() {
    const { encodedText, plainText, base64Text } = this.state
    return (
      <div className="container">
        <div className="form-group">
          <textarea rows="10" className="form-control" id="encodedText" type="text" onChange={this.handleEncodedTextChange} value={encodedText} />
          <button className="btn btn-primary my-2" onClick={this.handleClick}>decode</button>
        </div>
        <div>編碼結果：{base64Text}</div>
        <textarea rows="20" className="form-control" type="text" value={plainText} />
        <div>
        </div>
      </div>
    );
  }
}

export default EncodeForm;
