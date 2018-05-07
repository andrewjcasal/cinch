import React, { Component } from 'react';
import Container from '../Components/UI/Container/Container';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import Table from '../Components/Table';
import TableColumnLayout from '../Components/TableColumnLayout';
import apiCaller from '../assets/javascript/api';
import CenterMenu from '../Components/CenterMenu';
import CalendarMenu from '../Components/CalendarMenu';

class Organizations extends Component {
  state = {
    organizations: null,
    tableHeaders: null,
    error: false
  }

  componentDidMount() {
    let headers;
    apiCaller.getAllOrganizations()
      .then((response) => {
        let organizations = JSON.parse(response)
        headers = Object.keys(organizations.data[0]);
        this.setState({ organizations: organizations.data, tableHeaders: headers })
    }).catch(error => {
      console.log('organizations get', error)
      this.setState({ error: true })
    })
  }
  
  handleHeaderProcessingForTable() {
    const TableColumns = [
      TableColumnLayout("check", 60, {isCentered: true}),
      TableColumnLayout("empty", 20, {isCentered: true}),
      TableColumnLayout("logo", 60, {isCentered: true}),
      TableColumnLayout("empty", 46, {isCentered: true}),
      { Header: "Name", accessor: this.state.tableHeaders[1], width: 192 },
      TableColumnLayout("Programs", 120, {isCentered: true}),
      TableColumnLayout("Registrations", 106, {isCentered: true}),
      TableColumnLayout("Revenue", 115, {isCentered: true}),
      TableColumnLayout("Quantity", 60),
      TableColumnLayout("Created", 100, {isCentered: true}),
      TableColumnLayout("empty", 30, {isCentered: true}),
      TableColumnLayout("Sales Rep", 96),
      TableColumnLayout("view", 100, {isCentered: true})
    ]
    return TableColumns;
  }

  renderTable() {}

  showTable = () => {
      if (this.state.organizations !== null) {
      let organizations = this.state.organizations
        console.log('Organizations data ::>', organizations);
        return (
          <SectionWithHeading heading="Organizations" centermenu calendarmenu more>
            <Table 
              data={ organizations } 
              columns={ this.handleHeaderProcessingForTable() }
              minRows={0}
              showPaginationTop={false}
              showPaginationBottom={false} />
          </SectionWithHeading>
        )
      }
    } 

  render() {
    return (
      <Container>
        {this.showTable()}
      </Container>
    )
  };
};

export default Organizations;