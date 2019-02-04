'use strict'

import React from 'react'
const createReactClass = require('create-react-class')

export const FilterableProductTable = createReactClass({
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    )
  }
})

export const SearchBar = createReactClass({
  render() {
    return (
      <form>
        <input type="search" placeholder="Search..." />
        <label htmlFor="">
          Only show products in stock
        </label>
      </form>
    )
  }
})