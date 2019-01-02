import React, { Component } from 'react'
import './QuantityPicker.css'

export default class QuantityPicker extends Component {
  constructor(props) {
    super(props)
    this.state = { quantity: this.props.quantity }
    this.handleChange = this.handleChange.bind(this)
    this.onMinusClick = this.onMinusClick.bind(this)
    this.onPlusClick = this.onPlusClick.bind(this)
  }

  handleChange(e) {
    const { value } = e.target
    this.setState(state => ({
       quantity: value
    }))
  }

  onMinusClick() {
    this.setState(state => ({
      quantity: parseInt(state.quantity) - 1
    }))
  }

  onPlusClick() {
    this.setState(state => ({
      quantity: parseInt(state.quantity) + 1
    }))
  }

  render() {
    return (
      <div className="quantity-picker col-xs-12 col-md-5 col-lg-7">
        <label>quantity:</label>
        <i onClick={this.onPlusClick} className="fas fa-plus-circle"></i>
        <input className="quantity" value={this.state.quantity} onChange={this.handleChange} type="number"></input>
        <i onClick={this.onMinusClick} className="fas fa-minus-circle"></i>
      </div>
    )
  }
}
