import React, { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { ButtonName, TextLength, Timer, ToastText } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getErrorMessage, getReviewSendStatus, getReviewSendSuccessStatus } from '../../store/review-data/selector';
import { CommentForm } from '../../types/reviews';
import FormRating from '../form-raiting-input/form-raiting-input';
import { clearErrorMessage, resetReviewSendSuccessStatus } from '../../store/review-data/review-data';
import { toast } from 'react-toastify';
import { ReviewData } from '../../types/server-data';
import { postUserReviewAction } from '../../store/api-actions';
import ErrorMessage from '../error-message/error-message';

type FormReviewProps = {
  offerId: number,
}

const FormReview: React.FC<FormReviewProps> = ({ offerId }) => {
  const [review, setReview] = useState<CommentForm>({ rating: null, comment: '' });

  const dispatch = useAppDispatch();

  const isReviewSending = useAppSelector(getReviewSendStatus);
  const isReviewSendSuccess = useAppSelector(getReviewSendSuccessStatus);
  const errorMessage = useAppSelector(getErrorMessage);

  const isErrorMessage = Boolean(errorMessage);
  const isDisabledForm = isReviewSending || isErrorMessage;
  const isDisabledBtn = review.rating === null || review.comment.length < TextLength.Min || isReviewSending || isErrorMessage;

  const buttonName = isReviewSending ? ButtonName.Sending : ButtonName.Submit;

  const textareaClass = classNames('reviews__textarea form__textarea', {
    'error__reviews__textarea horizontal-shake': isErrorMessage
  });

  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  if (isErrorMessage) {
    timerRef.current = setTimeout(() => {
      dispatch(clearErrorMessage());
      timerRef.current = undefined;
    }, Timer.FormReview);
  }

  useEffect(
    () =>
      () => {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
      }, []);

  useEffect(() => {
    if (isReviewSendSuccess) {
      toast.success(ToastText.ReviewAdded);
      setReview({ rating: null, comment: '' });
      dispatch(resetReviewSendSuccessStatus());
    }
  }, [isReviewSendSuccess, dispatch]);

  const onSubmit = (reviewData: ReviewData) => {
    dispatch(postUserReviewAction(reviewData));
  };

  const handleSubmit = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    toast.dismiss();

    if (review.rating) {
      onSubmit({
        id: offerId,
        rating: review.rating,
        comment: review.comment
      });
    }
  };

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
        <FormRating isDisabled={isDisabledForm} rating={review.rating} />
      </div>

      {isErrorMessage && <ErrorMessage errorMessage={errorMessage} />}

      <textarea
        onChange={({ target }: ChangeEvent<HTMLTextAreaElement>) => {
          setReview({
            ...review,
            comment: target.value,
          });
        }}
        value={review.comment}
        className={textareaClass}
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={TextLength.Min}
        maxLength={TextLength.Max}
        disabled={isDisabledForm}
      >
      </textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your
          stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>

        <button
          onClick={handleSubmit}
          disabled={isDisabledBtn}
          className="reviews__submit form__submit button"
          type="submit"
        >
          {buttonName}
        </button>
      </div>
    </form >
  );
};

export default FormReview;
