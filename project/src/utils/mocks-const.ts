import {CITIES} from '../store/cities';

export const INSIDES = [
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

export const Max = {
  bedrooms: 7,
  maxAdults: 4,
  cityIndex: CITIES.length - 1,
  hostId: 25,
  images : 10,
  price: 10000,
  rating: 5,
  insides: INSIDES.length,
  favorites: 25,
  offers: 150
};

export const Min = {
  price: 100,
  rating: 1,
  insides: 2
};

export const INSIDES_SIZE = INSIDES.length - 1;
export const WORDS_IN_TITLE = 5;
