import React from 'react';
import Container from '../Components/UI/Container/Container';
import PageToggle from '../Components/UI/PageToggle/PageToggle';
import SectionWithHeading from '../Components/UI/SectionWithHeading/SectionWithHeading';
import Table from 'react-table';
import Star from '../assets/images/star.png';
import Visa from '../assets/images/visa.png';
import Mastercard from '../assets/images/mastercard.png';
require('bootstrap/dist/css/bootstrap.css');
require('../containers/App/App.css');
require('../Components/Table.css');
require('./OrderHistory.css');

const PaymentMethodsData = [{
  check: "blah",
  image: "blah",
  name: "Jimmy Smyth",
  type: "Visa",
  "card-number": "**** **** **** 2356",
  expiration: "10/12/1975",
  more: "blah"
}];
const PaymentMethodsColumns = [
  {Header: "", accessor: "empty", width: "23"},
  {
    Header: row => (
      <input type="checkbox" />),
    accessor: "check",
    width: "34",
    Cell: row => (
      <input type="checkbox" />)
  }, {
    Header: "",
    accessor: "starred",
    width: "53",
    Cell: row => (<div className="starred"><img src={Star} /></div>)
  },
  {
    Header: "Image",
    accessor: "image",
    width: "105",
    Cell: row => (<img src={Visa} />)
  },
  {Header: "Name",       accessor: "name", width: "235"},
  {Header: "Type",       accessor: "type", width: "217"},
  {Header: "Card #",     accessor: "card-number", width: "265"},
  {Header: "Expiration", accessor: "expiration", width: "165"},
  {
    Header: "More",
    accessor: "more",
    width: "40", 
    Cell: row => (
      <img src="../assets/images/ellipses.png" data-toggle="popover" data-placement="right" data-content="Edit | Delete" />
      )
  },
]

const OrdersData = [{
  check: "blah",
  player: "blah",
  playerName: "John Smith",
  org: "Arsenal FC",
  programName: "2017 Summer Camp",
  type: "Payment",
  date: "10/12/1975",
  orderId: "12345",
  payment: "$686.64",
  balance: "$60.64"
}, {
  check: "blah",
  player: "blah",
  playerName: "Jenny Smith",
  org: "Arsenal FC",
  programName: "2017 Summer Recreational Soccer",
  type: "Payment",
  date: "1/15/1978",
  orderId: "23564",
  payment: "$682.62",
  balance: "$0.00"
}];
const OrdersColumns = [
  {Header: "", accessor: "empty", width: "23"},
  {
    Header: row => (
      <input type="checkbox" />),
    accessor: "check",
    width: "67",
    Cell: row => (
      <input type="checkbox" />)
  }, {
    Header: "Player",
    accessor: "player",
    width: "87",
    Cell: row => (<div className="avatar-image"></div>)
  },
  {Header: "Player Name", accessor: "playerName", width: "148"},
  {Header: "Organization",accessor: "org",     width: "132"},
  {Header: "Program Name",accessor: "programName", width: "247"},
  {Header: "Type",        accessor: "type",    width: "90"},
  {Header: "Date",        accessor: "date",    width: "99"},
  {Header: "Order ID",    accessor: "orderId", width: "82"},
  {Header: "Payment",     accessor: "payment", width: "91"},
  {Header: "Balance",     accessor: "balance", width: "80"},
]

const OrderHistory = () => (
  <div id="OrderHistory">
    <Container>
      <PageToggle selected="order-history" />
      <SectionWithHeading heading="Payment Methods" addnew="true">
        <Table
          data={PaymentMethodsData}
          columns={PaymentMethodsColumns}
          minRows={0}
          showPaginationTop={false}
          showPaginationBottom={false}
        />
      </SectionWithHeading>
      <SectionWithHeading heading="Orders" export="true" dropdown="true">
        <Table
          data={OrdersData}
          columns={OrdersColumns}
          minRows={0}
          showPaginationTop={false}
          showPaginationBottom={false}
        />
      </SectionWithHeading>
      <div className="clearfix section total-bar">
        <div class="left">Total</div>
        <div class="right">$60.64</div>
      </div>
    </Container>
  </div>
)

export default OrderHistory;