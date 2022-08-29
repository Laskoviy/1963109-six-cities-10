import React, { Fragment } from 'react';
import { inputRatingOption } from '../../const';

const FormRating: React.FC = () => (
  <Fragment>
    {inputRatingOption.map((option) => (
      <Fragment key={option.rating}>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          type="radio"
          value={option.rating}
          id={`${option.rating}-stars`}
        />
        <label
          htmlFor={`${option.rating}-stars`}
          className="reviews__rating-label form__rating-label"
          title={option.title}
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </Fragment>)
    )}
  </Fragment>
);

export default FormRating;
