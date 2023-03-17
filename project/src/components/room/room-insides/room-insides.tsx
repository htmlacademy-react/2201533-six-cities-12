import {INSIDES} from '../../../mocs/insides';

export default function RoomInsides(): JSX.Element {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {INSIDES.map((element) =>
          (
            <li className="property__inside-item" key={element}>
              {element}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
