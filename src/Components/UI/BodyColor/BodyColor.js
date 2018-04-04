import React from 'react';
import PropTypes from 'prop-types';
require('./BodyColor.css');

class BodyColor extends React.Component {
  static propTypes = {
    isGray: PropTypes.bool
  }
  static defaultProps = {
    isGray: false
  }
  componentDidMount() {
    document.body.classList.toggle('gray-body', this.props.isGray)
  }
  componentWillReceiveProps(nextProps) {
    document.body.classList.toggle('gray-body', nextProps.isGray)
  }
  componentWillUnmount() {
    document.body.classList.remove('gray-body')
  }
  render() {
    return this.props.children
  }
}

export default BodyColor;