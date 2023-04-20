import {getRandomInt} from './random';
import {Max, Min, WORDS_IN_TITLE} from './mocks-const';
import {faker} from '@faker-js/faker';
import {CITIES} from '../store/cities';
import {TypeOffer} from '../settings';
import {City, MapLocation, User} from '../types/types';
import {getInsides, getLocation} from './mocks';

type RawPlace = {
  bedrooms: number;
  maxAdults: number;
  type: keyof typeof TypeOffer;
  city: City;
  description: string;
  goods: string[];
  host : User;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: MapLocation;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
}

const getRandomHost = (): User => ({
  id: getRandomInt(1, Max.hostId),
  isPro: true,
  name: faker.name.firstName(),
  avatarUrl: faker.image.avatar()
});

export const makeFakeRawPlace = (id: number):RawPlace => {
  const images =
    Array.from(new Array(getRandomInt(1, Max.images)), (element) => faker.image.imageUrl(260, 200));
  const cityIndex = getRandomInt(0, Max.cityIndex);
  const city = CITIES[cityIndex];
  return {
    bedrooms: getRandomInt(1, Max.bedrooms),
    maxAdults: getRandomInt(1, Max.maxAdults),
    type: faker.helpers.objectKey(TypeOffer),
    city: city,
    description: faker.lorem.paragraph(),
    goods: getInsides(),
    host: getRandomHost(),
    id: id,
    images: images,
    isFavorite: getRandomInt(0, 1) === 1,
    isPremium: getRandomInt(0, 1) === 1,
    location: getLocation(city.location),
    previewImage: faker.image.imageUrl(260, 200),
    price: getRandomInt(Min.price * 100, Max.price * 100) / 100,
    rating: getRandomInt(Min.rating * 10, Max.rating * 10) / 10,
    title: faker.lorem.sentence(WORDS_IN_TITLE),
  };
};
