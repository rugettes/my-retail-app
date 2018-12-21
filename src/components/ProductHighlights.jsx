import React, { Component } from 'react'

export default class ProductHighlights extends Component {
  render() {
    return (
      <div className="product-highlights">
        <h2 className="text-lowercase">product highlights</h2>
        <ul>
          {this.props.features.map(feature => (
            <li dangerouslySetInnerHTML={{__html: feature}}>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
