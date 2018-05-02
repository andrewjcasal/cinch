import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw, convertFromRaw, ContentState } from 'draft-js';
require('./Wysiwyg.css');

class Wysiwyg extends React.Component { 
  state = {
    contentState: {}
  };

  handleInputChange = (event) => {
    this.props.handleChange(this.state.contentState)
  }

  render() {
    const { contentState } = this.state
    return(
      <Editor
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        name={this.props.name}
        onContentStateChange={this.props.onChange}
        value={JSON.stringify(contentState, null, 4)}
      />
    )
  }
}
export default Wysiwyg;