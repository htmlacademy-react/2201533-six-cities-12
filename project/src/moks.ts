import {MapLocation} from './types/types';
import {TypeOffer} from './settings';
import { faker } from '@faker-js/faker';
import {getRandomInt} from './random';
import {CITIES} from './store/cities';
import {PlaceData} from "./types/place-data-types";

const INSIDES = [
  'Wi-Fi',
  'Washing machine',
  'Towels',
  'Heating',
  'Coffee machine',
  'Baby seat',
  'Kitchen',
  'Dishwasher',
  'Cabel TV',
  'Fridge'
];

const Max = {
  bedrooms: 7,
  maxAdults: 4,
  cityIndex: CITIES.length - 1,
  hostId: 25,
  images : 10,
  price: 10000,
  rating: 5,
  insides: INSIDES.length,
  favorites: 25
};

const Min = {
  price: 100,
  rating: 1,
  insides: 2
};

const WORDS_IN_TITLE = 5;
const INSIDES_SIZE = INSIDES.length - 1;

const getLocation = (loc: MapLocation): MapLocation => {
  const coordinates = faker.address.nearbyGPSCoordinate([loc.latitude, loc.longitude]);
  return {
    longitude: parseFloat(coordinates[1]),
    latitude: parseFloat(coordinates[0]),
    zoom: loc.zoom
  };
};

const getInsides = () => {
  const insidesCount = getRandomInt(Min.insides, Max.insides);
  const insides: Set<number> = new Set();
  while (insides.size < insidesCount){
    insides.add(getRandomInt(0, INSIDES_SIZE));
  }
  return Array.from(insides, (index) => INSIDES[index]);
};

export const makeFakePlace = (id: number):PlaceData => {
  const images =
    Array.from(new Array(getRandomInt(1, Max.images)), (element) => faker.image.imageUrl(260, 200));
  const cityIndex = getRandomInt(0, Max.cityIndex);
  const city = CITIES[cityIndex];
  return {
    features: {
      type: faker.helpers.objectValue(TypeOffer),
      bedrooms: getRandomInt(1, Max.bedrooms),
      maxAdults: getRandomInt(1, Max.maxAdults),
    },
    city: cityIndex,
    description: faker.lorem.paragraph(),
    goods: getInsides(),
    hostId: getRandomInt(0, Max.hostId),
    id: id,
    images: images,
    isPremium: getRandomInt(0, 1) === 1,
    location: getLocation(city.location),
    previewImage: faker.image.imageUrl(260, 200),
    price: getRandomInt(Min.price * 100, Max.price * 100) / 100,
    rating: getRandomInt(Min.rating * 10, Max.rating * 10) / 10,
    title: faker.lorem.sentence(WORDS_IN_TITLE),
    popular: id,
  };};

export const getRandomOffers = (): PlaceData[] => Array.from(new Array(getRandomInt(1, Max.favorites)),
  (element, index) => makeFakePlace(index));
