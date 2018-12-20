import React, { Component } from 'react'
import './Title.css'

export default class Carousel extends Component {
  render() {
    return (
      <div className="title">
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}
