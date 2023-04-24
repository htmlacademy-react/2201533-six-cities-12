import {getRandomInt} from './random';
import {INSIDES, Max, Min, INSIDES_SIZE} from './mocks-const';
import {MapLocation, User} from '../types/types';
import {faker} from '@faker-js/faker';
import dayjs from 'dayjs';
import {Comment} from '../types/place-data-types';

export const makeRandomFakeHost = (idHost?: number): User => ({
  id: idHost ?? getRandomInt(1, Max.hostId),
  isPro: true,
  name: faker.name.firstName(),
  avatarUrl: faker.image.avatar()
});

export const makeFakeInsides = () => {
  const insidesCount = getRandomInt(Min.insides, Max.insides);
  const insides: Set<number> = new Set();
  while (insides.size < insidesCount){
    insides.add(getRandomInt(0, INSIDES_SIZE));
  }
  return Array.from(insides, (index) => INSIDES[index]);
};

export const makeFakeLocation = (loc: MapLocation): MapLocation => {
  const coordinates = faker.address.nearbyGPSCoordinate([loc.latitude, loc.longitude]);
  return {
    longitude: parseFloat(coordinates[1]),
    latitude: parseFloat(coordinates[0]),
    zoom: loc.zoom
  };
};

export const getRandomRating = () => getRandomInt(Min.rating * 10, Max.rating * 10) / 10;
export const getRandomComment = () => faker.lorem.sentences(5, ' ').substring(0, 300);
export const getRandomCityIndex = () => getRandomInt(0, Max.cityIndex);

export const makeFakeComment = (id: number) => ({
  comment: getRandomComment(),
  date: dayjs().toISOString(),
  id: id,
  rating: getRandomInt(1, 5),
  user: makeRandomFakeHost()
});

export const getFakeEmail = () => faker.internet.email();

export const makeFakeUser = {
  avatarUrl: faker.image.avatar(),
  email: getFakeEmail(),
  id: 1,
  isPro: true,
  name: faker.name.firstName(),
  token: 'kucft453'
};

export const makeFakeHosts = () => Array.from(new Array(3),(element, index) =>
  makeRandomFakeHost(index));

export const makeRandomFakeComments = (): Comment[] => Array.from(new Array(getRandomInt(1, 10)),(element, index) =>
  makeFakeComment(index));
