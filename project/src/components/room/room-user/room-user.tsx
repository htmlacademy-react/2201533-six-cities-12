import {User} from '../../../types/types';

export const Modes = {
  review: 0,
  host: 1
} as const;

type UserProps = {
  user: User;
  mode: number;
}

export default function RoomUser({user, mode}: UserProps): JSX.Element {
  return (
    <div className={`${mode === Modes.review ? 'reviews__user' : 'property__host-user'}`}>
      <div className={`${mode === Modes.review ?
        'reviews__avatar-wrapper' :
        'property__avatar-wrapper property__avatar-wrapper--pro'} user__avatar-wrapper`}
      >
        <img className={`${mode === Modes.review ? 'reviews' : 'property'}__avatar user__avatar`}
          src={user.avatarUrl} width="54" height="54"
          alt="Reviews avatar"
        />
      </div>
      <span className={`${mode === Modes.review ? 'reviews' : 'property'}__user-name`}>
        {user.name}
      </span>
      {mode === Modes.host &&
        <span className="property__user-status">
          Pro
        </span>}
    </div>
  );
}
