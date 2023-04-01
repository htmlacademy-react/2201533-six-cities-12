export default function RoomGallery({images}: {images: string[]}): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((element) =>
          (
            <div className="property__image-wrapper" key={`${element}`}>
              <img className="property__image" src={element} alt="Photo studio"/>
            </div>)
        )}
      </div>
    </div>
  );
}
