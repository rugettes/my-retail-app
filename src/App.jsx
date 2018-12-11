import React, { Component } from 'react';
// import logo from './assets/logo.svg';
import './App.css';

class App extends Component {
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
        <div class="container">
          <div class="title">
            <h1>Ninja Blender</h1>
          </div>
          <div class="carousel">
            <img src="http://placekitten.com/300/300" alt="kitty"></img>
            <div>
              <img src="http://placekitten.com/100/100" alt="kitty1"></img>
              <img src="http://placekitten.com/100/100" alt="kitty2"></img>
              <img src="http://placekitten.com/100/100" alt="kitty3"></img>
            </div>
          </div>
          <div class="price">
            <h2>$139.99</h2>
            <p>online pricing</p>
          </div>
          <div class="offers">
            <hr />
            <p>offer 1</p>
            <p>offer 2</p>
            <hr />
          </div>
          <div class="quantity-picker">
            <input type="number"></input>
          </div>
          <div class="primary-button-group">
            <button class="pick-up-in-store">pick up in store</button>
            <a href class="find-a-store">find a store</a>
            <button class="add-to-cart">add to cart</button>
          </div>
          <div class="return-policy">
            <h3>returns</h3>
            <p>Meoooow this human feeds me, i should be a god lick butt, or scratch leg; meow for can opener to feed me floof tum, tickle bum, jellybean footies curly toes.</p>
          </div>
          <div class="secondary-button-group">
            <button class="add-to-registry">add to registry</button>
            <button class="add-to-list">add to list</button>
            <button class="share">share</button>
          </div>
          <div class="product-highlights">
            <h2>product highlights</h2>
            <ul>
              <li>Sleep on keyboard chase the pig around the house</li>
              <li>Sleep on keyboard chase the pig around the house</li>
              <li>Sleep on keyboard chase the pig around the house</li>
              <li>Sleep on keyboard chase the pig around the house</li>
              <li>Sleep on keyboard chase the pig around the house</li>
            </ul>
          </div>
          <div class="ratings-and-reviews">
            <div class="ratings">
              <p>overall</p>
              <a href>view all reviews</a>
            </div>
            <div class="reviews">
              <div class="pro">
                <h3>pro</h3>
                <p>most helpful positive review</p>
              </div>
              <div class="con">
                <h3>con</h3>
                <p>most helpful negetive review</p>
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
        </div>
      </div>
    );
  }
}

export default App;
