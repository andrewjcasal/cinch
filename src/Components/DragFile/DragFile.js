import React from 'react';
import Dropzone from 'react-dropzone';

require('./DragFile.css');

class DragFile extends React.Component {
  constructor() {
    super()
    this.state = { files: [] }
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    return (
      <div class="Drag-File">
        <Dropzone style="width: 100%;">
          <p>Drag a file here or <a href="#">Browse</a> to upload</p>
        </Dropzone>
        <p>{this.props.label}</p>
      </div>
    );
  }
}

export default DragFile;