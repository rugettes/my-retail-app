import React, { Component } from 'react';
import './App.css';
import Carousel from './components/Carousel'
import Price from './components/Price'
import PrimaryButtonGroup from './components/PrimaryButtonGroup'
import ProductHighlights from './components/ProductHighlights'
import Promotions from './components/Promotions'
import QuantityPicker from './components/QuantityPicker'
import ReturnPolicy from './components/ReturnPolicy'
import SecondaryButtonGroup from './components/SecondaryButtonGroup'
import Title from './components/Title'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: null
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/item-data.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      const itemData = data.CatalogEntryView[0];
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
              <QuantityPicker />
              <div className="clearfix"></div>
              <PrimaryButtonGroup availableInStores={availableInStores} availableOnline={availableOnline} />
              <ReturnPolicy />
              <SecondaryButtonGroup />
              <ProductHighlights features={features} />
            </div>
          </div>
          <div className="row">
              <div className="ratings-and-reviews col-md-12 col-lg-6">
                <div className="ratings">
                  <fieldset className="stars">
                    <label className="full" for="star5" title="5 stars"></label>
                    <input type="radio" id="star5" name="rating" value="5" />

                    <label className="half" for="star4half" title="4.5 stars"></label>
                    <input type="radio" id="star4half" name="rating" value="4 and a half" />

                    <label className="full" for="star4" title="4 stars"></label>
                    <input type="radio" id="star4" name="rating" value="4" />

                    <label className="half" for="star3half" title="3.5 stars"></label>
                    <input type="radio" id="star3half" name="rating" value="3 and a half" />

                    <label className="full" for="star3" title="3 stars"></label>
                    <input type="radio" id="star3" name="rating" value="3" />

                    <label className="half" for="star2half" title="2.5 stars"></label>
                    <input type="radio" id="star2half" name="rating" value="2 and a half" />

                    <label className="full" for="star2" title="2 stars"></label>
                    <input type="radio" id="star2" name="rating" value="2" />

                    <label className="half" for="star1half" title="1.5 stars"></label>
                    <input type="radio" id="star1half" name="rating" value="1 and a half" />

                    <label className="full" for="star1" title="1 star"></label>
                    <input type="radio" id="star1" name="rating" value="1" />

                    <label className="half" for="starhalf" title="0.5 stars"></label>
                    <input type="radio" id="starhalf" name="rating" value="half" />
                  </fieldset>
                  <p className="text-lowercase">overall</p>
                  <a className="text-lowercase" href="/">view all {reviews.length} reviews</a>
                </div>
                <div className="clearfix"></div>
                <div className="reviews">
                  <div className="reviews-header">
                    <div className="pro col-sm">
                      <h3 className="text-uppercase">pro</h3>
                      <p className="text-lowercase"><small>most helpful 4-5 star review</small></p>
                    </div>
                    <div className="con col-sm">
                      <h3 className="text-uppercase">con</h3>
                      <p className="text-lowercase"><small>most helpful 1-2 star review</small></p>
                    </div>
                  </div>
                  <hr />
                  <div className="reviews-body">
                    <div className="pro-review col-sm">
                      <h4>{usefulProReview.title}</h4>
                      <p>{usefulProReview.review}</p>
                      <p><a href="/">{usefulProReview.screenName}</a>, {usefulProReview.datePosted}</p>
                    </div>
                    <div className="con-review col-sm">
                      <h4>{usefulConReview.title}</h4>
                      <p>{usefulConReview.review}</p>
                      <p><a href="/">{usefulConReview.screenName}</a>, {usefulConReview.datePosted}</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
}

export default App;
