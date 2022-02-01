import React from "react";

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
          <td>{product.id}</td>
          <td>{product.description}</td>
          <td>
            <i
              className="bi bi-plus-lg  p-1 mx-1"
              onClick={() => onIncrease(product)}
              id="shoppingCardIncrease"
            ></i>
            <span
              className="px-3 py-1 bg-body border"
              id="shoppingCardQuantity"
            >
              {product.quantity}
            </span>
            <i
              className={
                product.quantity === 0
                  ? "disabled bg-secondary text-dark bi bi-dash p-1 mx-1"
                  : "bi bi-dash p-1 mx-1"
              }
              id="shoppingCardDecrease"
              onClick={() => onDecrease(product)}
            ></i>
          </td>
          <td style={{ direction: "rtl" }}>
            {product.price} <span>تومان</span>
          </td>
          <td>
            <i
              className="bi bi-x-lg p-1"
              id="shoppingCardDelete"
              onClick={() => onDelete(product)}
            ></i>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
