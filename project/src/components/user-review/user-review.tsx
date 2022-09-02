import React from 'react';
import { ComponentClass } from '../../const';
import { Review } from '../../types/reviews';
import RatingModule from '../rating-block/rating-block';
import { getFormatDate } from '../utils/utils';

type Props = {
  review: Review;
  }

const UserReview: React.FC<Props> = ({ review }) => {
  const date = getFormatDate(review.date);

  return (
    <li className="reviews__item">
      < div className="reviews__user user" >
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            src={review.user.avatarUrl}
            className="reviews__avatar user__avatar"
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <RatingModule
          rating={review.rating}
          componentClass={ComponentClass.Review}
        />
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={review.date}>{date}</time>
      </div>
    </li >
  );
};


export default UserReview;
