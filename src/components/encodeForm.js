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

  handlePlainTextChange = (evt) => {
    this.setState({ plainText: evt.target.value })
  }

  handleClick = (evt) => {
    this.setState({ encodedText: this.encode(this.state.plainText) })
  }

  encode = (text) => {
    const b64text = base64.encode(text)
    this.setState({base64Text:b64text})
    let junk = ''
    b64text.split('').forEach((char, index) => {
      if (index % 3 === 0) {
        const matched = nouns.find(({ value }) => value == char)
        junk += matched? matched.key : '$'
      } else if (index % 3 === 1) {
        const matched = verbs.find(({ value }) => value == char)
        junk += matched? matched.key : '$'
      } else {
        const matched = nouns.find(({ value }) => value == char)
        junk += matched? matched.key : '$'
        junk += index === b64text.length -1 ? '。': '，'
      }
    })
    return junk
  }

  render() {
    const { encodedText, plainText, base64Text } = this.state
    return (
      <div className="container">
        <div className="form-group">
          <textarea rows="10" className="form-control" id="plainText" type="text" onChange={this.handlePlainTextChange} value={plainText} />
          <button className="btn btn-primary my-2" onClick={this.handleClick}>encode</button>
        </div>
        <div>編碼結果：{base64Text}</div>
        <textarea rows="20" className="form-control" type="text" value={encodedText} />
        <div>
        </div>
      </div>
    );
  }
}

export default EncodeForm;
