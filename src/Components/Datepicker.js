import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
require('./Datepicker.css');

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class Datepicker extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: '',
      name: this.props.name
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    if (this.props.includeTime) {
      return (
        <DatePicker
          selected={this.state.startDate}
          onChange={this.props.onChange}
          placeholderText={this.props.placeholder}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="LLL"
          timeCaption="time"
        />
      );
    }

    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        placeholderText={this.props.placeholder}
      />
    );
  }
}

export default Datepicker;