import React, { Component } from 'react'
import './Carousel.css'

export default class Carousel extends Component {
  onImageClick (e) {
    const clickedImageSrc = e.currentTarget.getAttribute('src')
    document.querySelector('.carousel .primary').setAttribute('src', clickedImageSrc)
  }

  render() {
    const primaryImageLocation = new RegExp(this.props.imageData.PrimaryImage[0].image)
    const alternateImageLocations = this.props.imageData.AlternateImages
    let renderedImages = []

    for (let i = 0; i < 3; i++) {
      renderedImages.push(alternateImageLocations[i])
    }

    return (
      <div className="carousel">
        <img src={primaryImageLocation.source} alt="" className="primary"></img>
        <div className="text-center">
          {renderedImages.map(location => (
            <img onClick={this.onImageClick}  src={location.image} alt="" className="rounded thumbnail"></img>
          ))}
        </div>
      </div>
    )
  }
}
