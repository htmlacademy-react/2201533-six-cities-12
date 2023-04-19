import {MapLocation} from "./types/types";
import {TypeOffer} from "./settings";
import { faker } from '@faker-js/faker'
import {getRandomInt} from "./random";
import {CITIES} from "./store/cities";

const Max = {
  bedrooms: 7,
  maxAdults: 4,
  cityIndex: CITIES.length - 1,
  hostId: 25,
  images : 10,
  price: 10000,
  rating: 5
}

const Min = {
  price: 100,
  rating: 1
}

const WORDS_IN_TITLE = 5;

const getLocation = (location: MapLocation): MapLocation => {
  const coordinates = faker.address.nearbyGPSCoordinate([location.latitude, location.longitude]);
  return {
    longitude: parseFloat(coordinates[1]),
    latitude: parseFloat(coordinates[0]),
    zoom: location.zoom
  }
};

export const makeFakePlace = (id: number) => {
  const images=
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
  goods: string[],
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
}}


export type PlaceData = {

};
