import {getRandomInt} from './random';
import {Max, Min, WORDS_IN_TITLE} from './mocks-const';
import {faker} from '@faker-js/faker';
import {CITIES} from '../store/cities';
import {TypeOffer} from '../settings';
import {makeFakeInsides, makeFakeLocation, getRandomRating, makeRandomFakeHost, getRandomCityIndex} from './mocks';
import {RawPlace} from '../types/place-data-types';

export const makeFakeRawPlace = (id: number, indexOfCity?: number):RawPlace => {
  const images =
    Array.from(new Array(getRandomInt(1, Max.images)), (element) => faker.image.imageUrl(260, 200));
  const cityIndex = indexOfCity ?? getRandomCityIndex();
  const city = CITIES[cityIndex];
  return {
    bedrooms: getRandomInt(1, Max.bedrooms),
    maxAdults: getRandomInt(1, Max.maxAdults),
    type: faker.helpers.objectKey(TypeOffer),
    city: city,
    description: faker.lorem.paragraph(),
    goods: makeFakeInsides(),
    host: makeRandomFakeHost(),
    id: id,
    images: images,
    isFavorite: getRandomInt(0, 1) === 1,
    isPremium: getRandomInt(0, 1) === 1,
    location: makeFakeLocation(city.location),
    previewImage: faker.image.imageUrl(260, 200),
    price: getRandomInt(Min.price * 100, Max.price * 100) / 100,
    rating: getRandomRating(),
    title: faker.lorem.sentence(WORDS_IN_TITLE),
  };
};
