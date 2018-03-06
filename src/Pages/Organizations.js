import React, { Component } from 'react';
import Container from '../Components/UI/Container/Container';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import Table from '../Components/Table';
import axios from '../axios';
import apiCaller from '../assets/javascript/api'
import AxiosErrorHandler from '../hoc/AxiosErrorHandler/AxiosErrorHandler';
// import Ellipses from '../assets/images/ellipses.png'
// import Aux from '../hoc/Aux/Aux.js'

class Organizations extends Component {
  state = {
    organizations: null,
    tableHeaders: null,
    error: false
  }

  componentDidMount() {
    console.log('hi (╯°□°)╯︵ ┻━┻ ')
    let headers;
    apiCaller.getAllOrganizations()
      .then((response) => {
        headers = Object.keys(response.data.data[0]);
        this.setState({ organizations: response.data.data, tableHeaders: headers })
    }).catch(error => {
      console.log('organizations get', error)
      this.setState({ error: true })
    })
  }
  
  handleHeaderProcessingForTable() {
    console.log('this.state.tableHeaders (╯°□°)╯︵ ┻━┻ ', this.state.tableHeaders)
    const TableColumns = [
      { Header: "Name", accessor: this.state.tableHeaders[1], width: 50 },
      { Header: "City", accessor: this.state.tableHeaders[6], width: 161 },
      { Header: "Sport", accessor: this.state.tableHeaders[3], width: 100 }
    ]
    console.log('this.state.tableHeaders[0] (╯°□°)╯︵ ┻━┻ ', this.state.tableHeaders[0])
    console.log('TableCOlumns (╯°□°)╯︵ ┻━┻ ', TableColumns)
    return TableColumns
  }

  renderTable() {}

  showTable = () => {
      // let organizations = this.state
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

export default AxiosErrorHandler( Organizations, axios );