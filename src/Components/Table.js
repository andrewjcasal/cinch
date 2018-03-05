import React from 'react';
import ReactTable from 'react-table';
require('./Table.css');

const Table = (props) => (
  <ReactTable
    data={props.data}
    columns={props.columns}
    minRows={props.minRows}
    showPaginationTop={props.showPaginationTop}
    showPaginationBottom={props.showPaginationBottom}
  />
)

export default Table;