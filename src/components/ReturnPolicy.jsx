import React, { Component } from 'react'
import './ReturnPolicy.css'

export default class ReturnPolicy extends Component {
  render() {
    return (
      <div className="return-policy align-items-center">
        <p className="lead text-lowercase">returns</p>
        <p className="copy">This item must be returned within 30 days of the ship date. See <a href="/">return policy</a> for details. Prices, promotions, styles and availability may vary by store and online.</p>
      </div>
    )
  }
}
