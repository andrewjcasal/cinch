import React, {Component} from 'react';
import './Sidebar.css';

class Sidebar extends Component {

  render(props) {
    let elements = [];
    let done = -1;
    
    if (this.props.pageType === "setup") {
      elements = [{
        title: 'Business Details',
        link: '/business-details',
      },{
        title: 'Legal Representative',
        link: '/legal-representative'
      },{
        title: 'Proof of ID',
        link: '/proof-of-id'
      },{
        title: 'Bank Information',
        link: '/bank-information'
      },{
        title: 'Payment Method',
        link: '/payment-method'
      },{
        title: 'Administrators',
        link: '/administrators'
      }];
    } else if (this.props.pageType === "admin") {
      elements = [{
        title: 'Household'
      },{
        title: 'Players'
      },{
        title: 'Coaches'
      },{
        title: 'Referees'
      }]
    }

    var activeElement = elements.findIndex(element => element.title.toLowerCase() === this.props.active)

    return (
      <div className="sidebar section">
        <ul>
          {elements.map((element, i) => {
            return (<li>
              {this.props.pageType !== "admin" ?
                <a
                  href={element.link || "javascript:;"}
                  className={"link-item " + (activeElement == i ? "active" : "")}>
                  {element.title} <span class={ done <= i ? "not-done" : "done"}></span>
                </a> :
                <span
                  className={"link-item " + (activeElement == i ? "active" : "")}
                  onClick={() => this.props.handleClick(element.title.toLowerCase())}>
                  {element.title}
                </span>}
            </li>)
          })}
        </ul>
      </div>
    )  
  }
}

export default Sidebar;