type GalleryImages = {
  src: string;
  key: number;
}
export default function RoomGallery({images}: {images: GalleryImages[]}): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((element) =>
          (
            <div className="property__image-wrapper" key={`${element.key}`}>
              <img className="property__image" src={element.src} alt="Photo studio"/>
            </div>)
        )}
      </div>
    </div>
  );
}
