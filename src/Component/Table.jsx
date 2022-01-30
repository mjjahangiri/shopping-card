import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

export default function Table() {
  return (
    <table className="w-100 text-center table table-striped">
      <TableHeader
        col1="Description"
        col2="Quantity"
        col3="Price"
        col4="Remove"
      />
      <TableBody description="کاپشن چرم درجه یک" price="499,000" quantity={1} />
    </table>
  );
}
