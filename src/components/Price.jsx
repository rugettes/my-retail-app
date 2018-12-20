import React, { Component } from 'react'
import './Price.css'

export default class Price extends Component {
  render() {
    return (
      <div className="price">
        <h2>{this.props.priceData.formattedPriceValue} <small className="text-lowercase">{this.props.priceData.priceQualifier}</small></h2>
      </div>
    )
  }
}
