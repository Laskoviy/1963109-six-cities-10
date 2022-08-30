import React from 'react';
import { Reviews } from '../../types/reviews';
import UserReview from '../user-review/user-review';

type Props = {
    reviews: Reviews
  }

const ReviewsList: React.FC<Props> = ({ reviews }) => (
  <ul className="reviews__list">
    <UserReview
      reviews={reviews}
    />
  </ul>
);
export default ReviewsList;
