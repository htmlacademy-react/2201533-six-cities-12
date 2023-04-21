import {getRandomInt} from './random';
import {INSIDES, Max, Min, INSIDES_SIZE} from './mocks-const';
import {MapLocation, User} from '../types/types';
import {faker} from '@faker-js/faker';
import dayjs from 'dayjs';

export const getRandomHost = (): User => ({
  id: getRandomInt(1, Max.hostId),
  isPro: true,
  name: faker.name.firstName(),
  avatarUrl: faker.image.avatar()
});

export const getInsides = () => {
  const insidesCount = getRandomInt(Min.insides, Max.insides);
  const insides: Set<number> = new Set();
  while (insides.size < insidesCount){
    insides.add(getRandomInt(0, INSIDES_SIZE));
  }
  return Array.from(insides, (index) => INSIDES[index]);
};

export const getLocation = (loc: MapLocation): MapLocation => {
  const coordinates = faker.address.nearbyGPSCoordinate([loc.latitude, loc.longitude]);
  return {
    longitude: parseFloat(coordinates[1]),
    latitude: parseFloat(coordinates[0]),
    zoom: loc.zoom
  };
};

export const getRandomRating = () => getRandomInt(Min.rating * 10, Max.rating * 10) / 10;

export const getRandomComment = () => faker.lorem.sentences(5, ' ').substring(0, 300);

export const getFakeComment = (id: number) => ({
  comment: getRandomComment(),
  date: dayjs().toISOString(),
  id: id,
  rating: getRandomInt(1, 5),
  user: getRandomHost()
});
