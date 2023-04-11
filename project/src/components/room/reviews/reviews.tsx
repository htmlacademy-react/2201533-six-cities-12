import ReviewsForm from '../reviews-form/reviews-form';
import RatingStars from '../../rating-stars/rating-stars';
import RoomUser, {Modes} from '../room-user/room-user';
import ReviewTime from '../review-time/review-time';
import {useAppSelector} from '../../../hooks';
import {getIsAuth} from '../../../store/user-process/user-selectors';
import {getComments} from '../../../store/offer/offer-selectors';

export default function Reviews({id}: {id: number}): JSX.Element {
  const isAuth = useAppSelector(getIsAuth);
  const reviews = useAppSelector(getComments);
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <li className="reviews__item" key={review.id}>
            <RoomUser user = {review.user}
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
            </div>
          </li>
        ))}
      </ul>
      {isAuth && <ReviewsForm offerId={id}/>}
    </section>
  );
}
