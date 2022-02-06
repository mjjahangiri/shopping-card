import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { getShopCard } from '../fakeShoppingCardServices';

export default class Table extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    const products = getShopCard();
    // const { products } = data[0];
    this.setState({ products });
  }

  handleDelete = (product) => {
    const products = [...this.state.products];
    const newProducts = products.filter((p) => p !== product);
    this.setState({ products: newProducts });
  };
  handleIncrease = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].quantity++;
    this.setState({ products });
  };
  handleDecrease = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    if (products[index].quantity === 0) return;
    products[index].quantity -= 1;

    this.setState({ products });
  };

  render() {
    const { products } = this.state;
    return (
      <table className="w-100 text-center align-middle table table-striped">
        <TableHeader
          col0="ردیف"
          col1="توضیحات"
          col2="تعداد"
          col3="قیمت"
          col4="حذف"
        />
        <TableBody
          products={products}
          onDelete={this.handleDelete}
          onIncrease={this.handleIncrease}
          onDecrease={this.handleDecrease}
        />
      </table>
    );
  }
}
