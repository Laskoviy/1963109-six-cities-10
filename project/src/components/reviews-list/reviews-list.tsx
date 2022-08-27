import { Reviews } from '../../types/reviews';
import UserReview from '../user-review/user-review';

type Props = {
    reviews: Reviews
  }

function ReviewsList({ reviews }: Props): JSX.Element {
  return (
    <ul className="reviews__list">
      <UserReview
        reviews={reviews}
      />
    </ul>
  );
}
export default ReviewsList;
