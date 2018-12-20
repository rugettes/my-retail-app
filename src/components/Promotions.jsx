import React, { Component } from 'react'
import './Promotions.css'

export default class Promotions extends Component {
  render() {
    return (
      <div className="promotions">
        <hr />
        {this.props.promotions.map(promotion => (
          <>
            <p className="text-lowercase">
              <i className="fas fa-tag"></i>&nbsp;
              {promotion.Description[0].shortDescription}
            </p>
          </>
        ))}
        <hr />
      </div>
    )
  }
}
