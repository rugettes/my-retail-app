import React, { Component } from 'react';
import './App.css';

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
      const primaryImageLocation = new RegExp(imageData.PrimaryImage[0].image)
      const alternateImageLocations = imageData.AlternateImages//.map(data => Object.values(data))
      console.log(alternateImageLocations)
      const offers = itemData.Offers[0].OfferPrice[0]
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
        {/* <div>{JSON.stringify(data.CatalogEntryView[0].CustomerReview)}</div> */}
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="title">
                <h1>{itemData.title}</h1>
              </div>
              <div className="carousel">
                <img src={primaryImageLocation.source} alt="kitty"></img>
                <div>
                  {alternateImageLocations.map(location => (
                    <img src={location.image} alt="" className="img-thumbnail"></img>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="price">
                <h2>{offers.formattedPriceValue} <small className="text-lowercase">{offers.priceQualifier}</small></h2>
              </div>
              <div className="promotions">
                <hr />
                <p className="text-lowercase">{promotions[0].Description[0].shortDescription}</p>
                <p className="text-lowercase">{promotions[1].Description[0].shortDescription}</p>
                <hr />
              </div>
              <div className="quantity-picker">
                <input type="number" placeholder="quantity:"></input>
              </div>
              <div className="primary-button-group">
                <button availableInStores={true} type="button" className="btn btn-primary btn-lg text-uppercase">pick up in store</button>
                <button availableOnline={true} type="button" className="btn btn-primary btn-lg text-uppercase">add to cart</button>
              </div>
              <div className="return-policy">
                <p className="lead text-lowercase">returns</p>
                <p>This item must be returned within 30 days of the ship date. See <a href="/">return policy</a> for details. Prices, promotions, styles and availability may vary by store and online.</p>
              </div>
              <div className="secondary-button-group">
                <button type="button" className="btn btn-secondary btn-sm text-uppercase">add to registry</button>
                <button type="button" className="btn btn-secondary btn-sm text-uppercase">add to list</button>
                <button type="button" className="btn btn-secondary btn-sm text-uppercase">share</button>
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
              <div className="ratings-and-reviews">
                <div className="ratings">
                  <p className="text-lowercase">overall</p>
                  <a className="text-lowercase" href="/">view all {reviews.length} reviews</a>
                </div>
                <div className="reviews">
                  <div className="pro">
                    <h3 className="text-uppercase">pro</h3>
                    <p className="text-lowercase">most helpful 4-5 star review</p>
                  </div>
                  <div className="con">
                    <h3 className="text-uppercase">con</h3>
                    <p className="text-lowercase">most helpful 1-2 star review</p>
                  </div>
                  <hr />
                  <div className="pro-review">
                    <h4>{usefulProReview.title}</h4>
                    <p>{usefulProReview.review}</p>
                    <p>{usefulProReview.screenName}, {usefulProReview.datePosted}</p>
                  </div>
                  <div className="con-review">
                    <h4>{usefulConReview.title}</h4>
                    <p>{usefulConReview.review}</p>
                    <p>{usefulConReview.screenName}, {usefulConReview.datePosted}</p>
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
