import React from "react";

export default function TableHeader({ col0, col1, col2, col3, col4 }) {
  return (
    <thead>
      <tr>
        <th className="col-1">{col0}</th>
        <th>{col1}</th>
        <th className="col-2">{col2}</th>
        <th className="col-2">{col3}</th>
        <th className="col-1">{col4}</th>
      </tr>
    </thead>
  );
}
