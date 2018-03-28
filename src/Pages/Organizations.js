import React, { Component } from 'react';
import Container from '../Components/UI/Container/Container';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import Table from '../Components/Table';
import apiCaller from '../assets/javascript/api'

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
      { Header: "Name", accessor: this.state.tableHeaders[1], width: 50 },
      { Header: "City", accessor: this.state.tableHeaders[6], width: 161 },
      { Header: "Sport", accessor: this.state.tableHeaders[3], width: 100 }
    ]
    return TableColumns;
  }

  renderTable() {}

  showTable = () => {
      if (this.state.organizations !== null) {
      let organizations = this.state.organizations
        console.log('Organizations data ::>', organizations);
        return (
          <SectionWithHeading heading="Organizations">
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