import React from 'react';
import ReactTable from 'react-table';
import Ellipses from '../assets/images/ellipses.png';

const Align = (props) => {
  if (props.isCentered) {
    return <div className="centered">{props.children}</div>
  }
  return props.children || null;
}

const TableColumnLayout = (type, width = null, opts = {}, props ={}) => {
  let layout;

  switch (type) {
    case "check":
      layout = {
        Header: () => <Align isCentered={opts.isCentered}><input type="checkbox" /></Align>,
        Cell:   () => <Align isCentered={opts.isCentered}><input type="checkbox" /></Align>,
        accessor: "check"
      }
      break;
    case "logo":
      layout = {
        Header: () => <Align isCentered={opts.isCentered}>Logo</Align>,
        Cell:   row => <Align isCentered={opts.isCentered}><img src={row.value} className="logo-image" /></Align>,
        accessor: "logo"
      }
      break;
    case "empty":
      layout = {
        Header: "",
        accessor: "empty"
      }
      break;
    case "view":
      layout = {
        Header: () => (<div className="centered">View</div>),
        Cell: () => (<button className="view-button">VIEW</button>),
        accessor: "view"
      }
      break;
    case "more":
      layout = {
        Header: () => (
          <Align isCentered={opts.isCentered}>
            <img src={Ellipses} data-toggle="popover" data-placement="right" data-content="Edit | Delete" />
          </Align>
          ),
        Cell: () => (
          <Align isCentered={opts.isCentered}>
            <img src={Ellipses} data-toggle="popover" data-placement="right" data-content="Edit | Delete" />
          </Align>
          ),
        accessor: "more",
      }
      break;
    default:
      layout = {
        Header: () => <Align isCentered={opts.isCentered}>{type}</Align>,
        Cell: row => <Align isCentered={opts.isCentered}>{row.value}</Align>,
        accessor: type.toLowerCase()
      }
      break;
   }

  layout.width = width;
  return layout;
}

export default TableColumnLayout;