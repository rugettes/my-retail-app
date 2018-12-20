import React, { Component } from 'react'
import './Carousel.css'

export default class Carousel extends Component {
  render() {
    const primaryImageLocation = new RegExp(this.props.imageData.PrimaryImage[0].image)
    const alternateImageLocations = this.props.imageData.AlternateImages

    return (
      <div className="carousel">
        <img src={primaryImageLocation.source} alt="" className="primary"></img>
        <div className="text-center">
          {alternateImageLocations.map(location => (
            <img src={location.image} alt="" className="rounded thumbnail"></img>
          ))}
        </div>
      </div>
    )
  }
}
