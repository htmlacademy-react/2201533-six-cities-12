import {User} from '../../../types/types';
import RoomUser, {Modes} from '../room-user/room-user';

export default function RoomHost({host}: {host: User}): JSX.Element {
  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <RoomUser user={host} mode={Modes.host}/>
      <div className="property__description">
        <p className="property__text">
          A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The
          building is green and from 18th century.
        </p>
        <p className="property__text">
          An independent House, strategically located between Rembrand Square and National Opera, but where
          the bustle of the city comes to rest in this alley flowery and colorful.
        </p>
      </div>
    </div>
  );
}
