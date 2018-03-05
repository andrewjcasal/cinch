import React, { Component } from 'react';
import Container from '../Components/UI/Container/Container';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import Table from '../Components/Table';
import axios from '../axios';
import apiCaller from '../assets/javascript/api'
import AxiosErrorHandler from '../hoc/AxiosErrorHandler/AxiosErrorHandler';
import Ellipses from '../assets/images/ellipses.png'
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
        console.log('response (╯°□°)╯︵ ┻━┻ ', response.data)
        console.log('headrs', headers = Object.keys(response.data[0]))
        console.log('headers (╯°□°)╯︵ ┻━┻ ', headers)
        this.setState({ organizations: response.data, tableHeaders: headers })
        console.log('I am state',this.state.organizations)
    }).catch(error => {
      console.log('organizations get', error)
      this.setState({ error: true })
    })
  }

  handleHeaderProcessingForTable(headers) {
    const TableColumns = [
      {
        Header: "", accessor: this.state.tableHeaders[0], width: 50,
        Cell: row => (
          <div className="centered">
            <input type="checkbox" />
          </div>
        )
      },
      { Header: "Name", accessor: this.state.tableHeaders[1], width: 161 },
      { Header: "Title", accessor: this.state.tableHeaders[2], width: 100 },
      { Header: "Completed", accessor: this.state.tableHeaders[3], width: 44,
        Cell: row => (
          <div className="centered">
            <input type="checkbox" />
          </div>
        )
     }
    ]
    return TableColumns
  }

  showTable = () => {
      // let organizations = this.state
      if (this.state.organizations) {
      let organizations = this.state.organizations
        console.log('Organizations data ::>', organizations);
        console.log('Headers data ::>', this.state.tableHeaders);
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