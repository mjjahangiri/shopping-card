import React from 'react';

export default function TableBody({
  products,
  onDelete,
  onIncrease,
  onDecrease,
}) {
  return (
    <tbody>
      {products.map((product, i) => (
        <tr key={i}>
          <td className="d-none d-md-flex">{product.id}</td>
          <td className="col-5">{product.description}</td>
          <td className="col-3 col-sm-2">
            <i
              className="bi bi-plus-lg p-1"
              onClick={() => onIncrease(product)}
              id="shoppingCardIncrease"
            ></i>
            <span
              className="px-2 py-1 bg-body border"
              id="shoppingCardQuantity"
            >
              {product.quantity}
            </span>
            <i
              className={
                product.quantity === 0
                  ? 'disabled bg-secondary p-1 text-dark bi bi-dash'
                  : 'bi bi-dash p-1'
              }
              id="shoppingCardDecrease"
              onClick={() => onDecrease(product)}
            ></i>
          </td>
          <td style={{ direction: 'rtl' }}>
            <span className="d-inline-block d-md-none">T</span> {product.price}{' '}
            <span className="d-none d-md-inline-block">تومان</span>
          </td>
          <td className="col-1">
            <i
              className="bi bi-x-lg p-1 align-items-center"
              id="shoppingCardDelete"
              onClick={() => onDelete(product)}
            ></i>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
