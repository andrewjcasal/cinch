import React from 'react';
import {Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
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
      <Col md={12} className={footerOptions + "footer-buttons"}>
        {this.props.save &&
          <button className={options + "save-button"}>SAVE</button>
        }
        {this.props.cancel &&
          <button className="cancel-button">CANCEL</button>
        }
        {this.props.next &&
          <Link to={this.props.next} className="next-button">NEXT</Link>
        }
        {this.props.complete &&
          <Link to={this.props.complete} className="next-button">COMPLETE</Link>
        }
      </Col> )
  }
}

export default FooterButtons;