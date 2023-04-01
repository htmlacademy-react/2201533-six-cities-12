import {PlaceData, RawPlace} from '../types/place-data-types';
import {TypeOffer} from '../setings';
import {CITIES} from './cities';

export const adaptPlace = (raw: RawPlace): PlaceData =>(
  {
    features: {bedrooms: raw.bedrooms, maxAdults: raw.maxAdults, type: TypeOffer[raw.type]},
    city: CITIES.findIndex((city) => city.name === raw.city.name),
    description: raw.description,
    goods: raw.goods,
    hostId: raw.host.id,
    id: raw.id,
    images: raw.images,
    isFavorite: raw.isFavorite,
    isPremium: raw.isPremium,
    location: raw.location,
    previewImage: raw.previewImage,
    price: raw.price,
    rating: raw.rating,
    title: raw.title
  });
