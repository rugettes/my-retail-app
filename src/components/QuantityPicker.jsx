import React, { Component } from 'react'
import './QuantityPicker.css'

export default class QuantityPicker extends Component {
  render() {
    return (
      <div className="quantity-picker col-xs-12 col-md-5 col-lg-7">
        <label>quantity:</label>
        <i className="fas fa-plus-circle"></i>
        <input placeholder="1" type="number" step="1" min="0"></input>
        <i className="fas fa-minus-circle"></i>
      </div>
    )
  }
}
