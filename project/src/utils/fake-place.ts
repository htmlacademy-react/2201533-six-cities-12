import {TypeOffer} from '../settings';
import { faker } from '@faker-js/faker';
import {getRandomInt} from './random';
import {CITIES} from '../store/cities';
import {PlaceData} from '../types/place-data-types';
import {Max, Min, WORDS_IN_TITLE} from './mocks-const';
import {makeFakeInsides, makeFakeLocation, getRandomRating, getRandomCityIndex} from './mocks';

export const makeFakePlace = (id: number, indexOfCity?: number):PlaceData => {
  const images =
    Array.from(new Array(getRandomInt(1, Max.images)), (element) => faker.image.imageUrl(260, 200));
  const cityIndex = indexOfCity ?? getRandomCityIndex();
  const city = CITIES[cityIndex];
  return {
    features: {
      type: faker.helpers.objectValue(TypeOffer),
      bedrooms: getRandomInt(1, Max.bedrooms),
      maxAdults: getRandomInt(1, Max.maxAdults),
    },
    city: cityIndex,
    description: faker.lorem.paragraph(),
    goods: makeFakeInsides(),
    hostId: getRandomInt(0, Max.hostId),
    id: id,
    images: images,
    isPremium: getRandomInt(0, 1) === 1,
    location: makeFakeLocation(city.location),
    previewImage: faker.image.imageUrl(260, 200),
    price: getRandomInt(Min.price * 100, Max.price * 100) / 100,
    rating: getRandomRating(),
    title: faker.lorem.sentence(WORDS_IN_TITLE),
    popular: id,
  };
};
