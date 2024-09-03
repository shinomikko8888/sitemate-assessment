import React from 'react'

const TableRow = (props) => {
  const { type, children } = props;

  return (
    <>
      {type === 'h' ? (
        <th>{children}</th>
      ) : (
        <td>{children}</td>
      )}
    </>
  );
};

export default TableRow