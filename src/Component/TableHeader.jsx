import React from 'react';

export default function TableHeader({ col0, col1, col2, col3, col4 }) {
  return (
    <thead className="table-dark">
      <tr>
        <th className="d-none d-md-flex">{col0}</th>
        <th>{col1}</th>
        <th>{col2}</th>
        <th>{col3}</th>
        <th>{col4}</th>
      </tr>
    </thead>
  );
}
