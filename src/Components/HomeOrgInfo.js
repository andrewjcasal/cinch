import React, {Component} from 'react'
import { Row, Col } from 'react-bootstrap';
import EyeCon from '../assets/images/eye icon.png';
import DollarIcon from '../assets/images/dollar icon.png';
import CartIcon from '../assets/images/cart-icon.png';
import UserIcon from '../assets/images/users icon.png';
import HomeOrgInfoItem from './HomeOrgInfoItem';
import Aux from '../hoc/Aux/Aux';
require('./HomeOrgInfo.css')

class HomeOrgInfo extends Component {
  state = {
    displayInfoObject: [
    {
      title: "Total Registrations",
      icon: CartIcon,
      numbers: '8956'
    },
    {
      title: "Annual Income",
      icon: DollarIcon,
      numbers: '$7841.78'
    },
    {
      title: "Total Members",
      icon: UserIcon,
      numbers: '6521'
    },
    {
      title: "Active Programs",
      icon: EyeCon,
      numbers: '5'
    },
  ]}

  render(){
    return(
      <Row className="info-display section content">
        {this.state.displayInfoObject.map((item, i, arr) => {
          return ( <Aux>
            <HomeOrgInfoItem
              key={i}
              icon={item.icon}
              title={item.title}
              numbers={item.numbers}
            />
            { i !== arr.length - 1 && <span className="line-break centered"></span> } 
          </Aux> )
        })}
      </Row>
    )
  }
};

export default HomeOrgInfo;

