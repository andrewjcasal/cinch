import React from 'react';
require('./FooterButtons.css');

class FooterButtons extends React.Component {
  render() {
    let options = "";
    let footerOptions = "";

    if (this.props.save == "black") {
      options += "black ";
    }

    if (this.props.centered) {
      footerOptions += "centered ";
    }

    return (
      <div className={footerOptions + "footer-buttons"}>
        {this.props.save &&
          <button className={options + "save-button"}>SAVE</button>
        }
        {this.props.cancel &&
          <button className="cancel-button">CANCEL</button>
        }
        {this.props.next &&
          <button className="next-button">NEXT</button>
        }
      </div> )
  }
}

export default FooterButtons;