import React from 'react';
import Container from '../Components/UI/Container/Container';
import Table from '../Components/Table';
import TableColumnLayout from '../Components/TableColumnLayout';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import Logo from '../assets/images/Arsenal_FC.svg.png';
require('bootstrap/dist/css/bootstrap.css');
require('../containers/App/App.css');
require('../Components/Table.css');
require('./Family.css');

const ProgramsData = [{
  image: "Brian Smith",
  logo: Logo,
  name: "Competitive Soccer",
  registrations: "546",
  income: "$ 686.64",
  mobile: "1(408)555-1234",
  more: "blah"
}];

const ProgramsColumns = [
  TableColumnLayout("check", 60, {isCentered: true}),
  TableColumnLayout("logo",  89, {isCentered: true}),
  TableColumnLayout("empty", 35),
  {Header: "Name",          accessor: "name",   width: 434},
  TableColumnLayout("Registrations", 173, {isCentered: true}),
  TableColumnLayout("empty", 48),
  {Header: "Total Income",  accessor: "income", width: 122},
  TableColumnLayout("view",  95),
  TableColumnLayout("more",  80, {isCentered: true})
]

const Programs = () => (
  <div id="Programs">
    <Container>
      <SectionWithHeading
        heading="Program Name"
        bulk="true"
        active="true"
        createnew={{link: "/create-program"}}>
        <Table
          data={ProgramsData}
          columns={ProgramsColumns}
          minRows={0}
          showPaginationTop={true}
          showPaginationBottom={false}
        />
      </SectionWithHeading>
    </Container>
  </div>
)

export default Programs;