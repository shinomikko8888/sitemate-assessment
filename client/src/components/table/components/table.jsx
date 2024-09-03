import React from 'react'
import TableRow from './table-row';

export const Table = (props) => {
  const { data } = props;

  return (
    <>
    <div className='d-flex align-items-center justify-content-between'>
      <h1>Issue Table</h1>
      <button className='btn btn-primary'>+</button>
    </div>
    
    <div className='d-flex align-items-center justify-content-center'>
      <table className='table'>
        <thead>
          <tr>
            <TableRow type='h'>Issue ID</TableRow>
            <TableRow type='h'>Title</TableRow>
            <TableRow type='h'>Actions</TableRow>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <TableRow type='d'>Issue#{row.pk}</TableRow>
              <TableRow type='d'>{row.title}</TableRow>
              <TableRow type='d'>
                <p>
                  <i className='fa-solid fa-eye icon-hover'></i>
                  <span className='icon-tooltip'>Test</span>
              </p>
              </TableRow>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
    
  );
};