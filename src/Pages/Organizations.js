import React, { Component } from 'react'
import Container from '../Components/UI/Container/Container'
import Table from '../Components/Table'
import axios from '../axios'

class Organizations extends Component {
  state = {
    organizations: null,
    error: false
  }

  componentDidMount() {
    axios.get('http://ec2-34-212-245-30.us-west-2.compute.amazonaws.com/api/v1/organizations').then(response => {
      const organizations = response.data.data;
      const updatedOrganizations = organizations.map((organization) => {
        console.log(organization)
        return { ...organization }
      })
      this.setState({ organizations: updatedOrganizations })
      console.log(this.state.organizations)
    }).catch(error => {
      this.setState({ error: true })
    })
  }


  render() {

  let showTable = (tableInfo) => {
    let organizations = { ...this.state.organizations }
    console.log('Organizations data ::>', tableInfo);
    if (tableInfo) {
      console.log(tableInfo)
      return (
      <Table 
        data={ Object.keys(organizations.attributes) } 
        columns={ Object.values(organizations.attributes) } />
      )
    } else {
      return ('No current organizations.')
    }
  }
    if (this.state.organizations) {
      if (!this.state.error) {
        return (
          <div className="Organizaitons">
            <Container>
              {showTable}
            </Container>
          </div>
        )
      }
    }
    return (
      <div className="error">
        {this.state.error}
      </div>
    );
  };
};

export default Organizations;