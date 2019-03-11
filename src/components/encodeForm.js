import React, { Component } from 'react';
import { encodeBase64ToJunk } from "../core/junk";
import {CopyToClipboard} from 'react-copy-to-clipboard';
const base64 = require('hi-base64');

class EncodeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      base64Text: '',
      plainText: '',
      encodedText: '',
      copied: false,
    }
  }

  handlePlainTextChange = (evt) => {
    this.setState({ plainText: evt.target.value , copied: false})
  }

  handleClick = () => {
    const base64Text = base64.encode(this.state.plainText)
    this.setState({ base64Text, encodedText: encodeBase64ToJunk(base64Text) })
  }

  render() {
    const { encodedText, plainText, base64Text } = this.state
    return (
      <div className="container">
        <div className="form-group">
          <div className="text-right">
            <CopyToClipboard text={plainText}
              onCopy={() => this.setState({copied: true})}>
              <button className="btn btn-secondary btn-sm my-2">複製內容</button>
            </CopyToClipboard>
          </div>
          <textarea placeholder="輸入任何想編碼成廢文的訊息，e.g. 我們練習廢文，不顧北京反對。" rows="10" className="form-control" id="plainText" type="text" onChange={this.handlePlainTextChange} value={plainText} />
          <button className="btn btn-primary my-2" onClick={this.handleClick}>encode</button>
        </div>
        <div>編碼結果：{base64Text}</div>
          <div className="text-right">
            <CopyToClipboard text={encodedText}
              onCopy={() => this.setState({copied: true})}>
              <button className="btn btn-secondary btn-sm my-2">複製內容</button>
            </CopyToClipboard>
          </div>
        <textarea readOnly rows="20" className="form-control" type="text" value={encodedText} />
        <div>
        </div>
      </div>
    );
  }
}

export default EncodeForm;