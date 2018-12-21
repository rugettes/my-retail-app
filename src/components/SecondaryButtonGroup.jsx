import React, { Component } from 'react'
import './SecondaryButtonGroup.css'

export default class SecondaryButtonGroup extends Component {
  render() {
    return (
      <div className="secondary-button-group row">
        <button type="button" className="col-sm btn btn-secondary btn-sm text-uppercase">add to registry</button>
        <button type="button" className="col-sm btn btn-secondary btn-sm text-uppercase">add to list</button>
        <button type="button" className="col-sm btn btn-secondary btn-sm text-uppercase">share</button>
      </div>
    )
  }
}
