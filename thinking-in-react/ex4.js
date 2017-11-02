'use strict'

import React from 'react'
const createReactClass = require('create-react-class')

export const FilterableProductTable = createReactClass({
  getInitialState() {
    return {
      filterText: '',
      inStockOnly: false
    }
  },
  handleUserInput(filterText, inStockOnly) {
    this.setState({
      filterText: filterText,
      inStockOnly: inStockOnly
    });
    this.props.onUserInput(filterText, inStockOnly)
  },
  render() {
    const products = this.props.products;
    const {filterText, inStockOnly} = this.state;
    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}/>
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly} />
      </div>
    )
  }
})

export const SearchBar = createReactClass({
  handleChange() {
    const filterText = this.filterText.value;
    const inStockOnly = this.inStockOnly.checked;

    // this.props.onUserInput(filterText, inStockOnly);
  },
  render() {
    const {filterText, inStockOnly} = this.props;
    return (
      <form>
          <input
            type="search"
            ref={(r) => this.filterText = r}
            placeholder="Search..."
            value={filterText}
            onChange={this.handleChange}
          />
          <label htmlFor="">
          <input
            ref={(r) => this.inStockOnly = r}
            type="checkbox"
            value={inStockOnly}
            onChange={this.handleChange}
          />
          Only show products in stock
        </label>
      </form>
    )
  }
})

export const ProductRow = createReactClass({
  render() {
    const product = this.props.product;

    const style = {
      color: product.stocked ? null : 'red'
    }
    return (
      <tr>
        <td style={style}>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    )
  }
})

export const ProductCategoryRow = createReactClass({
  render() {
    return (
        <tr>
          <th colSpan={2}>{this.props.category}</th>
        </tr>
    )
  }
})

export const ProductTable = createReactClass({
  render() {
    const { products, filterText, inStockOnly } = this.props;
    const rows = [];
    let currentCategory;

    products.filter((product) => {
      const stockCond = !inStockOnly || inStockOnly && product.stocked;
      const nameCond = product.name.toLowerCase().indexOf(filterText) !== -1;

      return stockCond && nameCond;
    }).forEach((product) => {
      if (product.category !== currentCategory) {
        currentCategory = product.category;

        rows.push((
          <ProductCategoryRow
            key={currentCategory}
            category={currentCategory}/>
        ));
      }
      rows.push((
        <ProductRow key={product.name} product={product}/>
      ))
    });
    return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
    )
  }
})
