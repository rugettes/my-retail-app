import React, { Component } from 'react'
import './QuantityPicker.css'

export default class QuantityPicker extends Component {
  onPlusClick (e) {
    const el = document.querySelector('.quantity-picker .quantity')
    el.innerHTML++
  }

  onMinusClick (e) {
    const el = document.querySelector('.quantity-picker .quantity')
    el.innerHTML--
  }


  render() {
    return (
      <div className="quantity-picker col-xs-12 col-md-5 col-lg-7">
        <label>quantity:</label>
        <i onClick={this.onPlusClick} className="fas fa-plus-circle"></i>
        <div class="quntity">{this.props.quantity}</div>
        <i onClick={this.onMinusClick} className="fas fa-minus-circle"></i>
      </div>
    )
  }
}
