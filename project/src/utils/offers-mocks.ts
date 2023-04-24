import {RawPlace} from '../types/place-data-types';
import {getRandomInt} from './random';
import {Max} from './mocks-const';
import {makeFakeRawPlace} from './fake-raw-place';
import {makeFakePlace} from './fake-place';
import {adaptHosts, adaptPlace} from '../store/adapter';
import {makeRandomFakeHost} from './mocks';
import {faker} from '@faker-js/faker';
import {SortingVariants} from '../consts/sort-consts';

const makeFakeUsers = () => Array.from(new Array(getRandomInt(1, Max.hostId)), (_) => makeRandomFakeHost());

export const makeFakeRawOffers = (max?: number) => {
  const maxOffers = max ?? Max.offers;
  return Array.from(new Array(getRandomInt(1, maxOffers)),(element, index) => makeFakeRawPlace(index));
};

export const makeFakeOffers = (max?: number) => {
  const maxOffers = max ?? Max.offers;
  return Array.from(new Array(getRandomInt(1, maxOffers)),(element, index) => makeFakePlace(index));
};

export const makeOffersForFetchExpect = () => {
  const rawOffers: RawPlace[] = makeFakeRawOffers(Max.favorites);
  return {
    raw: rawOffers,
    offers: rawOffers.map((raw, index) => adaptPlace(raw, index)),
    hosts: adaptHosts(rawOffers.map((raw) => raw.host)),
    isFavorites: rawOffers.map((raw) => ({id: raw.id, isFavorite: raw.isFavorite})),
  };
};

export const makeFakesForAddUser = () => {
  const users = makeFakeUsers();
  const user = makeRandomFakeHost();
  const newUsers = Array.from(users);
  newUsers.push(user);
  return {
    entrance: users,
    out: newUsers,
    payload: user
  };
};

export const getRandomSortingVariant = () => faker.helpers.objectValue(SortingVariants);

export const makeFakesForUpdateFavorites = () => {
  const raws = Array.from(new Array(getRandomInt(1, Max.offers)),
    (element, index) => makeFakeRawPlace(index));
  const out = Array.from(raws, (raw) => ({
    id: raw.id,
    isFavorite: raw.isFavorite
  }));
  const entrance = out.map((element) => ({id: element.id, isFavorite: false}));
  const payload = raws.filter((raw) => raw.isFavorite);
  const hosts = adaptHosts(Array.from(payload, (raw) => raw.host));
  return {entrance, out, hosts, payload};
};

export const makeFakesForPostFavoriteExpect = () => {
  const raws = makeFakeRawOffers();
  const raw = raws[getRandomInt(0, raws.length - 1)];
  raw.isFavorite = !raw.isFavorite;
  const entrance = raws.map((element) => ({id: element.id, isFavorite: false}));
  const out = entrance.map((element) =>
    ({id: element.id, isFavorite: element.id === raw.id ? raw.isFavorite : element.isFavorite}));
  return{raw, entrance, out};
};
