import React, { ChangeEvent, useState } from 'react';
import { CommentForm } from '../../types/reviews';
import FormRating from '../form-raiting-input/form-raiting-input';

const FormReview: React.FC = () => {
  const [review, setReview] = useState<CommentForm>({
    rating: null,
    comment: '',
  });

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <div
        onChange={({ target }: ChangeEvent<HTMLInputElement>) => {
          setReview({
            ...review,
            rating: Number(target.value),
          });
        }}
        className="reviews__rating-form form__rating"
      >
        <FormRating />
      </div>

      <textarea
        onChange={({ target }: ChangeEvent<HTMLTextAreaElement>) => {
          setReview({
            ...review,
            comment: target.value,
          });
        }}
        value={review.comment}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
            stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form >
  );
};

export default FormReview;
