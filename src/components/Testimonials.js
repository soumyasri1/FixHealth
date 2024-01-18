// Reviews.js
import React, { useState } from "react";
import { customerReviews } from "./customReviews";
import "../componentStyles/Review.css";

function Reviews() {
  let Message, Name, Location, Image;
  const reviewsLength = customerReviews.length - 1;
  const [review, setReview] = useState(0);

  // Back to the previous review
  const backBtn = () => {
    setReview(review <= 0 ? reviewsLength : review - 1);
    handleReviewsUpdation();
  };

  // Go to the newer review
  const frontBtn = () => {
    setReview(review >= reviewsLength ? 0 : review + 1);
    handleReviewsUpdation();
  };

  // Update reviews
  const handleReviewsUpdation = () => {
    const reviewMessage = customerReviews[review];
    Name = reviewMessage.name;
    Location = reviewMessage.location;
    Message = reviewMessage.message;
    Image = reviewMessage.image;
  };

  // List review on visit
  handleReviewsUpdation();

  return (
    <div className="review-section" id="reviews">
      <div className="text-container">
        <p className="txt-title">
          More over <span className="text-num">1500+ Customers</span>
        </p>

        <p className="text-desc">Don't just take our word, delve into the testimonials from our satisfied clients.</p>

        <p className="text-format">
          <span className="quote1">''</span>
          <span className="review">{Message}</span>
          <span className="quote2">''</span>
        </p>

        <div className="authors">
          <div className="names">
            <img className="reviewer-img" src={Image} alt={`${Name}'s avatar`} />
            <div>
              <p className="reviewer-name">{Name}</p>
              <p className="reviewer-place">{Location}</p>
            </div>
          </div>

          <div className="rw-btns">
            <button
              className="rw-next-btn"
              type="button"
              onClick={backBtn}
            >
              ←
            </button>
            <button
              className="rw-next-btn"
              type="button"
              onClick={frontBtn}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
