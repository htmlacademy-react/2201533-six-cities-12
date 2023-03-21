import {AUTH, AuthorizationStatus} from '../../../setings';
import ReviewsForm from '../reviews-form/reviews-form';
import {REVIEWS} from '../../../mocs/reviews';
import {USERS} from '../../../mocs/users';
import RatingStars from '../../rating-stars/rating-stars';
import RoomUser, {Modes} from '../room-user/room-user';
import ReviewTime from '../review-time/review-time';

export default function Reviews({id}: {id: number}): JSX.Element {
  const reviews = REVIEWS.filter((review) => review.idOffer === id);
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <li className="reviews__item" key={review.id}>
            <RoomUser user = {USERS.find((element) => element.id === review.userId) || USERS[0]}
              mode={Modes.review}
            />
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <RatingStars rating={review.rating} className={'reviews__stars rating__stars'}/>
              </div>
              <p className="reviews__text">
                {review.comment}
              </p>
              <ReviewTime dateIso={review.date}/>
              {/*<time className="reviews__time" dateTime="2019-04-24">April 2019</time>*/}
            </div>
          </li>
        ))}
      </ul>
      {AUTH === AuthorizationStatus.Auth && <ReviewsForm />}
    </section>
  );
}
