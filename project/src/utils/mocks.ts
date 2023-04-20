import {getRandomInt} from './random';
import {INSIDES, Max, Min, INSIDES_SIZE} from './mocks-const';
import {MapLocation} from '../types/types';
import {faker} from '@faker-js/faker';

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
