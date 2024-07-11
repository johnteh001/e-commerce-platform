import React, { useState } from 'react';

const ReviewForm = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/products/${productId}/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rating, comment }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('Review submitted successfully:', data);
    } else {
      console.error('Error submitting review:', data);
    }
  };

  return (
    <div className="review-form">
      <h2>Submit a Review</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label>Rating</label>
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="0">Select...</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>
        <div>
          <label>Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
