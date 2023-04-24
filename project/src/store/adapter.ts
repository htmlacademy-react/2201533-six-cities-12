import {Loader, PlaceData, RawPlace} from '../types/place-data-types';
import {APIRoute, TypeOffer} from '../settings';
import {CITIES} from './cities';
import {User} from '../types/types';

export const adaptPlace = (raw: RawPlace, index: number): PlaceData =>(
  {
    features: {bedrooms: raw.bedrooms, maxAdults: raw.maxAdults, type: TypeOffer[raw.type]},
    city: CITIES.findIndex((city) => city.name === raw.city.name),
    description: raw.description,
    goods: raw.goods,
    hostId: raw.host.id,
    id: raw.id,
    images: raw.images,
    isPremium: raw.isPremium,
    location: raw.location,
    previewImage: raw.previewImage,
    price: raw.price,
    rating: raw.rating,
    title: raw.title,
    popular: index
  });

export const adaptHosts = (hosts: User[]) => {
  const hostIds = new Set(hosts.map((user) => user.id));
  return Array.from(hostIds, (id) => hosts.find((host) => host.id === id)) as User[];
};


export const loaders: Loader[] = [
  {
    field: 'selectedOffer',
    url: (id: number) => `${APIRoute.Offers}/${id.toString()}`,
  },
  {
    field: 'nearOffers',
    url: (id: number) => `${APIRoute.Offers}/${id.toString()}/nearby`,
  },
  {
    field: 'comments',
    url: (id: number) => `${APIRoute.Comments}/${id.toString()}`,
  }
];
