import React from 'react';

import ReactTable from 'react-table';
import Dropdown from './UI/Dropdown/Dropdown';
import {Popover, OverlayTrigger} from 'react-bootstrap';
import Star from '../assets/images/star.png';
import Ellipses from './Ellipses';

const Align = (props) => {
  if (props.isCentered) {
    return <div className="centered">{props.children}</div>
  }
  return props.children || null;
}

const TableColumnLayout = (type, width = null, opts = {}, props ={}) => {
  let layout;

  switch (type) {
    case "starred":
      layout = {
        Header: "",
        accessor: "starred",
        Cell: () => <Align isCentered={opts.isCentered}><div className="starred"><img src={Star} /></div></Align>
      }
      break;
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
    case "image":
      layout = {
        Header: "Image",
        accessor: "image",
        width: 99,
        Cell: row => (<div className="avatar-image"></div>)
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
        Header: () => <div className="centered">View</div>,
        Cell: () => <button className="view-button">VIEW</button>,
        accessor: "view"
      }
      break;
    case "access":
      layout = {
        Header: () => <div className="centered">Access</div>,
        Cell: () => <Dropdown title="SUPER ADMIN" />,
        accessor: "access"
      }
      break;
    case "more":
      layout = {
        Header: () => (
          <Align isCentered={opts.isCentered}>
            <Ellipses />
          </Align>
          ),
        Cell: () => (
          <Align isCentered={opts.isCentered}>
            <Ellipses />
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