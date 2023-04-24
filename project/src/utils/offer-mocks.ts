import {makeFakeRawPlace} from './fake-raw-place';
import {getRandomInt} from './random';
import {makeFakeComment} from './mocks';
import {adaptPlace} from '../store/adapter';
import {makeFakePlace} from './fake-place';

export const makeFakeComments = () => Array.from(new Array(getRandomInt(0, 10)), (element, index) => makeFakeComment(index));

export const makeFakeDataFromFetchOffer = () => {
  const id = 3;
  const cityIndex = 2;
  const offer = makeFakeRawPlace(id, cityIndex);
  const near =
      Array.from(new Array(3), (element, index) => makeFakeRawPlace(index, cityIndex));
  const comments = makeFakeComments();
  return {
    entrance: [offer, near, comments],
    out: {
      offer: adaptPlace(offer, 0),
      near: Array.from(near, (element) => adaptPlace(element, 0)),
      comments: comments
    },
    id: id
  };
};

export const makeFakeNearOffers = (cityIndex: number) =>
  Array.from(new Array(3), (element, index) => makeFakePlace(index, cityIndex));

export const FAKE_TIMER: NodeJS.Timeout = {
  hasRef: () => true,
  ref: () => FAKE_TIMER,
  unref: () => FAKE_TIMER,
  refresh: () => FAKE_TIMER,
  [Symbol.toPrimitive]: () => 0
};
