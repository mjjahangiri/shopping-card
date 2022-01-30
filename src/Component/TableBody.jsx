import React from 'react';
import { Link } from 'react-router-dom';

export default function TableBody({ description, quantity, price }) {
  return (
    <tbody>
      <tr>
        <td>{description}</td>
        <td>
          <i className="bi bi-plus-lg border bg-primary text-light p-1 pointer-event"></i>
          <span className="px-3 py-1 border">{quantity}</span>
          <i className="bi bi-dash border bg-danger text-light  p-1"></i>
        </td>
        <td style={{ direction: 'rtl' }}>
          {price} <span>تومان</span>
        </td>
        <td>
          <Link to="/">
            <i className="bi bi-x-lg text-danger"></i>
          </Link>
        </td>
      </tr>
    </tbody>
  );
}
