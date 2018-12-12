import React, { Component } from 'react';
// import logo from './assets/logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // whatever: "whatever",
      // data: null,
      // error: null,
      // loading: true
    }
  }

  componentDidMount() { //sometimes abbreviated CDM
    // do fetch here
    // returns Promise
    // .then((data) => this.setState({loading: false, data})).catch((error) => this.setState({loading: false, error}))
    // this.setState()
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

        {/* <div id="example">
          {this.state.whatever}
        </div> */}

        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-6">
              <div class="title">
                <h1>Ninja Blender</h1>
              </div>
              <div class="carousel">
                <img src="http://placekitten.com/300/300" alt="kitty"></img>
                <div>
                  <img src="http://placekitten.com/100/100" alt="kitty1" class="img-thumbnail"></img>
                  <img src="http://placekitten.com/100/100" alt="kitty2" class="img-thumbnail"></img>
                  <img src="http://placekitten.com/100/100" alt="kitty3" class="img-thumbnail"></img>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-6">
              <div class="price">
                <h2>$139.99 <small class="text-lowercase">online price</small></h2>
              </div>
              <div class="offers">
                <hr />
                <p class="text-lowercase">offer 1</p>
                <p class="text-lowercase">offer 2</p>
                <hr />
              </div>
              <div class="quantity-picker">
                <input type="number" placeholder="quantity:"></input>
              </div>
              <div class="primary-button-group">
                <button type="button" class="btn btn-primary btn-lg text-uppercase">pick up in store</button>
                <button type="button" class="btn btn-primary btn-lg text-uppercase">add to cart</button>
              </div>
              <div class="return-policy">
                <p class="lead text-lowercase">returns</p>
                <p>Meoooow this human feeds me, i should be a god lick butt, or scratch leg; meow for can opener to feed me floof tum, tickle bum, jellybean footies curly toes.</p>
              </div>
              <div class="secondary-button-group">
                <button type="button" class="btn btn-secondary btn-sm text-uppercase">add to registry</button>
                <button type="button" class="btn btn-secondary btn-sm text-uppercase">add to list</button>
                <button type="button" class="btn btn-secondary btn-sm text-uppercase">share</button>
              </div>
              <div class="product-highlights">
                <h2 class="text-lowercase">product highlights</h2>
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
          <div class="row">
            {/* <div class="col-xs-12 col-sm-6"> */}
              <div class="ratings-and-reviews">
                <div class="ratings">
                  <p class="text-lowercase">overall</p>
                  <a class="text-lowercase" href>view all reviews</a>
                </div>
                <div class="reviews">
                  <div class="pro">
                    <h3 class="text-uppercase">pro</h3>
                    <p class="text-lowercase">most helpful positive review</p>
                  </div>
                  <div class="con">
                    <h3 class="text-uppercase">con</h3>
                    <p class="text-lowercase">most helpful negetive review</p>
                  </div>
                  <hr />
                  <div class="pro-review">
                    <h4>pro review title</h4>
                    <p>Ignore the human until she needs to get up, then climb on her lap and sprawl</p>
                    <p>Name and date</p>
                  </div>
                  <div class="con-review">
                    <h4>con review title</h4>
                    <p>Push your water glass on the floor it's 3am, time to create some chaos</p>
                    <p>Name and date</p>
                  </div>
                </div>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
