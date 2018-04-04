import React from 'react';
import Container from '../Components/UI/Container/Container';
import KeyPerfomanceIndicators from '../Components/KeyPerformanceIndicators/KeyPerformanceIndicators';
import GraphSmall from '../Components/GraphSmall/GraphSmall';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import Table from '../Components/Table';
import TableColumnLayout from '../Components/TableColumnLayout'
import HomeOrgInfo from '../Components/HomeOrgInfo';
import { Row, Col } from 'react-bootstrap';

const TableData = [{
  logo: "BS",
  name: "Arsenal",
  registrations: 54,
  revenue: "$ 915.66"
}, {
  logo: "BS",
  name: "AC Milan",
  registrations: 48,
  revenue: "$ 456.75"
}, {
  logo: "BS",
  name: "Barcelona",
  registrations: 47,
  revenue: "$ 696.50"
}, {
  logo: "BS",
  name: "Borrusia Dortmund",
  registrations: 34,
  revenue: "$ 465.48"
}];
const TableColumns = [
  TableColumnLayout("logo", 107, {isCentered: true}),
  { Header: "Name", accessor: "name", width: 203 },
  TableColumnLayout("Registrations", 148, {isCentered: true}),
  TableColumnLayout("Revenue", 100, {accessor: "revenue"})
]

const HomeDashboard = () => (
  <Container>
    <HomeOrgInfo />
    <KeyPerfomanceIndicators />
    <Row>
      <Col md={6}>
        <SectionWithHeading heading="Top Organizations">
          <Table
            data={TableData}
            width={293}
            columns={TableColumns}
            minRows={0}
            showPaginationTop={false}
            showPaginationBottom={false} />
        </SectionWithHeading>
      </Col>
    </Row>
  </Container>
)

export default HomeDashboard;