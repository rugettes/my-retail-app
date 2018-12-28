import React, { Component } from 'react'
import './Carousel.css'

export default class Carousel extends Component {
  onImageClick (e) {
    const clickedImageSrc = e.currentTarget.getAttribute('src')
    document.querySelector('.carousel .primary').setAttribute('src', clickedImageSrc)
  }

  onMagnifyingClick (e) {
    // TODO: render modal with current primary image source
  }

  render() {
    const primaryImageLocation = new RegExp(this.props.imageData.PrimaryImage[0].image)
    const alternateImageLocations = this.props.imageData.AlternateImages

    // TODO: keep track of index cycling through array on arrow click; only render current, n+1, n-1
    let renderedImages = []

    for (let i = 0; i < 3; i++) {
      renderedImages.push(alternateImageLocations[i])
    }

    return (
      <div className="carousel">
        <img src={primaryImageLocation.source} alt="" className="primary"></img>
        <br />
        <span className="view-larger"><i className="fas fa-search-plus"></i> View larger</span>
        <div className="text-center">
          <i className="fas fa-angle-left arrows"></i>
          {renderedImages.map(location => (
            <img onClick={this.onImageClick}  src={location.image} alt="" className="rounded thumbnail"></img>
          ))}
          <i className="fas fa-angle-right arrows"></i>
        </div>
      </div>
    )
  }
}
