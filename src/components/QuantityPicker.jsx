import React, { Component } from 'react'
import './QuantityPicker.css'

export default class QuantityPicker extends Component {
  constructor(props) {
    super(props)
    this.state = { quantity: this.props.quantity }
    this.onPlusClick = this.onPlusClick.bind(this)
    this.onMinusClick = this.onMinusClick.bind(this)
  }

  render() {
    return (
      <div className="quantity-picker col-xs-12 col-md-5 col-lg-7">
        <label>quantity:</label>
        <i onClick={this.onPlusClick} className="fas fa-plus-circle"></i>
        <div className="quantity">{this.state.quantity}</div>
        <i onClick={this.onMinusClick} className="fas fa-minus-circle"></i>
      </div>
    )
  }

  onPlusClick() {
    this.setState(state => ({
      quantity: parseInt(state.quantity) + 1
    }))
  }

  onMinusClick() {
    this.setState(state => ({
      quantity: parseInt(state.quantity) - 1
    }))
  }
}
