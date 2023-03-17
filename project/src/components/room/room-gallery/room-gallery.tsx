import {IMAGES} from '../../../mocs/images';

export default function RoomGallery({images}: {images: number[]}): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((element) =>
          (
            <div className="property__image-wrapper" key={`${element}`}>
              <img className="property__image" src={IMAGES[element]} alt="Photo studio"/>
            </div>)
        )}
      </div>
    </div>
  );
}
