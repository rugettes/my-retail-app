import React, { Component } from 'react';
import './App.css';

import Carousel from './components/Carousel'

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
      const offers = itemData.Offers[0].OfferPrice[0]
      const promotions = itemData.Promotions
      const itemAvailability = itemData.purchasingChannelCode
      const availableInStores = (itemAvailability === '0') || (itemAvailability === '2')
      const availableOnline = (itemAvailability === '0') || (itemAvailability === '1')
      const features = itemData.ItemDescription[0].features
      const usefulProReview = itemData.CustomerReview[0].Pro[0]
      const usefulConReview = itemData.CustomerReview[0].Con[0]
      const reviews = itemData.CustomerReview[0].Reviews

      function AvailableInStores(props) {
        return <button type="button" className="col-md btn btn-primary btn-lg text-uppercase available-in-store">pick up in store</button>
      }

      function AvailableOnline(props) {
        return <button type="button" className="col-md btn btn-primary btn-lg text-uppercase available-online">add to cart</button>
      }

      return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <div className="title">
                <h1>{itemData.title}</h1>
              </div>
              <Carousel imageData={imageData}/>
            </div>
            <div className="col-md">
              <div className="price">
                <h2>{offers.formattedPriceValue} <small className="text-lowercase">{offers.priceQualifier}</small></h2>
              </div>
              <div className="promotions">
                <hr />
                {promotions.map(promotion => (
                  <>
                    <p className="text-lowercase">
                      <i className="fas fa-tag"></i>&nbsp;
                      {promotion.Description[0].shortDescription}
                    </p>
                  </>
                ))}
                <hr />
              </div>
              <div className="quantity-picker col-xs-12 col-md-5 col-lg-7">
                <label>quantity:</label>
                <i className="fas fa-plus-circle"></i>
                <input placeholder="1" type="number" step="1" min="0"></input>
                <i className="fas fa-minus-circle"></i>
              </div>
              <div className="clearfix"></div>
              <div className="primary-button-group row">
                <AvailableInStores availableInStores={availableInStores} />
                <AvailableOnline availableOnline={availableOnline} />
              </div>
              <div className="return-policy align-items-center">
                <p className="lead text-lowercase">returns</p>
                <p className="copy">This item must be returned within 30 days of the ship date. See <a href="/">return policy</a> for details. Prices, promotions, styles and availability may vary by store and online.</p>
              </div>
              <div className="secondary-button-group row">
                <button type="button" className="col-sm btn btn-secondary btn-sm text-uppercase">add to registry</button>
                <button type="button" className="col-sm btn btn-secondary btn-sm text-uppercase">add to list</button>
                <button type="button" className="col-sm btn btn-secondary btn-sm text-uppercase">share</button>
              </div>
              <div className="product-highlights">
                <h2 className="text-lowercase">product highlights</h2>
                <ul>
                  {features.map(feature => (
                    <li dangerouslySetInnerHTML={{__html: feature}}>
                    </li>
                  ))}
                </ul>
              </div>
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
