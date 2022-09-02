import React from 'react';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { Reviews } from '../../types/reviews';
import FormReview from '../form-review/form-review';
import ReviewsList from '../reviews-list/reviews-list';

type Props = {
    reviews: Reviews
  }

const PropertyReviews: React.FC<Props> = ({ reviews }) => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isShowForm = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot;&nbsp;
        <span className="reviews__amount">{reviews.length}</span>
      </h2>

      <ReviewsList
        reviews={reviews}
      />

      {isShowForm && <FormReview />}
    </section>
  );
};

export default PropertyReviews;
