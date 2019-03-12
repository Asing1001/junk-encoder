import React, { Component } from 'react';
import { decodeJunkToBase64 } from "../core/junk";
import { CopyToClipboard } from 'react-copy-to-clipboard';
const base64 = require('hi-base64');

class EncodeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      base64Text: '',
      plainText: '',
      encodedText: '',
    }
  }

  handleEncodedTextChange = (evt) => {
    this.setState({ encodedText: evt.target.value })
  }

  handleClick = () => {
    const base64Text = decodeJunkToBase64(this.state.encodedText)
    const plainText = base64.decode(base64Text)
    this.setState({ plainText, base64Text })
  }

  render() {
    const { encodedText, plainText, base64Text } = this.state
    return (
      <div className="container">
        <div className="form-group">
          <div className="text-right">
            <CopyToClipboard text={encodedText}>
              <button className="btn btn-secondary btn-sm my-2">複製內容</button>
            </CopyToClipboard>
          </div>
          <textarea placeholder="輸入編譯過後的廢文，e.g. 嬸嬸安撫浩浩，姊夫監視老婆，歌手指導。" rows="10" className="form-control" id="encodedText" type="text" onChange={this.handleEncodedTextChange} value={encodedText} />
          <button className="btn btn-primary my-2" onClick={this.handleClick}>decode</button>
        </div>
        <div>編碼結果：{base64Text}</div>
        <div className="text-right">
          <CopyToClipboard text={plainText}>
            <button className="btn btn-secondary btn-sm my-2">複製內容</button>
          </CopyToClipboard>
        </div>
        <textarea readOnly rows="20" className="form-control" type="text" value={plainText} />
        <div>
        </div>
      </div>
    );
  }
}

export default EncodeForm;
