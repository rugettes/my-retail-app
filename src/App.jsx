import React, { Component } from 'react';
// import logo from './assets/logo.svg';
import './App.css';

// let dataRequest = new Request('')

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
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     // whatever: "whatever",
  //     // data: null,
  //     // error: null,
  //     // loading: true
  //   }
  // }

  // componentDidMount() { //sometimes abbreviated CDM

  //   // do fetch here
  //   // returns Promise
  //   // .then((data) => this.setState({loading: false, data})).catch((error) => this.setState({loading: false, error}))
  //   // this.setState()
  // }

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
      <div className="App">
        <div>{JSON.stringify(data.CatalogEntryView[0].CustomerReview)}</div>
        {/* <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul> */}

        {/* <div id="example">
          {this.state.whatever}
        </div> */}

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="title">
                <h1>Ninja Blender</h1>
              </div>
              <div className="carousel">
                <img src="http://placekitten.com/300/300" alt="kitty"></img>
                <div>
                  <img src="http://placekitten.com/100/100" alt="kitty1" className="img-thumbnail"></img>
                  <img src="http://placekitten.com/100/100" alt="kitty2" className="img-thumbnail"></img>
                  <img src="http://placekitten.com/100/100" alt="kitty3" className="img-thumbnail"></img>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="price">
                <h2>$139.99 <small className="text-lowercase">online price</small></h2>
              </div>
              <div className="offers">
                <hr />
                <p className="text-lowercase">offer 1</p>
                <p className="text-lowercase">offer 2</p>
                <hr />
              </div>
              <div className="quantity-picker">
                <input type="number" placeholder="quantity:"></input>
              </div>
              <div className="primary-button-group">
                <button type="button" className="btn btn-primary btn-lg text-uppercase">pick up in store</button>
                <button type="button" className="btn btn-primary btn-lg text-uppercase">add to cart</button>
              </div>
              <div className="return-policy">
                <p className="lead text-lowercase">returns</p>
                <p>Meoooow this human feeds me, i should be a god lick butt, or scratch leg; meow for can opener to feed me floof tum, tickle bum, jellybean footies curly toes.</p>
              </div>
              <div className="secondary-button-group">
                <button type="button" className="btn btn-secondary btn-sm text-uppercase">add to registry</button>
                <button type="button" className="btn btn-secondary btn-sm text-uppercase">add to list</button>
                <button type="button" className="btn btn-secondary btn-sm text-uppercase">share</button>
              </div>
              <div className="product-highlights">
                <h2 className="text-lowercase">product highlights</h2>
                <ul>
                  <li>Sleep on keyboard chase the pig around the house</li>
                  <li>Sleep on keyboard chase the pig around the house</li>
                  <li>Sleep on keyboard chase the pig around the house</li>
                  <li>Sleep on keyboard chase the pig around the house</li>
                  <li>Sleep on keyboard chase the pig around the house</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
              <div className="ratings-and-reviews">
                <div className="ratings">
                  <p className="text-lowercase">overall</p>
                  <a className="text-lowercase" href="/">view all reviews</a>
                </div>
                <div className="reviews">
                  <div className="pro">
                    <h3 className="text-uppercase">pro</h3>
                    <p className="text-lowercase">most helpful positive review</p>
                  </div>
                  <div className="con">
                    <h3 className="text-uppercase">con</h3>
                    <p className="text-lowercase">most helpful negetive review</p>
                  </div>
                  <hr />
                  <div className="pro-review">
                    <h4>pro review title</h4>
                    <p>Ignore the human until she needs to get up, then climb on her lap and sprawl</p>
                    <p>Name and date</p>
                  </div>
                  <div className="con-review">
                    <h4>con review title</h4>
                    <p>Push your water glass on the floor it's 3am, time to create some chaos</p>
                    <p>Name and date</p>
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
