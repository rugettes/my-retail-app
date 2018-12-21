import React, { Component } from 'react'
import './PrimaryButtonGroup.css'

export default class PrimaryButtonGroup extends Component {
  render() {
    function AvailableInStores(props) {
      return <button type="button" className="col-md btn btn-primary btn-lg text-uppercase available-in-store">pick up in store</button>
    }

    function AvailableOnline(props) {
      return <button type="button" className="col-md btn btn-primary btn-lg text-uppercase available-online">add to cart</button>
    }

    return (
      <div className="primary-button-group row">
        <AvailableInStores availableInStores={this.props.availableInStores} />
        <AvailableOnline availableOnline={this.props.availableOnline} />
      </div>
    )
  }
}
