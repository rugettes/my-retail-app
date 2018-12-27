import React, { Component } from 'react'
import './App.css'
import Carousel from './components/Carousel'
import Price from './components/Price'
import PrimaryButtonGroup from './components/PrimaryButtonGroup'
import ProductHighlights from './components/ProductHighlights'
import Promotions from './components/Promotions'
import QuantityPicker from './components/QuantityPicker'
import RatingsAndReviews from './components/RatingsAndReviews'
import ReturnPolicy from './components/ReturnPolicy'
import SecondaryButtonGroup from './components/SecondaryButtonGroup'
import Title from './components/Title'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      data: null
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/item-data.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render() {
    const { error, isLoaded, data } = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      const itemData = data.CatalogEntryView[0]
      const imageData = itemData.Images[0]
      const priceData = itemData.Offers[0].OfferPrice[0]
      const promotions = itemData.Promotions
      const itemAvailability = itemData.purchasingChannelCode
      const availableInStores = (itemAvailability === '0') || (itemAvailability === '2')
      const availableOnline = (itemAvailability === '0') || (itemAvailability === '1')
      const features = itemData.ItemDescription[0].features
      const usefulProReview = itemData.CustomerReview[0].Pro[0]
      const usefulConReview = itemData.CustomerReview[0].Con[0]
      const reviews = itemData.CustomerReview[0].Reviews

      return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <Title title={itemData.title} />
              <Carousel imageData={imageData}/>
            </div>
            <div className="col-md">
              <Price priceData={priceData} />
              <Promotions promotions={promotions} />
              <QuantityPicker quantity="1" />
              <div className="clearfix"></div>
              <PrimaryButtonGroup availableInStores={availableInStores} availableOnline={availableOnline} />
              <ReturnPolicy />
              <SecondaryButtonGroup />
              <ProductHighlights features={features} />
            </div>
          </div>
          <div className="row">
            {/* TODO: pass in average rating as prop */}
            <RatingsAndReviews reviews={reviews} usefulProReview={usefulProReview} usefulConReview={usefulConReview} />
          </div>
        </div>
      </div>
    )
  }
}
}

export default App
