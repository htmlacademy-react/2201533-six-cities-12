export default function RoomInsides({insides}: {insides: string[]}): JSX.Element {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {insides.map((element) =>
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
