import React, { Component } from 'react'
import './RatingsAndReviews.css'

export default class RatingsAndReviews extends Component {
  render() {
    return (
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
          <a className="text-lowercase" href="/">view all {this.props.reviews.length} reviews</a>
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
              <h4>{this.props.usefulProReview.title}</h4>
              <p>{this.props.usefulProReview.review}</p>
              <p><a href="/">{this.props.usefulProReview.screenName}</a>, {this.props.usefulProReview.datePosted}</p>
            </div>
            <div className="con-review col-sm">
              <h4>{this.props.usefulConReview.title}</h4>
              <p>{this.props.usefulConReview.review}</p>
              <p><a href="/">{this.props.usefulConReview.screenName}</a>, {this.props.usefulConReview.datePosted}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
