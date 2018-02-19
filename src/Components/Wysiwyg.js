import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
require('./Wysiwyg.css');

const Wysiwyg = (props) => (
  <Editor
    toolbarClassName="toolbarClassName"
    wrapperClassName="wrapperClassName"
    editorClassName="editorClassName"
  />
)

export default Wysiwyg;